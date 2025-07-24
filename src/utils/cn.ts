import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names using clsx, then merge using tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
