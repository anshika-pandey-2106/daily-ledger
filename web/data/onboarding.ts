export const onboardingTopics = [
  "Markets",
  "Central Banks",
  "Personal Finance",
  "Banking",
  "Commodities",
  "Stocks and Equities",
  "Bonds and Fixed Income",
  "Currencies and Forex",
  "Cryptocurrency",
  "Startups and Venture Capital",
  "Private Equity",
  "Real Estate",
  "Earnings",
  "Technology",
  "Artificial Intelligence",
  "Trade and Geopolitics",
  "Macroeconomics",
  "Inflation",
  "Interest Rates",
  "Energy",
  "Global Economy",
  "Business and Companies",
  "Entrepreneurship",
  "Economic Policy",
] as const;

export type OnboardingTopic = (typeof onboardingTopics)[number];

export const wideOnboardingTopics: readonly OnboardingTopic[] = [
  "Stocks and Equities",
  "Bonds and Fixed Income",
  "Currencies and Forex",
  "Startups and Venture Capital",
  "Artificial Intelligence",
  "Trade and Geopolitics",
  "Business and Companies",
  "Entrepreneurship",
];

export const knowledgeLevels = [
  {
    id: "beginner",
    label: "Beginner",
    description: "Start with the essentials and explain unfamiliar terms.",
  },
  {
    id: "intermediate",
    label: "Intermediate",
    description: "Build on the basics with a little more market context.",
  },
  {
    id: "advanced",
    label: "Advanced",
    description: "Keep the detail and assume familiarity with finance language.",
  },
] as const;

export type KnowledgeLevel = (typeof knowledgeLevels)[number]["id"];
