import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customFontSizes = [
  "6r",
  "6m",
  "6s",
  "6b",
  "8r",
  "8m",
  "8s",
  "8b",
  "10r",
  "10m",
  "10s",
  "10b",
  "12r",
  "12m",
  "12s",
  "12b",
  "14r",
  "14m",
  "14s",
  "14b",
  "16r",
  "16m",
  "16s",
  "16b",
  "18r",
  "18m",
  "18s",
  "18b",
  "20r",
  "20m",
  "20s",
  "20b",
  "24r",
  "24m",
  "24s",
  "24b",
  "28r",
  "28m",
  "28s",
  "28b",
  "32r",
  "32m",
  "32s",
  "32b",
  "60r",
  "60m",
  "60s",
  "60b",
  "2xs", // Bạn có define thêm cái này trong extend
];

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Báo cho thư viện biết các class text-... này thuộc nhóm font-size
      "font-size": customFontSizes.map((size) => ({ text: [size] })),
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(...inputs));
}

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(...inputs));
// }
