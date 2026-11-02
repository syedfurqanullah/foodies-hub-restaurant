const priceFormatter = new Intl.NumberFormat("en-PK", {
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return `Rs. ${priceFormatter.format(amount)}`;
}
