import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { BASE_URL_ENDPOINT } from "@/constants/endpoints";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL_ENDPOINT}${normalizedPath}`;
};
