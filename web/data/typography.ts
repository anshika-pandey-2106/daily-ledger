export type ArticleRunStyle = "bold" | "italic" | "highlight";

export type ArticleRun = {
  text: string;
  style?: ArticleRunStyle;
};

export type ArticleParagraph = ArticleRun[];

// One fictional story, shared by every specimen so the comparison stays focused on type.
export const typographyStory = {
  category: "Personal Finance",
  date: "Monday, 9 November 2026",
  byline: "The Illustrative Desk",
  headline: "When a smaller payment stretches a loan’s cost",
  summary:
    "A fictional household compares two sample loan schedules and learns why the monthly payment is only one part of the picture.",
  paragraphs: [
    [
      { text: "In this illustrative case, a household compares two fictional loan offers. One promises a " },
      { text: "lower monthly payment", style: "bold" },
      { text: "; the other is scheduled to end sooner. The smaller bill looks easier to fit into this month’s budget, but the longer timetable leaves interest running for more months. Neither offer is real; no current lender or rate is represented here." },
    ],
    [
      { text: "A careful comparison starts with the amount borrowed, rate, repayment schedule and fees. A rate change in " },
      { text: "basis points", style: "highlight" },
      { text: " is a small change in a percentage rate: one basis point is one-hundredth of one percentage point. Its effect depends on the balance and time involved, so the label alone cannot tell a reader which offer costs less." },
    ],
    [
      { text: "The monthly payment is one useful line, not the whole picture. The borrower might compare the total amount scheduled to be repaid, check whether the rate can change, and read what happens if the debt is paid early. " },
      { text: "Those details make trade-offs easier to see.", style: "italic" },
      { text: " They do not decide what any household should do. This fictional Ledger example is for reading practice, not a product comparison or financial guidance." },
    ],
  ] satisfies ArticleParagraph[],
} as const;

export type TypographyTreatmentId = "typewriter" | "editorial" | "hybrid" | "approved";

export type TypographyTreatment = {
  id: TypographyTreatmentId;
  label: string;
  name: string;
  headlineFont: string;
  bodyFont: string;
  accentFont: string;
  description: string;
};

export const typographyTreatments: TypographyTreatment[] = [
  {
    id: "typewriter",
    label: "A · Vintage typewriter",
    name: "Special Elite throughout",
    headlineFont: "Special Elite",
    bodyFont: "Special Elite",
    accentFont: "Special Elite",
    description: "A visibly mechanical voice from headline through the complete article body.",
  },
  {
    id: "editorial",
    label: "B · Vintage editorial",
    name: "Soft display, literary reading",
    headlineFont: "Fraunces",
    bodyFont: "Newsreader",
    accentFont: "Special Elite",
    description: "Expressive headlines meet a quietly contemporary text face, with typewriter notes in the margins.",
  },
  {
    id: "hybrid",
    label: "C · Hybrid newspaper",
    name: "Modern headline, bookish body",
    headlineFont: "Newsreader",
    bodyFont: "Literata",
    accentFont: "Special Elite",
    description: "A compact newspaper headline paired with a sturdy, comfortable long-read face.",
  },
  {
    id: "approved",
    label: "Approved · Ledger system",
    name: "Fraunces + Special Elite + Literata",
    headlineFont: "Fraunces",
    bodyFont: "Special Elite",
    accentFont: "Literata",
    description: "The approved headline, reading and supporting-text roles, shown together as the implementation target.",
  },
];
