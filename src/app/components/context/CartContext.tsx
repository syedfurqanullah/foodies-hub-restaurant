
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { PopularDish } from "../data/popularDishes";

export interface CartItem extends PopularDish {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (dish: PopularDish) => void;
  removeFromCart: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartReady: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "foodies-hub-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartReady, setIsCartReady] = useState(false);

  // Load saved cart from browser storage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (savedCart) {
        const parsedCart: CartItem[] = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        }
      }
    } catch {
      localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setIsCartReady(true);
    }
  }, []);

  // Save cart whenever its contents change
  useEffect(() => {
    if (!isCartReady) return;

    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cartItems)
    );
  }, [cartItems, isCartReady]);

  const addToCart = (dish: PopularDish) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === dish.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...dish, quantity: 1 }];
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

  const clearCart = () => {
    setCartItems([]);
  };

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
