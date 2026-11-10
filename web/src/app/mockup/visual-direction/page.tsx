import type { Metadata } from "next";
import { VisualDirectionPage } from "../../../../components/visual-direction/VisualDirectionPage";
import "./visual-direction.css";

export const metadata: Metadata = {
  title: "Visual direction exploration",
  description: "A temporary editorial colour and component study for The Daily Ledger.",
};

export default function VisualDirectionMockupPage() {
  return <VisualDirectionPage />;
}
