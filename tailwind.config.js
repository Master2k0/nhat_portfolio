/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "6r": [
        "6px",
        {
          lineHeight: "9px",
          fontWeight: "400",
        },
      ],
      "6m": [
        "6px",
        {
          lineHeight: "9px",
          fontWeight: "500",
        },
      ],
      "6s": [
        "6px",
        {
          lineHeight: "9px",
          fontWeight: "600",
        },
      ],
      "6b": [
        "6px",
        {
          lineHeight: "9px",
          fontWeight: "700",
        },
      ],
      "8r": [
        "8px",
        {
          lineHeight: "12px",
          fontWeight: "400",
        },
      ],
      "8m": [
        "8px",
        {
          lineHeight: "12px",
          fontWeight: "500",
        },
      ],
      "8s": [
        "8px",
        {
          lineHeight: "12px",
          fontWeight: "600",
        },
      ],
      "8b": [
        "8px",
        {
          lineHeight: "12px",
          fontWeight: "700",
        },
      ],
      "10r": [
        "10px",
        {
          lineHeight: "15px",
          fontWeight: "400",
        },
      ],
      "10m": [
        "10px",
        {
          lineHeight: "15px",
          fontWeight: "500",
        },
      ],
      "10s": [
        "10px",
        {
          lineHeight: "15px",
          fontWeight: "600",
        },
      ],
      "10b": [
        "10px",
        {
          lineHeight: "15px",
          fontWeight: "700",
        },
      ],
      "12r": [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      "12m": [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "500",
        },
      ],
      "12s": [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "600",
        },
      ],
      "12b": [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "700",
        },
      ],
      "14r": [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "400",
        },
      ],
      "14m": [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "500",
        },
      ],
      "14s": [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "600",
        },
      ],
      "14b": [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "700",
        },
      ],
      "16r": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      "16m": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
        },
      ],
      "16s": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "600",
        },
      ],
      "16b": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "700",
        },
      ],
      "18r": [
        "18px",
        {
          lineHeight: "27px",
          fontWeight: "400",
        },
      ],
      "18m": [
        "18px",
        {
          lineHeight: "27px",
          fontWeight: "500",
        },
      ],
      "18s": [
        "18px",
        {
          lineHeight: "27px",
          fontWeight: "600",
        },
      ],
      "18b": [
        "18px",
        {
          lineHeight: "27px",
          fontWeight: "700",
        },
      ],
      "20r": [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "400",
        },
      ],
      "20m": [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "500",
        },
      ],
      "20s": [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "600",
        },
      ],
      "20b": [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "700",
        },
      ],
      "24r": [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "400",
        },
      ],
      "24m": [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "500",
        },
      ],
      "24s": [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "600",
        },
      ],
      "24b": [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "700",
        },
      ],
      "32r": [
        "32px",
        {
          lineHeight: "48px",
          fontWeight: "400",
        },
      ],
      "32m": [
        "32px",
        {
          lineHeight: "48px",
          fontWeight: "500",
        },
      ],
      "32s": [
        "32px",
        {
          lineHeight: "48px",
          fontWeight: "600",
        },
      ],
      "32b": [
        "32px",
        {
          lineHeight: "48px",
          fontWeight: "700",
        },
      ],
    },
    screens: {
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "gravel-25": "#F7F7F8",
        "gravel-50": "#EEEEF0",
        "gravel-100": "#D9D9DE",
        "gravel-200": "#B8B8C1",
        "gravel-300": "#92929E",
        "gravel-400": "#757682",
        "gravel-500": "#5E5E6B",
        "gravel-600": "#4E4D57",
        "gravel-700": "#42424A",
        "gravel-800": "#3A3A40",
        "gravel-900": "#26262B",
        likedin: "#0A66C2",
        gmail: "#C71610",
        behance: "#0057FF",
        dribbble: "#EA4C89",
        ball: "#B8B8C1",
        "vp-logo": "#008346",
        white: "#FFFFFF",
        black: "#000000",
        background: "#0F0F10",
        "block-bg": "#242427",
        select: "#39393C",
        yellow: "#F2D76F",
        red: "#F44235",
        overlay: "rgba(0,0,0,0.8",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      "washUp-container": {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1272px",
          xl: "1272px",
          "2xl": "1272px",
          "3xl": "1272px",
          "4xl": "1272px",
          "5xl": "1272px",
        },
      },
      fontSize: {
        "2xs": "10px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
