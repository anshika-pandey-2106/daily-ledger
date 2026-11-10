import "./tokens.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design tokens",
  description: "A visual reference for The Daily Ledger design system tokens.",
};

const colourTokens = [
  ["--paper", "Paper"],
  ["--paper-light", "Paper light"],
  ["--paper-bright", "Paper bright"],
  ["--paper-deep", "Paper deep"],
  ["--ink", "Ink"],
  ["--ink-soft", "Ink soft"],
  ["--rule", "Rule"],
  ["--rule-light", "Rule light"],
  ["--editorial-navy", "Editorial navy"],
  ["--raspberry", "Signature raspberry"],
  ["--raspberry-ink", "Raspberry ink"],
  ["--butter", "Butter"],
  ["--navy-wash", "Navy wash"],
  ["--raspberry-wash", "Raspberry wash"],
  ["--butter-wash", "Butter wash"],
  ["--background-page", "Page background"],
  ["--background-surface", "Surface background"],
  ["--background-muted", "Muted background"],
  ["--background-editorial", "Editorial background"],
  ["--text-primary", "Primary text"],
  ["--text-secondary", "Secondary text"],
  ["--text-inverse", "Inverse text"],
  ["--text-accent", "Small accent text"],
  ["--text-display-accent", "Display accent"],
  ["--accent-structural", "Structural accent"],
  ["--accent-signature", "Signature accent"],
  ["--accent-warm", "Warm accent"],
  ["--highlight-background", "Highlight background"],
  ["--highlight-foreground", "Highlight text"],
  ["--border-default", "Default border"],
  ["--border-strong", "Strong border"],
  ["--border-structural", "Structural border"],
  ["--surface-paper", "Paper surface"],
  ["--surface-paper-muted", "Muted paper surface"],
  ["--surface-navy", "Navy surface"],
  ["--surface-navy-muted", "Muted navy surface"],
  ["--surface-raspberry-muted", "Muted raspberry surface"],
  ["--surface-butter", "Butter surface"],
  ["--surface-butter-muted", "Muted butter surface"],
  ["--accent", "Accent"],
  ["--accent-text", "Accent text"],
  ["--accent-light", "Accent light"],
  ["--accent-tint", "Accent tint"],
  ["--card-blue", "Card blue"],
  ["--card-blue-deep", "Card blue deep"],
  ["--card-mustard", "Card mustard"],
  ["--card-sage", "Card sage"],
  ["--card-forest", "Card forest"],
  ["--card-charcoal", "Card charcoal"],
] as const;

const fontRoles = [
  ["Masthead", "--font-masthead", "UnifrakturCook", "Blackletter · ornamental use"],
  ["Headlines", "--font-display", "Fraunces", "Serif · features and section titles"],
  ["Article body", "--font-body", "Special Elite", "Typewriter · complete long-form reading"],
  ["Supporting editorial", "--font-support", "Literata", "Serif · notes, summaries and captions"],
  ["Labels and metadata", "--font-label", "DM Sans", "Sans serif · labels and controls"],
] as const;

const spacingTokens = [
  ["--space-1", "0.25rem"],
  ["--space-2", "0.5rem"],
  ["--space-3", "0.75rem"],
  ["--space-4", "1rem"],
  ["--space-5", "1.5rem"],
  ["--space-6", "2rem"],
  ["--space-7", "3rem"],
  ["--space-8", "4rem"],
] as const;

const layoutTokens = [
  ["--page-gutter", "Responsive page edge", "clamp(1rem, 3vw, 3rem)"],
  ["--content-max", "Maximum content width", "1440px"],
  ["--column-gap", "Responsive column spacing", "clamp(1rem, 2vw, 2rem)"],
  ["--measure", "Comfortable reading width", "62ch"],
] as const;

const motionTokens = [
  ["--motion-fast", "Brief transitions", "140ms ease"],
  ["--motion-standard", "Everyday transitions", "220ms ease"],
  ["--motion-slow", "Longest allowed transitions", "400ms ease"],
] as const;

const typeScaleTokens = [
  ["--text-xs", "0.75rem"],
  ["--text-sm", "0.875rem"],
  ["--text-base", "1.0625rem"],
  ["--text-lg", "1.25rem"],
  ["--text-xl", "1.5rem"],
  ["--text-2xl", "clamp(1.75rem, 3vw, 2.5rem)"],
  ["--text-article-headline", "clamp(2.75rem, 5.25vw, 5.25rem)"],
  ["--text-display", "clamp(2.75rem, 7vw, 6.5rem)"],
  ["--text-masthead", "clamp(3rem, 11vw, 9rem)"],
  ["--text-reading", "clamp(1.125rem, 1.2vw + 0.8rem, 1.25rem)"],
] as const;

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span className="ledger-label">{number}</span>
      <h2>{children}</h2>
    </div>
  );
}

