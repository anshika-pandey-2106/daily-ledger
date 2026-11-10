import type { Metadata } from "next";
import Link from "next/link";
import {
  typographyStory,
  typographyTreatments,
  type ArticleRun,
  type TypographyTreatment,
} from "../../../../data/typography";
import "./typography.css";

export const metadata: Metadata = {
  title: "Typography study",
  description: "A side-by-side, illustrative typography comparison for The Daily Ledger.",
};

function StyledRuns({ runs }: { runs: readonly ArticleRun[] }) {
  return runs.map((run, index) => {
    if (run.style === "bold") return <strong key={index}>{run.text}</strong>;
    if (run.style === "italic") return <em key={index}>{run.text}</em>;
    if (run.style === "highlight") return <mark key={index}>{run.text}</mark>;
    return <span key={index}>{run.text}</span>;
  });
}

function FontKey({ treatment }: { treatment: TypographyTreatment }) {
  return (
    <dl className="type-font-key" aria-label={`${treatment.label} font roles`}>
      <div><dt>Headlines</dt><dd>{treatment.headlineFont}</dd></div>
      <div><dt>Article</dt><dd>{treatment.bodyFont}</dd></div>
      <div><dt>Editorial accents</dt><dd>{treatment.accentFont}</dd></div>
      <div><dt>Metadata</dt><dd>DM Sans</dd></div>
    </dl>
  );
}

function TreatmentMasthead({ treatment }: { treatment: TypographyTreatment }) {
  return (
    <header className="type-masthead">
      <div className="type-overline ledger-label">
        <span>Illustrative edition</span>
        <span>{treatment.label}</span>
        <Link href="/">Return to the front page</Link>
      </div>
      <Link className="type-brand-link" href="/" aria-label="The Daily Ledger front page">
        <span className="type-brand">The Daily Ledger</span>
      </Link>
      <p className="type-tagline">Markets and money, made legible.</p>
      <div className="type-dateline ledger-label">
        <span>Vol. I</span>
        <span>No. 01</span>
        <time dateTime="2026-11-09">Monday, 9 November 2026</time>
        <span>Price: Free</span>
      </div>
      <p className="type-section-label ledger-label">Personal Finance <span aria-hidden="true">·</span> Fictional feature</p>
    </header>
  );
}

function TypographySpecimen({ treatment }: { treatment: TypographyTreatment }) {
  return (
    <article className={`type-treatment type-treatment--${treatment.id}`} data-treatment={treatment.id} aria-labelledby={`type-title-${treatment.id}`}>
      <TreatmentMasthead treatment={treatment} />
      <div className="type-story-heading">
        <p className="type-kicker ledger-label">{treatment.label} <span aria-hidden="true">·</span> Illustrative story</p>
        <h2 id={`type-title-${treatment.id}`}>{typographyStory.headline}</h2>
        <p className="type-summary">{typographyStory.summary}</p>
        <p className="type-byline">Reported by <a href="#study-notice">{typographyStory.byline}</a> <span aria-hidden="true">·</span> 4 min read</p>
      </div>
      <FontKey treatment={treatment} />
      <div className="type-reading-layout">
        <div className="type-article-body">
          {typographyStory.paragraphs.map((paragraph, index) => (
            <p className={index === 0 ? "type-opening" : undefined} key={index}>
              <StyledRuns runs={paragraph} />
            </p>
          ))}
        </div>
        <aside className="type-margin-note" aria-label="Illustrative financial term margin note">
          <p className="ledger-label">A note in the margin</p>
          <h3>Basis points</h3>
          <p>One basis point is one-hundredth of a percentage point. It gives readers a precise way to describe small rate changes.</p>
        </aside>
      </div>
      <blockquote className="type-pull-quote">
        <p>“The monthly payment is one useful line, not the whole picture.”</p>
        <cite className="ledger-label">From the illustrative article</cite>
      </blockquote>
      <footer className="type-credits ledger-label">
        <span>{treatment.name}</span>
        <span>All story details are fictional · Not financial advice</span>
      </footer>
    </article>
  );
}

export default function TypographyPage() {
  return (
    <main className="typography-study">
      <a className="type-skip-link" href="#typography-comparisons">Skip to the comparisons</a>
      <header className="study-intro">
        <p className="ledger-label">Design study · typography</p>
        <h1>One story, four typographic voices</h1>
        <p>Compare real typefaces in the same fictional newspaper article. Each specimen keeps the Ledger’s cream paper, navy structure, raspberry marks and butter highlights.</p>
        <p className="study-font-note">Google Fonts are self-hosted by Next.js for the approved system. Newsreader is loaded only for the alternate editorial comparisons.</p>
      </header>
      <section className="type-treatment-grid" id="typography-comparisons" aria-label="Typography treatments">
        {typographyTreatments.map((treatment) => <TypographySpecimen treatment={treatment} key={treatment.id} />)}
      </section>
      <p className="type-study-notice" id="study-notice" role="note">This page is a typography comparison. The article, household, loan offers, byline and all implied details are fictional. For learning and information only; not financial advice.</p>
    </main>
  );
}
