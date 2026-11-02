
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { PopularDish } from "../data/popularDishes";

export interface CartItem extends PopularDish {
  quantity: number;
  originalPrice?: number;
  discount?: string;
  isDeal?: boolean;
}

type CartProductInput = Omit<PopularDish, "category"> & {
  category?: string;
  originalPrice?: number;
  discount?: string;
  isDeal?: boolean;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartProductInput) => void;
  removeFromCart: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartReady: boolean;
  lastAddedItem: CartItem | null;
  isCartPreviewOpen: boolean;
  closeCartPreview: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "foodies-hub-cart";

function isCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") return false;

  const item = value as Partial<CartItem>;
  return (
    typeof item.id === "string" &&
    typeof item.name === "string" &&
    typeof item.description === "string" &&
    typeof item.image === "string" &&
    typeof item.category === "string" &&
    typeof item.price === "number" &&
    Number.isFinite(item.price) &&
    item.price >= 0 &&
    typeof item.quantity === "number" &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0
  );
}

function readSavedCart(): CartItem[] {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (!savedCart) return [];

    const parsedCart: unknown = JSON.parse(savedCart);
    return Array.isArray(parsedCart) ? parsedCart.filter(isCartItem) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartReady, setIsCartReady] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<CartItem | null>(null);
  const [isCartPreviewOpen, setIsCartPreviewOpen] = useState(false);

  useEffect(() => {
    // Load client storage after hydration so the server and first render stay in sync.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCartItems(readSavedCart());
    setIsCartReady(true);
  }, []);

  useEffect(() => {
    if (!isCartReady) return;

    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Keep cart interactions available when browser storage is disabled or full.
    }
  }, [cartItems, isCartReady]);

  const addToCart = (product: CartProductInput) => {
    const cartProduct: CartItem = {
      ...product,
      category: product.category ?? "general",
      quantity: 1,
    };

    const existingItem = cartItems.find((item) => item.id === product.id);
    setLastAddedItem(
      existingItem
        ? { ...existingItem, quantity: existingItem.quantity + 1 }
        : cartProduct,
    );
    setIsCartPreviewOpen(true);

    setCartItems((currentItems) => {
      const currentItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (currentItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, cartProduct];
    });
  };

  const removeFromCart = (dishId: string) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== dishId)
    );
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === dishId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setCartItems([]);
  const closeCartPreview = useCallback(() => setIsCartPreviewOpen(false), []);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartReady,
        lastAddedItem,
        isCartPreviewOpen,
        closeCartPreview,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