export default function TokensPage() {
  return (
    <main className="token-page">
      <header className="masthead">
        <p className="ledger-label">The Daily Ledger · Design system</p>
        <h1>Token Gazette</h1>
        <p className="masthead-deck">A field guide to the materials, measures and type of the paper.</p>
      </header>

      <div className="edition-bar ledger-label">
        <span>Foundation / 00.1</span>
        <span>Design reference</span>
        <span>Colour · Type · Space</span>
      </div>

      <section className="token-section" aria-labelledby="colours-title">
        <SectionHeading number="01">Colour & paper</SectionHeading>
        <h3 id="colours-title" className="subheading">The complete palette</h3>
        <div className="swatch-grid">
          {colourTokens.map(([token, label]) => (
            <div className="swatch" key={token}>
              <div className="swatch-sample" style={{ backgroundColor: `var(${token})` }} aria-hidden="true" />
              <div className="swatch-caption">
                <strong>{label}</strong>
                <code>{token}</code>
              </div>
            </div>
          ))}
        </div>
        <h3 className="subheading paper-heading">Paper surfaces</h3>
        <div className="paper-surfaces">
          {(["--paper", "--paper-light", "--paper-bright"] as const).map((token) => (
            <div className="paper-surface" key={token} style={{ backgroundColor: `var(${token})` }}>
              <strong>{token}</strong>
              <span>Warm stock for a page, panel or reading surface.</span>
            </div>
          ))}
        </div>
      </section>

      <section className="token-section" aria-labelledby="type-title">
        <SectionHeading number="02">Type & voice</SectionHeading>
        <div className="type-grid" id="type-title">
          {fontRoles.map(([role, token, family, description]) => (
            <article className="type-specimen" key={token}>
              <p className="ledger-label">{role} · {token}</p>
              <p className={`font-sample sample-${family.toLowerCase().replaceAll(" ", "-")}`}>
                {role === "Masthead" ? "The Daily Ledger" : role === "Headlines" ? "A clear line of thought" : role === "Article body" || role === "Supporting editorial" ? "Good type lets a reader settle in and follow the story without strain." : "EDITION · SECTION · 4 MIN READ"}
              </p>
              <p className="specimen-note">{family} — {description}</p>
            </article>
          ))}
        </div>
        <div className="scale-row">
          {typeScaleTokens.map(([token, value]) => (
            <div className="scale-item" key={token}>
              <span className="scale-sample" style={{ fontSize: `var(${token})` }}>Aa</span>
              <code>{token}<br />{value}</code>
            </div>
          ))}
        </div>
        <div className="type-notes">
          <span><code>--leading-body</code><b>1.6</b></span>
          <span><code>--leading-reading</code><b>1.72</b></span>
          <span><code>--tracking-display</code><b>−0.02em</b></span>
          <span><code>--tracking-label</code><b>0.09em</b></span>
        </div>
      </section>

      <section className="token-section" aria-labelledby="spacing-title">
        <SectionHeading number="03">Measure & rhythm</SectionHeading>
        <h3 id="spacing-title" className="subheading">Spacing scale</h3>
        <div className="spacing-list">
          {spacingTokens.map(([token, value]) => (
            <div className="spacing-row" key={token}>
              <code>{token}</code>
              <span className="spacing-bar" style={{ width: `var(${token})` }} aria-hidden="true" />
              <span>{value}</span>
            </div>
          ))}
        </div>
        <h3 className="subheading">Layout dimensions</h3>
        <div className="dimension-list">
          {layoutTokens.map(([token, description, value]) => (
            <div className="dimension-row" key={token}>
              <code>{token}</code><span>{description}</span>
              <code className="dimension-value">{value}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="token-section" aria-labelledby="rules-title">
        <SectionHeading number="04">Rules & movement</SectionHeading>
        <h3 id="rules-title" className="subheading">Borders and rules</h3>
        <div className="rule-list">
          <div><code>--rule-thin</code><span className="rule-sample rule-thin" /></div>
          <div><code>--rule-thick</code><span className="rule-sample rule-thick" /></div>
          <div><code>--rule-double</code><span className="rule-sample rule-double" /></div>
          <div><code>--grain-opacity</code><span>0.08</span></div>
        </div>
        <h3 className="subheading">Motion tokens</h3>
        <div className="motion-list">
          {motionTokens.map(([token, description, value]) => (
            <div className="motion-row" key={token}>
              <code>{token}</code><span>{description} · {value}</span>
              <span className="motion-track"><span className="motion-dot" style={{ transition: `transform ${token}` }} /></span>
            </div>
          ))}
        </div>
      </section>

      <footer className="token-footer ledger-label">
        <span>Design tokens · single source of truth</span>
        <span>Respect reduced motion</span>
      </footer>
    </main>
  );
}
