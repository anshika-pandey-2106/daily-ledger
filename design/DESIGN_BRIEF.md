# The Daily Ledger: Design Brief

## 1. Design intent
A vintage-style broadsheet translated for the web. It should feel editorial, warm, typographic and tactile, with the confidence of a printed paper and the usability of a modern site. Never dusty, never a generic finance dashboard.

References are inspiration only (see `REFERENCES.md`). Do not copy their layouts, text, assets or branding.

## 2. Personality
Informed, calm, curious, confident. A little wit, never gimmicky. A curated daily edition, not an endless feed.

## 3. Visual principles
1. **Typography is the identity.** The masthead and headlines do most of the visual work.
2. **Paper is the canvas.** Warm paper tone with very subtle grain. No heavy distressed textures.
3. **Rules create structure.** Thin hairline rules, vertical column rules, occasional double rules.
4. **A restrained editorial palette.** Cream remains the page canvas. Deep navy carries structure and key surfaces; signature raspberry marks a few memorable moments; butter adds warmth to selected cards, annotations and illustrations. Muted tints support the three core hues. Never use raspberry as a dominant page background, and use its darker ink token for small text.
5. **Cards feel curated.** Four consistent variants, never a grid of identical tiles.
6. **Whitespace is intentional.** Dense newspaper content should still feel calm.
7. **Mobile is first-class.**

## 4. Typography (five editorial roles)
- **Masthead:** UnifrakturCook (blackletter). Preserve its current size and appearance; use only for the publication masthead and rare ornaments.
- **Main headlines:** Fraunces, bold with tight tracking. Use for lead and story-card headlines, articles, related stories and major section titles.
- **Long-form reading:** Special Elite for complete article body paragraphs and typewriter-style reading content. Keep it comfortably sized (about 18 to 20px) with generous leading (about 1.7); widen the reading measure rather than shrinking it to fit.
- **Supporting editorial copy:** Literata for article summaries, decks, descriptions, captions, source notes, footer copy, and yellow margin-note titles and explanations.
- **Navigation and metadata:** DM Sans for navigation, dates, categories, reading time, labels and controls.

The font roles are exposed as `--font-masthead`, `--font-display`, `--font-body`, `--font-support` and `--font-label` in `design/tokens.css`. Fraunces, Special Elite and Literata are loaded from Google Fonts through `next/font/google` and self-hosted by Next.js; UnifrakturCook and DM Sans remain locally bundled. Do not load Playfair Display or Source Serif 4 in the active product UI.

## 5. Colour
The approved digital palette lives in `design/tokens.css` and is exposed through semantic roles:
- **Page and text:** `--background-page` (existing cream `--paper`), `--background-surface` (bright paper), `--background-muted` (muted paper), `--text-primary` (near-black ink), `--text-secondary` and `--text-inverse`.
- **Editorial hues:** deep navy `--editorial-navy` (`#19334D`), signature raspberry `--raspberry` (`#E30B5D`), and butter `--butter` (`#F2D77B`). Their semantic roles are `--accent-structural`, `--accent-signature` and `--accent-warm`.
- **Highlights and surfaces:** use `--highlight-background` / `--highlight-foreground`, and the `--surface-*` tokens for paper, navy, raspberry and butter editorial surfaces. Their muted variants are for gentle colour fields.
- **Borders:** `--border-default`, `--border-strong` and `--border-structural` keep rules coordinated with ink and navy.

Cream remains dominant. Navy provides the main structure and may support a selected high-contrast story surface. Raspberry is a selective accent, never a dominant page field; the bright hue is for large display or decorative marks while `--raspberry-ink` / `--text-accent` is used for small text. Butter and its tint are reserved for occasional annotations, story fields and original illustrations. Preserve the existing near-black ink, cream papers and neutral rule values. Do not spread new raw colour values through component styles.

## 6. Front page composition
Follows the PRD (section 6.2):
- Oversized masthead with tagline.
- Dateline bar: volume, edition number, date, price "Free".
- Markets ticker strip (must pause, with an accessible static alternative).
- Lead story with drop cap, spanning two columns.
- Three to four secondary stories in varied cards.
- Sections for the reader's chosen topics.
- "This Day in Markets" strip and a "Wild Card" slot.
- Footer with not-financial-advice notice.
Use three-column rows split by hairline vertical rules, with an optional centred section title in the middle column.

## 7. Story cards
- **Lead feature:** large image, big headline, short deck.
- **Standard:** image panel, category label, headline, deck, reading time.
- **Colour-field:** muted colour block behind the image or text, used as a visual break.
- **Compact brief:** text-forward, minimal image, tight metadata.
Every card shows topic, reading time, source attribution and a "Why this?" control. Whole-card click targets, visible hover and focus states. Never rely on colour alone to convey category.

## 8. Reading page
Headline, deck, "Reported by [source]" with a link to the original, body with drop cap, simplify toggle (Original, Plain English, ELI5), margin-note explanations beside highlighted terms, star rating, "Ask the Correspondent" panel, related stories.

## 9. Texture, motion and interaction
- Paper grain via SVG feTurbulence or a small local asset. Light vignette. Grayscale halftone treatment for photos.
- Subtle motion only: a short staggered print-in on the front page, ink-style underline on hover. Nothing over 400ms.
- No parallax or scroll-jacking. Respect `prefers-reduced-motion`.

## 10. Responsive behaviour
- Desktop: multi-column composition with column rules.
- Tablet: two columns, hierarchy preserved.
- Mobile: single column, compact masthead, rules become horizontal, no horizontal overflow.
- Test at 1440, 1024, 768 and 390px.

## 11. Avoid
- Copying any reference site.
- Excessive stamps, torn-paper effects, grunge or fake distress. These are out of scope for now.
- A dark mode or night edition (stretch goal, v2).
- Blackletter body text, tiny low-contrast text, identical cards everywhere.
- Rounded SaaS cards, glassmorphism, glossy gradients, heavy shadows, emoji.

## 12. First design deliverables
1. Token showcase page.
2. Static desktop front-page mockup using clearly labelled sample content.
3. Responsive mobile front page.
4. Article reading mockup.
5. Onboarding topic grid mockup.
6. Screenshot review against `REFERENCES.md`.

The approved visual-direction study at `/mockup/visual-direction` demonstrates the palette. The comparison at `/mockup/typography` records the selected type hierarchy. Preserve the newspaper grid and blackletter masthead.
