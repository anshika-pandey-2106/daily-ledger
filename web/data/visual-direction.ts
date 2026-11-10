export type StoryTreatment = "paper" | "wash" | "navy" | "butter" | "red-rule";

export type DirectionStory = {
  eyebrow: string;
  headline: string;
  summary: string;
  treatment: StoryTreatment;
  intensity: string;
};

export const directionStories: DirectionStory[] = [
  {
    eyebrow: "Personal finance · Illustrative",
    headline: "The three-pocket budget",
    summary: "A fictional household gives regular bills, a buffer and small pleasures their own lines.",
    treatment: "paper",
    intensity: "Paper first",
  },
  {
    eyebrow: "Household money · Illustrative",
    headline: "A little room for the odd week",
    summary: "A sample story follows how a modest cushion can make a plan easier to read.",
    treatment: "wash",
    intensity: "Tinted note",
  },
  {
    eyebrow: "From the desk · Illustrative",
    headline: "Plan for the month, leave space for life",
    summary: "One fictional budget makes room for costs that do not arrive on schedule.",
    treatment: "navy",
    intensity: "Colour field",
  },
  {
    eyebrow: "Money in practice · Illustrative",
    headline: "When the calendar meets the cash flow",
    summary: "A made-up example marks the weeks when household bills bunch together.",
    treatment: "butter",
    intensity: "Warm emphasis",
  },
  {
    eyebrow: "A note from the desk · Illustrative",
    headline: "Every plan needs a margin",
    summary: "A small raspberry rule brings attention to one useful question without colouring the whole page.",
    treatment: "red-rule",
    intensity: "Accent only",
  },
];

export const paletteStudies = [
  { name: "Editorial navy", value: "#19334D", use: "Pull quotes, navigation and focused story fields", token: "navy" },
  { name: "Raspberry pink", value: "#E30B5D", use: "Large display accents, rules and small illustrations", token: "red" },
  { name: "Butter yellow", value: "#F2D77B", use: "Notes, highlighted terms and warm story fields", token: "butter" },
  { name: "Newspaper cream", value: "Current paper token", use: "Page canvas and quiet surfaces", token: "paper" },
  { name: "Near-black ink", value: "Current ink token", use: "Reading text and fine editorial rules", token: "ink" },
] as const;

