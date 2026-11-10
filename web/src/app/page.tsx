import type { Metadata } from "next";
import { FrontPage } from "../../components/paper";
import "../../components/paper/front-page.css";

export const metadata: Metadata = {
  title: "The Daily Ledger",
  description: "A static, illustrative front page for The Daily Ledger.",
};

export default function HomePage() {
  return <FrontPage />;
}
