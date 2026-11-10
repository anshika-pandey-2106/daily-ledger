import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fraunces, Literata, Special_Elite } from "next/font/google";
import "./globals.css";

const mastheadFont = localFont({
  src: "./fonts/UnifrakturCook-Bold.ttf",
  weight: "700",
  variable: "--loaded-font-masthead",
  display: "swap",
});

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--loaded-font-display",
  display: "swap",
});

const bodyFont = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--loaded-font-body",
  display: "swap",
});

const supportFont = Literata({
  subsets: ["latin"],
  variable: "--loaded-font-support",
  display: "swap",
});

const labelFont = localFont({
  src: "./fonts/DMSans-variable.ttf",
  weight: "100 1000",
  variable: "--loaded-font-label",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Daily Ledger",
    template: "%s | The Daily Ledger",
  },
  description: "Markets and money, made legible.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${mastheadFont.variable} ${displayFont.variable} ${bodyFont.variable} ${supportFont.variable} ${labelFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
