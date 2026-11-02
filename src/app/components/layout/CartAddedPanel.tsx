"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ShoppingBag, X } from "lucide-react";

import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

export default function CartAddedPanel() {
  const {
    cartItems,
    closeCartPreview,
    isCartPreviewOpen,
    lastAddedItem,
  } = useCart();

  const cartItem = lastAddedItem
    ? cartItems.find((item) => item.id === lastAddedItem.id) ?? lastAddedItem
    : null;

  useEffect(() => {
    if (!isCartPreviewOpen) return;

    const timeoutId = window.setTimeout(closeCartPreview, 3200);
    return () => window.clearTimeout(timeoutId);
  }, [closeCartPreview, isCartPreviewOpen, lastAddedItem]);

  if (!isCartPreviewOpen || !cartItem) return null;

  return (
    <aside
      role="status"
      aria-live="polite"
      className="fixed bottom-4 right-4 z-[120] w-[calc(100vw-2rem)] max-w-sm sm:bottom-6 sm:right-6"
      data-cart-notice
    >
      <div className="overflow-hidden rounded-xl border border-brand-accent/30 bg-[#211f1a] text-[#F4EFE5] shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent/15">
              <Check size={14} />
            </span>
            Added to your cart
          </p>

          <button
            type="button"
            onClick={closeCartPreview}
            aria-label="Dismiss cart notification"
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/55 transition hover:bg-white/5 hover:text-white"
          >
            <X size={17} />
          </button>
        </div>

        <div key={`${cartItem.id}-${cartItem.quantity}`} className="flex gap-3 p-4" data-cart-added-card>
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white/5">
            <Image
              src={cartItem.image}
              alt={cartItem.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="line-clamp-1 text-sm font-semibold">{cartItem.name}</p>
            <p className="mt-1 text-xs text-white/50">
              Qty {cartItem.quantity} <span aria-hidden="true">·</span> {formatPrice(cartItem.price)} each
            </p>
            <p className="mt-1 text-sm font-semibold text-brand-accent">
              Item total: {formatPrice(cartItem.price * cartItem.quantity)}
            </p>
          </div>

          <span className="flex h-7 min-w-7 items-center justify-center self-start rounded-full bg-brand-accent px-2 text-xs font-bold text-[#171713]">
            {cartItem.quantity}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
          <span className="inline-flex items-center gap-2 text-[11px] text-white/45">
            <ShoppingBag size={14} /> Keep adding items
          </span>
          <Link
            href="/cart"
            onClick={closeCartPreview}
            className="inline-flex min-h-10 items-center justify-center rounded-lg bg-brand-accent px-4 py-2 text-xs font-bold text-[#171713] transition hover:bg-[#9c7d48]"
          >
            View Cart
          </Link>
        </div>
      </div>
    </aside>
  );
}
