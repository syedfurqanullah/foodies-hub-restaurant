
"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Container from "../components/ui/Container";
import { useCart } from "../components/context/CartContext";
import { WHATSAPP_NUMBER } from "../components/config/whatsapp";

import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  UtensilsCrossed,
} from "lucide-react";

export default function CartPage() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
    isCartReady,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [instructions, setInstructions] = useState("");

  const formatPrice = (price: number) =>
    `Rs. ${price.toLocaleString("en-PK")}`;

  const handleCheckout = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cartItems.length === 0) return;

    const orderItems = cartItems
      .map(
        (item) =>
          `${item.name} x ${item.quantity} = ${formatPrice(
            item.price * item.quantity
          )}`
      )
      .join("\n");

    const message = `
*NEW ORDER - FOODIES HUB*

*Customer Details*
Name: ${customerName}
Phone: ${customerPhone}
Address: ${customerAddress}

*Order Items*
${orderItems}

*Total Items:* ${cartCount}
*Subtotal:* ${formatPrice(cartTotal)}

*Additional Instructions:*
${instructions.trim() || "None"}

Please confirm my order. Thank you!
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#1C1C1C] text-[#F5F0E8]">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#222222]">
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#E87532]/10 blur-[100px]" />

          <Container size="wide">
            <div className="relative py-16 sm:py-20">
              <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E87532]">
                <UtensilsCrossed size={15} />
                Foodies Hub
              </div>

              <h1 className="section-heading text-4xl text-[#F5F0E8] sm:text-5xl md:text-6xl">
                Your Shopping Cart
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#B7B0A6] sm:text-base">
                Your favorite flavors are just a few steps away.
                Review your selection and get ready to enjoy.
              </p>

              <div className="mt-7 flex items-center gap-2 text-sm text-[#A49C91]">
                <ShoppingBag size={17} className="text-[#E87532]" />
                {isCartReady
                  ? `${cartCount} ${cartCount === 1 ? "item" : "items"} in your cart`
                  : "Loading your cart..."}
              </div>
            </div>
          </Container>
        </section>

        <Container size="wide">
          <div className="py-12 sm:py-16">
            {!isCartReady ? (
              <div className="py-24 text-center">
                <p className="text-[#B7B0A6]">Loading your cart...</p>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="mx-auto max-w-2xl border border-white/10 bg-[#242424] px-6 py-16 text-center sm:px-12">
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[#E87532]/30 bg-[#E87532]/10">
                  <ShoppingBag size={34} className="text-[#E87532]" />
                </div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#E87532]">
                  Nothing selected yet
                </p>

                <h2 className="section-heading text-3xl text-[#F5F0E8]">
                  Your Cart is Empty
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#A49C91]">
                  Explore our menu and discover your next favorite meal.
                </p>

                <Link
                  href="/menu"
                  className="mt-9 inline-flex items-center gap-3 bg-[#E87532] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#CF6429]"
                >
                  Explore Our Menu
                  <ArrowRight size={17} />
                </Link>
              </div>
            ) : (
              <div className="grid items-start gap-10 lg:grid-cols-[1fr_380px]">
                <section>
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                    <div>
                      <h2 className="section-heading text-2xl">
                        Your Selection
                      </h2>
                      <p className="mt-2 text-sm text-[#A49C91]">
                        Review your selected dishes.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={clearCart}
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D78A78] hover:text-red-400"
                    >
                      <Trash2 size={15} />
                      Clear Cart
                    </button>
                  </div>

                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <article
                        key={item.id}
                        className="group flex flex-col gap-5 border border-white/10 bg-[#262626] p-4 transition hover:border-[#E87532]/40 sm:flex-row sm:items-center sm:p-5"
                      >
                        <div className="relative h-52 w-full shrink-0 overflow-hidden bg-[#333333] sm:h-28 sm:w-32">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 128px"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="section-heading text-xl">
                            {item.name}
                          </h3>
                          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#A49C91]">
                            {item.description}
                          </p>
                          <p className="mt-3 text-sm font-semibold text-[#E87532]">
                            {formatPrice(item.price)}{" "}
                            <span className="font-normal text-[#898176]">
                              / item
                            </span>
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 sm:flex-col sm:items-end">
                          <div className="flex items-center border border-white/15 bg-[#1C1C1C]">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              aria-label={`Decrease ${item.name} quantity`}
                              className="flex h-9 w-9 items-center justify-center transition hover:bg-[#E87532]"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="min-w-9 text-center text-sm font-semibold">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              aria-label={`Increase ${item.name} quantity`}
                              className="flex h-9 w-9 items-center justify-center transition hover:bg-[#E87532]"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <div className="flex items-center gap-4">
                            <p className="font-semibold">
                              {formatPrice(item.price * item.quantity)}
                            </p>

                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              aria-label={`Remove ${item.name}`}
                              className="text-[#8F857A] transition hover:text-red-400"
                            >
                              <Trash2 size={17} />
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  <Link
                    href="/menu"
                    className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#D8CFC2] transition hover:text-[#E87532]"
                  >
                    <ArrowLeft size={17} />
                    Continue Shopping
                  </Link>
                </section>

                <aside className="border border-white/10 bg-[#262626] p-6 sm:p-8 lg:sticky lg:top-28">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#E87532]">
                    Your Order
                  </p>

                  <h2 className="section-heading text-3xl">
                    Order Summary
                  </h2>

                  <div className="mt-8 space-y-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#A49C91]">
                        Items ({cartCount})
                      </span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>

                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-[#A49C91]">
                        Delivery Charges
                      </span>
                      <span className="text-right text-xs text-[#B7B0A6]">
                        Confirmed at checkout
                      </span>
                    </div>

                    <div className="border-t border-white/10 pt-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold">Subtotal</span>
                        <span className="text-2xl font-bold text-[#E87532]">
                          {formatPrice(cartTotal)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Checkout Form */}
                  <form onSubmit={handleCheckout} className="mt-8 space-y-5">
                    <div className="border-t border-white/10 pt-7">
                      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E87532]">
                        Delivery Information
                      </p>

                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="customerName"
                            className="mb-2 block text-sm text-[#D8CFC2]"
                          >
                            Full Name
                          </label>
                          <input
                            id="customerName"
                            type="text"
                            autoComplete="name"
                            required
                            maxLength={80}
                            value={customerName}
                            onChange={(event) =>
                              setCustomerName(event.target.value)
                            }
                            placeholder="Enter your full name"
                            className="w-full border border-white/15 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#77736e] focus:border-[#E87532]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="customerPhone"
                            className="mb-2 block text-sm text-[#D8CFC2]"
                          >
                            Phone Number
                          </label>
                          <input
                            id="customerPhone"
                            type="tel"
                            autoComplete="tel"
                            required
                            maxLength={20}
                            value={customerPhone}
                            onChange={(event) =>
                              setCustomerPhone(event.target.value)
                            }
                            placeholder="03XX XXXXXXX"
                            className="w-full border border-white/15 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#77736e] focus:border-[#E87532]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="customerAddress"
                            className="mb-2 block text-sm text-[#D8CFC2]"
                          >
                            Delivery Address
                          </label>
                          <textarea
                            id="customerAddress"
                            autoComplete="street-address"
                            required
                            rows={3}
                            maxLength={300}
                            value={customerAddress}
                            onChange={(event) =>
                              setCustomerAddress(event.target.value)
                            }
                            placeholder="Enter your complete address"
                            className="w-full resize-y border border-white/15 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#77736e] focus:border-[#E87532]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="instructions"
                            className="mb-2 block text-sm text-[#D8CFC2]"
                          >
                            Additional Instructions{" "}
                            <span className="text-[#898176]">(Optional)</span>
                          </label>
                          <textarea
                            id="instructions"
                            rows={2}
                            maxLength={300}
                            value={instructions}
                            onChange={(event) =>
                              setInstructions(event.target.value)
                            }
                            placeholder="Any special instructions?"
                            className="w-full resize-y border border-white/15 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#77736e] focus:border-[#E87532]"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-3 bg-[#E87532] px-5 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#CF6429]"
                    >
                      Place Order on WhatsApp
                      <ArrowRight size={17} />
                    </button>
                  </form>

                  <p className="mt-4 text-center text-xs leading-6 text-[#8F857A]">
                    Your order details will open in WhatsApp for confirmation.
                  </p>

                  <div className="mt-7 flex items-center justify-center gap-2 border-t border-white/10 pt-6 text-xs text-[#A49C91]">
                    <ShoppingBag size={15} className="text-[#E87532]" />
                    Freshly prepared with care
                  </div>
                </aside>
              </div>
            )}
          </div>
        </Container>
      </main>
    </>
  );
}
