import type { Metadata } from "next";
import { OnboardingPage } from "../../../../components/onboarding";
import "./onboarding.css";

export const metadata: Metadata = {
  title: "Choose Your Sections",
  description: "An illustrative onboarding mockup for choosing topics in The Daily Ledger.",
};

export default function OnboardingMockupPage() {
  return <OnboardingPage />;
}
