import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mastheadFont = localFont({
  src: "./fonts/UnifrakturCook-Bold.ttf",
  weight: "700",
  variable: "--loaded-font-masthead",
  display: "swap",
});

const displayFont = localFont({
  src: "./fonts/PlayfairDisplay-variable.ttf",
  weight: "400 900",
  variable: "--loaded-font-display",
  display: "swap",
});

const bodyFont = localFont({
  src: "./fonts/SourceSerif4-variable.ttf",
  weight: "200 900",
  variable: "--loaded-font-body",
  display: "swap",
});

const labelFont = localFont({
  src: "./fonts/DMSans-variable.ttf",
  weight: "100 1000",
  variable: "--loaded-font-label",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design tokens | The Daily Ledger",
  description: "A visual reference for The Daily Ledger design system tokens.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${mastheadFont.variable} ${displayFont.variable} ${bodyFont.variable} ${labelFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
