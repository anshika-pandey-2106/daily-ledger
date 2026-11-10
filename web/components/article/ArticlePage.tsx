import Link from "next/link";
import { articleMockup } from "../../data/article";
import { edition } from "../../data/sample";
import { RatingControl, ReadingView, WhyThis } from "./ArticleControls";
import { ArticleBudgetIllustration } from "./ArticleBudgetIllustration";

function ArticleMasthead() {
  return (
    <header className="article-masthead" id="top">
      <div className="article-masthead-overline ledger-label">
        <span>A considered daily edition</span>
        <span>Illustrative reading room</span>
        <span>For curious readers</span>
      </div>
      <Link className="article-brand-link" href="/" aria-label="The Daily Ledger front page">
        <span className="article-brand">The Daily Ledger</span>
      </Link>
      <p className="article-tagline">Markets and money, made legible.</p>
      <div className="article-dateline ledger-label" aria-label="Edition information">
        <span>{edition.volume}</span>
        <span>{edition.number}</span>
        <time dateTime={edition.isoDate}>{edition.date}</time>
        <span>Price: {edition.price}</span>
      </div>
      <nav className="article-nav ledger-label" aria-label="Publication navigation">
        <Link href="/">Front page</Link>
        <Link href="/#markets">Markets</Link>
        <Link href="/#personal-finance">Personal Finance</Link>
      </nav>
    </header>
  );
}

function MarginNote() {
  return (
    <aside className="article-margin-note" aria-labelledby="margin-note-heading">
      <p className="ledger-label">A note in the margin</p>
      <h2 id="margin-note-heading">Basis points</h2>
      <p>
        A basis point is one-hundredth of a percentage point. It gives people a precise way to describe small changes in an interest rate.
      </p>
      <a href="#article-body">Return to the article text ↑</a>
    </aside>
  );
}

function CorrespondentPanel() {
  const suggestedQuestions = [
    "Why does the loan term matter?",
    "What does a basis point measure?",
    "Which costs should I compare?",
  ];

  return (
    <aside className="correspondent-panel" aria-labelledby="correspondent-title">
      <p className="ledger-label">Reader’s desk · visual sample</p>
      <h2 id="correspondent-title">Ask the Correspondent</h2>
      <p>Questions a reader might ask about this example:</p>
      <ul className="question-chips" aria-label="Illustrative suggested questions">
        {suggestedQuestions.map((question) => <li key={question}>{question}</li>)}
      </ul>
      <p className="panel-note">This mockup does not send questions or generate answers.</p>
    </aside>
  );
}

function RelatedStories() {
  return (
    <section className="related-stories" aria-labelledby="related-title">
      <div className="related-heading">
        <p className="ledger-label">From the sample edition</p>
        <h2 id="related-title">Related stories</h2>
      </div>
      <div className="related-grid">
        {articleMockup.relatedStories.map((story) => (
          <article className="related-story" key={story.headline}>
            <p className="ledger-label">{story.category} · Illustrative</p>
            <h3>{story.headline}</h3>
            <p>{story.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArticleHeroIllustration() {
  return (
    <figure className="article-hero-art">
      <ArticleBudgetIllustration />
      <figcaption className="article-hero-caption">A fictional repayment schedule, arranged on paper</figcaption>
    </figure>
  );
}

export function ArticlePage() {
  return (
    <main className="article-page">
      <a className="article-skip-link" href="#article-content">Skip to the article</a>
      <div className="article-frame">
        <ArticleMasthead />
        <p className="article-demo-notice" role="note">
          Illustrative mockup. The story, source label and examples on this page are fictional.
        </p>
        <article className="article-edition" id="article-content">
          <div className="article-hero">
            <header className="article-heading">
              <div className="article-category-row">
                <p className="article-category ledger-label">{articleMockup.category}</p>
                <p className="article-reading-time ledger-label">{articleMockup.readingTime}</p>
              </div>
              <h1>{articleMockup.headline}</h1>
              <p className="article-summary">{articleMockup.summary}</p>
              <p className="article-byline">
                Reported by <a href="#illustrative-source">{articleMockup.sourceName}</a>
              </p>
            </header>
            <ArticleHeroIllustration />
          </div>
          <div className="article-reading-grid">
            <div className="article-reading-column">
              <ReadingView />
              <div className="article-feedback">
                <RatingControl />
                <WhyThis />
              </div>
            </div>
            <div className="article-side-column">
              <MarginNote />
              <CorrespondentPanel />
            </div>
          </div>
          <p className="article-source-note" id="illustrative-source">
            <span className="ledger-label">Source note</span> {articleMockup.sourceNote}
          </p>
        </article>
        <RelatedStories />
        <footer className="article-footer">
          <p className="ledger-label">The Daily Ledger · Illustrative edition</p>
          <p>For learning and information only. Not financial advice.</p>
          <a href="#top">Back to the top ↑</a>
        </footer>
      </div>
    </main>
  );
}
