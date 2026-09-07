/**
 * Class name merger utility
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format price to Indian Rupees display
 */
export function formatPrice(price: string | number): string {
  if (typeof price === "string" && price.startsWith("₹")) {
    return price;
  }
  return `₹${price}`;
}

/**
 * Clean phone numbers for tel: links
 */
export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}
