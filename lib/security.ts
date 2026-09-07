/**
 * High-Security String & Input Sanitization Utilities
 */

/**
 * Strips dangerous HTML / script tags from user input to prevent XSS attacks
 */
export function sanitizeString(input: string): string {
  if (!input) return "";
  return input
    .replace(/[<>]/g, "") // Strip raw angle brackets
    .replace(/javascript:/gi, "") // Strip javascript: URIs
    .replace(/vbscript:/gi, "")
    .replace(/onload|onerror|onclick|onmouseover/gi, "")
    .trim();
}

/**
 * Validates URLs against open redirect and malicious schemes
 */
export function sanitizeUrl(url: string, allowedOrigins: string[] = []): string {
  if (!url) return "#";
  const trimmed = url.trim();

  // Allow relative paths
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    if (!["http:", "https:", "tel:", "mailto:"].includes(parsed.protocol)) {
      return "#";
    }

    if (allowedOrigins.length > 0 && !allowedOrigins.includes(parsed.origin)) {
      return "#";
    }

    return trimmed;
  } catch {
    return "#";
  }
}

/**
 * Strict Phone Number Validator for Indian standard & international numbers
 */
export function isValidPhoneNumber(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, "");
  return /^(\+?91)?[6-9]\d{9}$/.test(cleaned);
}

/**
 * Standard RFC-compliant Email Validator
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
}
