import {
  edition,
  illustrativeNotice,
  leadStory,
  marketSnapshot,
  secondaryStories,
  topicNavigation,
  topicStories,
  wildCardStory,
  type StorySection,
} from "../../data/sample";
import { StoryArt } from "./StoryArt";
import { StoryCard, StoryWhy } from "./StoryCard";

const sectionIds: Record<StorySection, string> = {
  Markets: "markets",
  "Central Banks": "central-banks",
  "Personal Finance": "personal-finance",
};

function Masthead() {
  return (
    <header className="paper-header" id="top">
      <div className="masthead-overline ledger-label">
        <span>A considered daily edition</span>
        <span>Illustrative front page</span>
        <span>For curious readers</span>
      </div>
      <a className="brand-link" href="#top" aria-label="The Daily Ledger, back to top">
        <h1 className="brand-masthead">The Daily Ledger</h1>
      </a>
      <p className="brand-tagline">Markets and money, made legible.</p>
      <div className="dateline ledger-label" aria-label="Edition information">
        <span>{edition.volume}</span>
        <span>{edition.number}</span>
        <time dateTime={edition.isoDate}>{edition.date}</time>
        <span>Price: {edition.price}</span>
      </div>
      <nav className="section-nav ledger-label" aria-label="Edition sections">
        <a href="#top">Front page</a>
        {topicNavigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </header>
  );
}

function StaticTicker() {
  return (
    <section className="market-ticker" aria-label="Static illustrative market ticker">
      <span className="ticker-label ledger-label">The market wire</span>
      <p>Illustrative only <b aria-hidden="true">·</b> Equities <b aria-hidden="true">·</b> Rates <b aria-hidden="true">·</b> Household budgets <b aria-hidden="true">·</b> Energy</p>
      <span className="ticker-state ledger-label">Static edition strip</span>
    </section>
  );
}

function IllustrativeNotice() {
  return (
    <aside className="illustrative-notice" aria-label="Illustrative content notice">
      <span className="notice-mark" aria-hidden="true">i</span>
      <p>{illustrativeNotice}</p>
    </aside>
  );
}

function LeadStory() {
  return (
    <article className="lead-story" id={leadStory.id}>
      <div className="lead-copy">
        <p className="lead-kicker ledger-label"><span>Lead feature</span><span>{leadStory.section}</span></p>
        <h2>{leadStory.headline}</h2>
        <p className="lead-deck">{leadStory.deck}</p>
        <p className="lead-opening">
          A small business in this fictional example is weighing which tasks deserve investment and which are better left simple. The point is to show how a money story can be explained without assuming the reader already knows the jargon.
        </p>
        <div className="story-meta">
          <span>{leadStory.readingTime}</span>
          <span>Source: demo copy</span>
        </div>
        <StoryWhy story={leadStory} />
      </div>
      <figure className="lead-artwork">
        <StoryArt style={leadStory.art} label="Decorative illustration of a fictional neighborhood" />
      </figure>
    </article>
  );
}

function MarketsAtAGlance() {
  return (
    <section className="sidebar-box market-glance" id="markets-at-a-glance" aria-labelledby="glance-heading">
      <div className="box-heading">
        <p className="ledger-label">A small reference box</p>
        <h2 id="glance-heading">Markets at a glance</h2>
      </div>
      <p className="glance-disclaimer ledger-label">All figures are illustrative sample values</p>
      <dl className="market-values">
        {marketSnapshot.map((item) => (
          <div className="market-value" key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
      <p className="glance-note">A layout example only. These values do not describe current markets.</p>
    </section>
  );
}

function WildCard() {
  return (
    <section className="sidebar-box wild-card-box" id="wild-card" aria-labelledby="wild-heading">
      <p className="ledger-label">Outside your usual beat</p>
      <h2 id="wild-heading">The Wild Card</h2>
      <StoryArt style={wildCardStory.art} label="Abstract illustrative landscape" />
      <h3>{wildCardStory.headline}</h3>
      <p>{wildCardStory.deck}</p>
      <div className="story-meta"><span>{wildCardStory.readingTime}</span><span>Source: demo copy</span></div>
      <StoryWhy story={wildCardStory} />
    </section>
  );
}

function SecondaryStories() {
  return (
    <section className="secondary-section" aria-labelledby="secondary-heading">
      <div className="section-title">
        <p className="ledger-label">Three notes from the desk</p>
        <h2 id="secondary-heading">The day, in brief</h2>
        <p>Sample headlines for the front-page card family.</p>
      </div>
      <div className="secondary-grid">
        {secondaryStories.map((story) => <StoryCard story={story} key={story.id} />)}
      </div>
    </section>
  );
}

function TopicSection({ section }: { section: StorySection }) {
  return (
    <section className="topic-section" id={sectionIds[section]} aria-labelledby={`${sectionIds[section]}-heading`}>
      <div className="topic-heading">
        <span className="topic-rule" aria-hidden="true" />
        <div>
          <p className="ledger-label">Selected section · illustrative stories</p>
          <h2 id={`${sectionIds[section]}-heading`}>{section}</h2>
        </div>
        <span className="topic-rule" aria-hidden="true" />
      </div>
      <div className={`topic-grid${topicStories[section].length === 2 ? " topic-grid--two" : ""}`}>
        {topicStories[section].map((story) => <StoryCard story={story} key={story.id} />)}
      </div>
    </section>
  );
}

function EditionFooter() {
  return (
    <footer className="paper-footer">
      <div className="footer-motto">
        <p className="ledger-label">The Daily Ledger · A sample edition</p>
        <p className="footer-large">Read the numbers<br />with a little more context.</p>
      </div>
      <div className="footer-bottom">
        <p className="ledger-label">Illustrative content · no live reporting</p>
        <p className="footer-advice">Not financial advice. For learning and information only.</p>
        <a className="ledger-label" href="#top">Back to the top ↑</a>
      </div>
    </footer>
  );
}

export function FrontPage() {
  return (
    <main className="ledger-front-page" id="front-page">
      <a className="skip-link" href="#edition-content">Skip to the edition</a>
      <div className="paper-frame">
        <Masthead />
        <StaticTicker />
        <IllustrativeNotice />
        <div className="front-grid" id="edition-content">
          <LeadStory />
          <aside className="front-sidebar" aria-label="Market context and exploration">
            <MarketsAtAGlance />
            <WildCard />
          </aside>
        </div>
        <SecondaryStories />
        <div className="topic-sections">
          <TopicSection section="Markets" />
          <TopicSection section="Central Banks" />
          <TopicSection section="Personal Finance" />
        </div>
        <section className="static-context" aria-label="Edition note">
          <p className="ledger-label">A note from the desk</p>
          <p>Every headline and figure in this front-page mockup is invented for layout review. Replace these samples with verified, attributed stories before publication.</p>
        </section>
        <EditionFooter />
      </div>
    </main>
  );
}
