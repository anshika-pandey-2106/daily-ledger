import type { Metadata } from "next";
import { ArticlePage } from "../../../../components/article/ArticlePage";
import "./article.css";

export const metadata: Metadata = {
  title: "When a smaller payment stretches a loan’s cost",
  description: "An illustrative article reading mockup from The Daily Ledger.",
};

export default function ArticleMockupPage() {
  return <ArticlePage />;
}
