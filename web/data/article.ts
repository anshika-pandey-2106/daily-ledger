export type ReadingLevel = "original" | "plain-english" | "eli5";

export const articleMockup = {
  category: "Personal Finance",
  readingTime: "1 min read",
  sourceName: "Illustrative Desk",
  headline: "When a smaller payment stretches a loan’s cost",
  summary:
    "A fictional household compares two sample loan schedules and learns why the monthly payment is only one part of the picture.",
  sourceNote:
    "Illustrative Desk is a fictional attribution label for this reading mockup. This page contains no reported article or external source material.",
  readingVersions: {
    original: [
      "In this illustrative case, a household compares two fictional loan offers. One promises a lower monthly payment; the other is scheduled to end sooner. The smaller bill looks easier to fit into this month’s budget, but the longer timetable leaves interest running for more months. Neither offer is real; no current lender or rate is represented here.",
      "A careful comparison starts with the amount borrowed, rate, repayment schedule and fees. A rate change in basis points is a small change in a percentage rate: one basis point is one-hundredth of one percentage point. Its effect depends on the balance and time involved, so the label alone cannot tell a reader which offer costs less.",
      "The monthly payment is one useful line, not the whole picture. The borrower might compare the total amount scheduled to be repaid, check whether the rate can change, and read what happens if the debt is paid early. Those questions make trade-offs easier to see; they do not decide what any household should do. This fictional Ledger example is for reading practice, not a product comparison or financial guidance.",
    ],
    "plain-english": [
      "In this made-up example, a household looks at two pretend loans. One loan needs a smaller payment each month, but it lasts longer. Since interest builds over time, paying for more months can increase the total paid. No real lender or current rate appears in this example.",
      "A basis point is a tiny unit for measuring a rate change: 100 basis points equal one percentage point. To compare these examples, look at how much is borrowed, the rate, the time to repay and any fees. A basis-point change matters differently depending on the balance and how long it lasts.",
      "The monthly payment matters, but it is not the only number to read. The total scheduled repayment, whether the rate can change and any early-payoff rules also matter. These questions make the choices easier to understand; they do not say which loan someone should choose. This fictional example is for learning, not financial advice.",
    ],
    eli5: [
      "Imagine two pretend loans for the same kind of purchase. One asks for less money each month, but you keep paying for longer. Interest is the extra cost for borrowing. If it is added for more months, the total can grow. These offers are made up for this example.",
      "People use basis points as tiny steps for measuring a rate change. One basis point is one-hundredth of one percentage point. The small step can matter more or less depending on how much was borrowed and how long the rate lasts.",
      "So, do not look only at the monthly bill. It also helps to compare the whole amount to be repaid, check whether the rate can change, and read what happens if someone pays early. Those details help explain the pretend choices. They do not tell a real family what to do. This is a fictional learning example, not financial advice.",
    ],
  } satisfies Record<ReadingLevel, string[]>,
  relatedStories: [
    {
      category: "Personal Finance",
      headline: "A budget has room for more than fixed bills",
      summary:
        "An illustrative guide separates regular costs from the expenses that arrive less often.",
    },
    {
      category: "Markets",
      headline: "What a rate change can—and cannot—tell a borrower",
      summary:
        "A fictional explainer follows how a headline rate may connect to household borrowing costs.",
    },
  ],
} as const;
