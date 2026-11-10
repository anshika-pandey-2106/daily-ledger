import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export default function TypographyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={newsreader.variable}>
      {children}
    </div>
  );
}
