export type StorySection = "Markets" | "Central Banks" | "Personal Finance";
export type StoryVariant = "lead" | "standard" | "colour-field" | "compact";
export type ArtStyle = "ledger" | "city" | "landscape";
export type CardField = "--card-blue" | "--card-mustard" | "--card-sage";

export interface SampleStory {
  id: string;
  headline: string;
  deck: string;
  section: StorySection | "Wild Card";
  readingTime: string;
  variant: StoryVariant;
  art: ArtStyle;
  colourToken?: CardField;
  whyThis: string;
}

export const edition = {
  volume: "Vol. I",
  number: "No. 01",
  date: "Monday, 9 November 2026",
  isoDate: "2026-11-09",
  price: "Free",
};

export const leadStory: SampleStory = {
  id: "lead-small-business",
  headline: "Small shops sketch a slower path to a faster checkout",
  deck: "A fictional neighborhood retailer weighs convenience, staffing and new equipment in a sample story about business investment.",
  section: "Markets",
  readingTime: "4 min read",
  variant: "lead",
  art: "city",
  whyThis: "Lead feature placement is shown to demonstrate the edition layout. This mockup has no reader profile or ranking system.",
};

export const secondaryStories: SampleStory[] = [
  {
    id: "market-yields",
    headline: "Bond buyers look for a clearer map of changing yields",
    deck: "An illustrative explainer follows how borrowing costs can move through a fictional market day.",
    section: "Markets",
    readingTime: "3 min read",
    variant: "standard",
    art: "landscape",
    whyThis: "This standard image card is included to show a second story treatment in the sample edition.",
  },
  {
    id: "policy-households",
    headline: "A rate decision, translated for household budgets",
    deck: "A made-up example connects a central-bank choice to the kinds of questions borrowers may ask.",
    section: "Central Banks",
    readingTime: "5 min read",
    variant: "colour-field",
    art: "ledger",
    colourToken: "--card-blue",
    whyThis: "The muted blue field demonstrates the colour-field card variant. It is a visual sample, not a recommendation.",
  },
  {
    id: "personal-buffer",
    headline: "The household buffer gets a place on the page",
    deck: "A compact fictional brief looks at the role an emergency fund can play in a monthly plan.",
    section: "Personal Finance",
    readingTime: "2 min read",
    variant: "compact",
    art: "city",
    whyThis: "Compact briefs keep a short sample item readable beside longer stories.",
  },
];

export const topicStories: Record<StorySection, SampleStory[]> = {
  Markets: [
    {
      id: "market-diversification",
      headline: "A diversified portfolio is a map, not a promise",
      deck: "This fictional desk note uses a made-up portfolio to explain why spreading risk cannot remove it.",
      section: "Markets",
      readingTime: "3 min read",
      variant: "standard",
      art: "landscape",
      whyThis: "Grouped under Markets as an example of a topic section in a daily edition.",
    },
    {
      id: "market-volatility",
      headline: "When volatility is more than a dramatic word",
      deck: "A short illustrative explainer separates price movement from the feeling of uncertainty.",
      section: "Markets",
      readingTime: "3 min read",
      variant: "colour-field",
      art: "ledger",
      colourToken: "--card-sage",
      whyThis: "The sage panel is a restrained colour accent for one selected story card.",
    },
    {
      id: "market-index",
      headline: "Reading an index without mistaking it for the whole market",
      deck: "A fictional guide follows a made-up basket of companies and the signal it can—and cannot—offer.",
      section: "Markets",
      readingTime: "4 min read",
      variant: "compact",
      art: "city",
      whyThis: "A text-forward brief gives the three-column row a lighter visual beat.",
    },
  ],
  "Central Banks": [
    {
      id: "policy-pause",
      headline: "What a policy pause might mean in a classroom example",
      deck: "A fictional central bank holds steady while households and businesses consider their next steps.",
      section: "Central Banks",
      readingTime: "4 min read",
      variant: "standard",
      art: "ledger",
      whyThis: "Grouped under Central Banks to demonstrate a selected-topic section.",
    },
    {
      id: "policy-lag",
      headline: "The long wait between a decision and its effects",
      deck: "This sample explainer uses an imaginary economy to introduce the idea of policy lag.",
      section: "Central Banks",
      readingTime: "3 min read",
      variant: "compact",
      art: "landscape",
      whyThis: "A concise brief balances the image-led items in this topic section.",
    },
  ],
  "Personal Finance": [
    {
      id: "personal-plan",
      headline: "A fictional family puts its rainy-day fund first",
      deck: "A made-up monthly plan shows how savings goals can compete for the same dollars.",
      section: "Personal Finance",
      readingTime: "4 min read",
      variant: "colour-field",
      art: "city",
      colourToken: "--card-mustard",
      whyThis: "The mustard field is another example of selective card colour in the layout.",
    },
    {
      id: "personal-credit",
      headline: "Comparing credit costs starts with the fine print",
      deck: "An illustrative household scenario introduces fees, interest and repayment timing in plain language.",
      section: "Personal Finance",
      readingTime: "3 min read",
      variant: "standard",
      art: "ledger",
      whyThis: "Grouped under Personal Finance as one of the sample reader interest sections.",
    },
  ],
};

export const wildCardStory: SampleStory = {
  id: "wild-clean-energy",
  headline: "A made-up energy co-op invites a new kind of investor",
  deck: "This fictional detour asks how a community project might explain its funding plan to curious readers.",
  section: "Wild Card",
  readingTime: "4 min read",
  variant: "colour-field",
  art: "landscape",
  colourToken: "--card-blue",
  whyThis: "Wild Card is reserved for exploration in the product plan. This static example is not selected by an algorithm.",
};

export const marketSnapshot = [
  { label: "Broad-market index", value: "+0.4%" },
  { label: "Policy rate", value: "4.25%" },
  { label: "Energy basket", value: "$72.40" },
] as const;

export const topicNavigation = [
  { label: "Markets", href: "#markets" },
  { label: "Central Banks", href: "#central-banks" },
  { label: "Personal Finance", href: "#personal-finance" },
  { label: "Wild Card", href: "#wild-card" },
] as const;

export const illustrativeNotice =
  "Illustrative mockup only. Every story, market figure and scenario on this page is fictional and is not current reporting or financial advice.";
