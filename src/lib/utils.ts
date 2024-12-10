import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function sanitizePhoneNumber(phoneNumber: string) {
  // Remove any non-numeric characters from the phone number
  const sanitized = phoneNumber.replace(/\D/g, '');

  // Check for common prefixes and remove them
  if (sanitized.startsWith('09')) {
    return sanitized.slice(1); // Remove the '09' prefix
  } else if (sanitized.startsWith('639')) {
    return sanitized.slice(2); // Remove the '639' prefix
  } else if (sanitized.startsWith('+639')) {
    return sanitized.slice(3); // Remove the '+639' prefix
  } else if (sanitized.length === 10) {
    return sanitized; // Already a 10-digit number
  }

  // If the number is not in a valid format, return null or throw an error
  throw new Error('Invalid phone number format');
}