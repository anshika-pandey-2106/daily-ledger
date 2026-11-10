import Link from "next/link";
import { directionStories, paletteStudies, type DirectionStory } from "../../data/visual-direction";

function VisualMasthead() {
  return (
    <header className="direction-masthead" id="top">
      <div className="direction-overline ledger-label">
        <span>A considered daily edition</span>
        <span>Visual direction · study one</span>
        <span>Illustrative only</span>
      </div>
      <Link className="direction-brand-link" href="/" aria-label="The Daily Ledger front page">
        <h1 className="direction-brand">The Daily Ledger</h1>
      </Link>
      <p className="direction-tagline">Markets and money, made legible.</p>
      <div className="direction-dateline ledger-label">
        <span>Editorial colour study</span>
        <span>Paper · ink · three new hues</span>
        <Link href="/mockup/article">Read the article mockup</Link>
      </div>
      <nav className="direction-nav ledger-label" aria-label="Visual study sections">
        <a href="#palette-study">Palette</a>
        <a href="#story-treatments">Story cards</a>
        <a href="#component-study">Components</a>
        <a href="#article-hero">Article hero</a>
      </nav>
    </header>
  );
}

function PaletteStudy() {
  return (
    <section className="direction-section" id="palette-study" aria-labelledby="palette-heading">
      <div className="direction-section-heading">
        <p className="ledger-label">01 · The working palette</p>
        <h2 id="palette-heading">Colour with a point of view</h2>
        <p>New colour stays inside the familiar cream-paper frame. Navy carries structure, butter brings warmth, and raspberry pink is a deliberate editorial cue.</p>
      </div>
      <div className="palette-swatches">
        {paletteStudies.map((swatch) => (
          <article className={`palette-swatch palette-swatch--${swatch.token}`} key={swatch.name}>
            <div className="palette-chip" aria-hidden="true" />
            <div>
              <h3>{swatch.name}</h3>
              <p className="palette-value">{swatch.value}</p>
              <p>{swatch.use}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="palette-pairings" aria-label="Accessible colour pairings">
        <article className="pairing pairing--navy">
          <p className="ledger-label">Quiet authority · 11.37:1</p>
          <h3>Paper text on navy</h3>
          <p>For pull quotes, short navigation bars and one prominent story card.</p>
        </article>
        <article className="pairing pairing--butter">
          <p className="ledger-label">Warm highlight · 12.02:1</p>
          <h3>Ink text on butter</h3>
          <p>For an explanatory note or a highlighted phrase inside the article.</p>
        </article>
        <article className="pairing pairing--red">
          <p className="ledger-label">Display accent · 4.12:1</p>
          <h3>Raspberry pink in a headline-sized moment</h3>
          <p>Raspberry pink is for large display accents and decorative marks. Small text uses a darker shade.</p>
        </article>
      </div>
    </section>
  );
}

function StoryTreatmentCard({ story }: { story: DirectionStory }) {
  return (
    <article className={`direction-story-card direction-story-card--${story.treatment}`}>
      <div className="direction-card-art" aria-hidden="true">
        <span className="art-paper" />
        <span className="art-rule" />
        <span className="art-sun" />
        <span className="art-coin" />
      </div>
      <div className="direction-card-copy">
        <p className="ledger-label">{story.eyebrow}</p>
        <h3>{story.headline}</h3>
        <p>{story.summary}</p>
        <span className="direction-intensity">{story.intensity}</span>
      </div>
    </article>
  );
}

function StoryTreatments() {
  return (
    <section className="direction-section" id="story-treatments" aria-labelledby="story-heading">
      <div className="direction-section-heading">
        <p className="ledger-label">02 · Story cards</p>
        <h2 id="story-heading">A range of colour, held in a grid</h2>
        <p>Five treatments test where the added colour belongs—from a quiet rule to a full navy field.</p>
      </div>
      <div className="direction-story-grid">
        {directionStories.map((story) => <StoryTreatmentCard key={story.headline} story={story} />)}
      </div>
    </section>
  );
}

function ComponentStudy() {
  return (
    <section className="direction-section" id="component-study" aria-labelledby="components-heading">
      <div className="direction-section-heading">
        <p className="ledger-label">03 · Small editorial parts</p>
        <h2 id="components-heading">Colour in the margins</h2>
      </div>
      <div className="component-study-grid">
        <article className="component-specimen component-specimen--navigation">
          <p className="ledger-label">Navigation</p>
          <nav className="sample-nav" aria-label="Example section navigation">
            <a href="#article-hero">Edition</a>
            <a href="#story-treatments">Household money</a>
            <a href="#component-study">The markets</a>
          </nav>
          <p className="specimen-caption">Thin rules and one raspberry active marker keep familiar routes legible.</p>
        </article>
        <article className="component-specimen">
          <p className="ledger-label">Section label</p>
          <p className="sample-section-label"><span aria-hidden="true" />Personal finance · Illustrative</p>
          <p className="specimen-caption">A small-caps label gets a darker raspberry ink shade on paper.</p>
        </article>
        <article className="component-specimen">
          <p className="ledger-label">Buttons as links</p>
          <div className="sample-actions">
            <a className="direction-button direction-button--navy" href="#article-hero">Read the feature</a>
            <Link className="direction-button direction-button--outline" href="/mockup/article">Open article mockup</Link>
          </div>
          <p className="specimen-caption">The filled link is the primary action; the outlined link stays quieter.</p>
        </article>
        <article className="component-specimen">
          <p className="ledger-label">Highlighted term</p>
          <p className="sample-highlight-copy">Keep a small <mark>rainy-day buffer</mark> in the plan.</p>
          <p className="specimen-caption">Butter points to a term without becoming a warning colour.</p>
        </article>
        <aside className="component-specimen sample-margin-note">
          <p className="ledger-label">A note in the margin</p>
          <h3>Cash buffer</h3>
          <p>A little money set aside for an unexpected expense. This definition is a fictional layout sample.</p>
        </aside>
        <blockquote className="component-specimen sample-pull-quote">
          <p className="ledger-label">Pull quote · Illustrative</p>
          <p>“A little room in the plan can make the whole page easier to read.”</p>
          <cite>— The illustrative Ledger desk</cite>
        </blockquote>
        <aside className="component-specimen sample-callout" role="note">
          <p className="ledger-label">Information callout</p>
          <p>Every figure and household example in this visual study is invented. This is not financial advice.</p>
        </aside>
      </div>
    </section>
  );
}

function BudgetIllustration() {
  return (
    <svg className="budget-illustration" viewBox="0 0 800 580" role="img" aria-labelledby="budget-art-title budget-art-description">
      <title id="budget-art-title">An illustrative household budget ledger</title>
      <desc id="budget-art-description">A navy ledger page divides a fictional monthly plan into bills, a buffer and everyday spending.</desc>
      <rect className="illustration-ground" width="800" height="580" />
      <circle className="illustration-sun" cx="653" cy="116" r="80" />
      <path className="illustration-shadow" d="M119 465 205 413h420l74 52v69H119z" />
      <rect className="illustration-back-sheet" x="130" y="94" width="430" height="352" />
      <rect className="illustration-ledger" x="177" y="133" width="430" height="352" />
      <rect className="illustration-ledger-band" x="177" y="133" width="430" height="45" />
      <circle className="illustration-hole" cx="203" cy="155" r="7" />
      <circle className="illustration-hole" cx="232" cy="155" r="7" />
      <rect className="illustration-rule" x="215" y="218" width="235" height="12" />
      <rect className="illustration-rule illustration-rule--short" x="215" y="249" width="165" height="9" />
      <rect className="illustration-row" x="215" y="289" width="351" height="43" />
      <rect className="illustration-row" x="215" y="344" width="351" height="43" />
      <rect className="illustration-row" x="215" y="399" width="351" height="43" />
      <rect className="illustration-row-mark illustration-row-mark--red" x="215" y="289" width="13" height="43" />
      <rect className="illustration-row-mark illustration-row-mark--butter" x="215" y="344" width="13" height="43" />
      <rect className="illustration-row-mark illustration-row-mark--navy" x="215" y="399" width="13" height="43" />
      <path className="illustration-coin" d="M560 379c0-35 29-64 64-64s64 29 64 64v63H560z" />
      <ellipse className="illustration-coin-top" cx="624" cy="379" rx="64" ry="23" />
      <path className="illustration-coin-line" d="M597 379h54M624 354v50" />
      <path className="illustration-red-mark" d="M88 100h28v142H88z" />
    </svg>
  );
}

function ArticleHero() {
  return (
    <section className="direction-hero" id="article-hero" aria-labelledby="hero-title">
      <div className="direction-hero-copy">
        <p className="hero-kicker ledger-label"><span>Personal finance</span><span>Fictional feature · 3 min read</span></p>
        <h2 id="hero-title">A little room for the month ahead</h2>
        <p className="hero-summary">A made-up household gives bills, an unexpected expense and everyday pleasures space on the same page.</p>
        <p className="hero-byline">Reported by <a href="#direction-disclaimer">The Illustrative Desk</a></p>
        <div className="hero-actions">
          <a className="direction-button direction-button--navy" href="#story-treatments">Explore the card treatments</a>
          <Link className="direction-button direction-button--outline" href="/mockup/article">Read the article mockup</Link>
        </div>
        <p className="hero-figure-note" id="direction-disclaimer">Illustrative story and original inline illustration. No financial figures or advice are presented.</p>
      </div>
      <figure className="direction-hero-art">
        <BudgetIllustration />
        <figcaption className="ledger-label">A sample monthly plan, laid out on paper</figcaption>
      </figure>
    </section>
  );
}

export function VisualDirectionPage() {
  return (
    <main className="visual-direction-page">
      <a className="direction-skip-link" href="#exploration-content">Skip to the visual study</a>
      <div className="direction-frame">
        <VisualMasthead />
        <p className="direction-notice" role="note">Temporary visual exploration · New colours are local to this page and are not approved design tokens.</p>
        <div id="exploration-content">
          <ArticleHero />
          <PaletteStudy />
          <StoryTreatments />
          <ComponentStudy />
        </div>
        <footer className="direction-footer">
          <p className="ledger-label">The Daily Ledger · Visual direction study</p>
          <p>Illustrative content only. Not financial advice.</p>
          <a href="#top">Back to the top ↑</a>
        </footer>
      </div>
    </main>
  );
}
