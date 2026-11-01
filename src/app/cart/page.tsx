
"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/ui/Container";
import { useCart } from "../components/context/CartContext";
import { WHATSAPP_NUMBER } from "../components/config/whatsapp";
import { restaurantConfig } from "../components/config/restaurant";
import Reveal from "../components/ui/Reveal";

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
  const [fieldErrors, setFieldErrors] = useState({ name: "", phone: "", address: "" });
  const [checkoutError, setCheckoutError] = useState("");
  const deliveryFee = restaurantConfig.deliveryFee ?? null;
  const estimatedTotal = cartTotal + (deliveryFee ?? 0);

  const formatPrice = (price: number) =>
    `Rs. ${price.toLocaleString("en-PK")}`;

  const handleCheckout = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cartItems.length === 0) return;

    const phoneDigits = customerPhone.replace(/\D/g, "");
    const phoneCharactersValid = /^[+()\d\s-]+$/.test(customerPhone.trim());
    const nextErrors = {
      name: customerName.trim().length < 2 ? "Enter your name (at least 2 characters)." : "",
      phone:
        !phoneCharactersValid || phoneDigits.length < 7 || phoneDigits.length > 15
          ? "Use a valid phone number with 7 to 15 digits."
          : "",
      address:
        customerAddress.trim().length < 8
          ? "Enter a complete delivery address, including area or city."
          : "",
    };
    setFieldErrors(nextErrors);

    const firstInvalidField = Object.entries(nextErrors).find(([, error]) => error)?.[0];
    if (firstInvalidField) {
      document.getElementById(`customer${firstInvalidField[0].toUpperCase()}${firstInvalidField.slice(1)}`)?.focus();
      return;
    }

    if (!restaurantConfig.demoMode && !WHATSAPP_NUMBER) {
      setCheckoutError("The restaurant WhatsApp number has not been configured yet.");
      return;
    }

    setCheckoutError("");

    const orderItems = cartItems
      .map(
        (item) =>
          `${item.name} x ${item.quantity} = ${formatPrice(
            item.price * item.quantity
          )}`
      )
      .join("\n");

    const message = `
*${restaurantConfig.demoMode ? "SAMPLE ORDER - CONCEPT PREVIEW, NOT A LIVE ORDER" : `NEW ORDER - ${restaurantConfig.name.toUpperCase()}`}*

*Customer Details*
Name: ${customerName}
Phone: ${customerPhone}
Address: ${customerAddress}

*Order Items*
${orderItems}

*Total Items:* ${cartCount}
*Subtotal:* ${formatPrice(cartTotal)}
*Delivery Fee:* ${deliveryFee === null ? "To be confirmed with the restaurant" : formatPrice(deliveryFee)}
*Estimated Total:* ${deliveryFee === null ? `${formatPrice(cartTotal)} + delivery fee` : formatPrice(estimatedTotal)}
*Payment:* Confirm with the restaurant before ordering.

*Additional Instructions:*
${instructions.trim() || "None"}

${restaurantConfig.demoMode ? "This is sample demo content. Do not treat it as a real order." : "Please confirm my order. Thank you!"}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <main className="min-h-screen bg-[#1C1C1C] text-[#F5F0E8]">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#222222]">
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#B89A62]/10 blur-[100px]" />

          <Container size="wide">
            <div className="relative py-16 sm:py-20">
              <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B89A62]">
                <UtensilsCrossed size={15} />
                Foodies Hub
              </div>

              <h1 className="section-heading text-[clamp(2rem,8vw,3.5rem)] text-[#F5F0E8] sm:text-5xl md:text-6xl">
                Your Shopping Cart
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#B7B0A6] sm:text-base">
                Your favorite flavors are just a few steps away.
                Review your selection and get ready to enjoy.
              </p>

              <div className="mt-7 flex items-center gap-2 text-sm text-[#A49C91]">
                <ShoppingBag size={17} className="text-[#B89A62]" />
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
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[#B89A62]/30 bg-[#B89A62]/10">
                  <ShoppingBag size={34} className="text-[#B89A62]" />
                </div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#B89A62]">
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
                  className="mt-9 inline-flex items-center gap-3 bg-[#B89A62] px-7 py-4 text-sm font-semibold text-[#171713] transition hover:bg-[#9c7d48]"
                >
                  Explore Our Menu
                  <ArrowRight size={17} />
                </Link>
              </div>
            ) : (
              <>
              {restaurantConfig.demoMode && (
                <div role="note" className="mb-8 rounded-xl border border-amber-300/30 bg-amber-300/10 p-4 sm:p-5">
                  <p className="text-sm font-bold text-amber-100">Demo order preview - this is not a real order</p>
                  <p className="mt-1 text-xs leading-5 text-amber-100/70">Sample items, prices, and delivery details only. The cart is saved in this browser. Continuing creates a WhatsApp draft for preview; it is not delivered to a restaurant and no payment is taken.</p>
                </div>
              )}
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
                    {cartItems.map((item, index) => (
                      <Reveal key={item.id} delay={index * 0.05}>
                      <article
                        className="group flex flex-col gap-4 border border-white/10 bg-[#262626] p-3 transition hover:border-[#B89A62]/40 sm:flex-row sm:items-center sm:p-4"
                      >
                        <div className="relative aspect-[16/7] max-h-44 w-full shrink-0 overflow-hidden bg-[#333333] sm:aspect-auto sm:h-28 sm:max-h-none sm:w-32">
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
                          <p className="mt-3 text-sm font-semibold text-[#B89A62]">
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
                              className="flex h-11 w-11 items-center justify-center transition hover:bg-[#B89A62] hover:text-[#171713]"
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
                              className="flex h-11 w-11 items-center justify-center transition hover:bg-[#B89A62] hover:text-[#171713]"
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
                              className="flex h-11 w-11 items-center justify-center text-[#8F857A] transition hover:text-red-400"
                            >
                              <Trash2 size={17} />
                            </button>
                          </div>
                        </div>
                      </article>
                      </Reveal>
                    ))}
                  </div>

                  <Link
                    href="/menu"
                    className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#D8CFC2] transition hover:text-[#B89A62]"
                  >
                    <ArrowLeft size={17} />
                    Continue Shopping
                  </Link>
                </section>

                <aside className="border border-white/10 bg-[#262626] p-5 sm:p-6 lg:sticky lg:top-28">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#B89A62]">
                    Your Order
                  </p>

                  <h2 className="section-heading text-3xl">
                    Order Summary
                  </h2>

                  <div className="mt-8 space-y-5">
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-[#A49C91]">
                        Food subtotal ({cartCount} items)
                      </span>
                      <span className="font-medium">{formatPrice(cartTotal)}</span>
                    </div>

                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-[#A49C91]">
                        Delivery Fee
                      </span>
                      <span className="text-right text-xs text-[#B7B0A6]">
                        {deliveryFee === null ? "Confirm after area check" : formatPrice(deliveryFee)}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-[#A49C91]">Payment</span>
                      <span className="text-right text-xs text-[#B7B0A6]">
                        {restaurantConfig.demoMode
                          ? "Not configured in preview"
                          : "Confirm in WhatsApp"}
                      </span>
                    </div>

                    <div className="border-t border-white/10 pt-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold">
                          {deliveryFee === null ? "Estimated total" : "Order total"}
                        </span>
                        <span className="text-right text-xl font-bold text-[#B89A62] sm:text-2xl">
                          {deliveryFee === null
                            ? `${formatPrice(cartTotal)} + delivery`
                            : formatPrice(estimatedTotal)}
                        </span>
                      </div>
                      {deliveryFee === null && (
                        <p className="mt-2 text-xs leading-5 text-[#A49C91]">
                          Delivery fee depends on your area and is not included yet.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Customer Checkout Form */}
                  <form onSubmit={handleCheckout} noValidate className="mt-8 space-y-5">
                    <div className="border-t border-white/10 pt-7">
                      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#B89A62]">
                        Demo Delivery Details
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
                            minLength={2}
                            aria-invalid={Boolean(fieldErrors.name)}
                            aria-describedby={fieldErrors.name ? "customerName-error" : undefined}
                            value={customerName}
                            onChange={(event) => {
                              setCustomerName(event.target.value);
                              setFieldErrors((current) => ({ ...current, name: "" }));
                            }}
                            placeholder="Enter your full name"
                            className="w-full border border-white/15 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#77736e] focus:border-[#B89A62]"
                          />
                          {fieldErrors.name && <p id="customerName-error" role="alert" className="mt-1.5 text-xs text-red-300">{fieldErrors.name}</p>}
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
                            inputMode="tel"
                            aria-invalid={Boolean(fieldErrors.phone)}
                            aria-describedby={fieldErrors.phone ? "customerPhone-error" : undefined}
                            value={customerPhone}
                            onChange={(event) => {
                              setCustomerPhone(event.target.value);
                              setFieldErrors((current) => ({ ...current, phone: "" }));
                            }}
                            placeholder="03XX XXX XXXX"
                            className="w-full border border-white/15 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#77736e] focus:border-[#B89A62]"
                          />
                          {fieldErrors.phone && <p id="customerPhone-error" role="alert" className="mt-1.5 text-xs text-red-300">{fieldErrors.phone}</p>}
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
                            minLength={8}
                            aria-invalid={Boolean(fieldErrors.address)}
                            aria-describedby={fieldErrors.address ? "customerAddress-error" : undefined}
                            value={customerAddress}
                            onChange={(event) => {
                              setCustomerAddress(event.target.value);
                              setFieldErrors((current) => ({ ...current, address: "" }));
                            }}
                            placeholder="Street, area, Karachi (sample)"
                            className="w-full resize-y border border-white/15 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#77736e] focus:border-[#B89A62]"
                          />
                          {fieldErrors.address && <p id="customerAddress-error" role="alert" className="mt-1.5 text-xs text-red-300">{fieldErrors.address}</p>}
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
                            className="w-full resize-y border border-white/15 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#77736e] focus:border-[#B89A62]"
                          />
                        </div>
                      </div>
                    </div>

                    {checkoutError && (
                      <p role="alert" className="rounded-lg border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                        {checkoutError}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="flex min-h-12 w-full items-center justify-center gap-3 bg-[#B89A62] px-5 py-4 text-sm font-bold text-[#171713] transition duration-300 hover:bg-[#9c7d48]"
                    >
                      {restaurantConfig.demoMode ? "Preview in WhatsApp" : "Continue to WhatsApp"}
                      <ArrowRight size={17} />
                    </button>
                  </form>

                  <p className="mt-4 text-center text-xs leading-6 text-[#8F857A]">
                    {restaurantConfig.demoMode
                      ? "A sample order draft opens in WhatsApp. No restaurant receives it, and no payment is taken."
                      : "Review the order in WhatsApp and send it to the restaurant. Delivery fee and payment are confirmed there."}
                  </p>

                  <div className="mt-7 flex items-center justify-center gap-2 border-t border-white/10 pt-6 text-xs text-[#A49C91]">
                    <ShoppingBag size={15} className="text-[#B89A62]" />
                    Freshly prepared with care
                  </div>
                </aside>
              </div>
              </>
            )}
          </div>
        </Container>
      </main>
    </>
  );
}
