
export default function WhatsAppButton() {
  const phoneNumber = "923001234567"; // Replace with actual WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        "Hi Foodies Hub! I would like to know more."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-110 hover:bg-[#20BA5A]"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 .5A15.5 15.5 0 0 0 2.7 24l-2 7.2 7.4-1.9A15.5 15.5 0 1 0 16 .5Zm0 28.3a12.7 12.7 0 0 1-6.5-1.8l-.5-.3-4.4 1.2 1.2-4.3-.3-.5A12.8 12.8 0 1 1 16 28.8Zm7-9.6c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3s1.3 3.4 1.5 3.6c.2.2 2.5 3.8 6.1 5.3.9.4 1.6.6 2.1.7.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z" />
      </svg>
    </a>
  );
}
