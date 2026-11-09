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
4. **One bold accent.** A burnt-orange brand accent for labels, badges and small highlights. Muted colour fields appear on selected story cards only.
5. **Cards feel curated.** Four consistent variants, never a grid of identical tiles.
6. **Whitespace is intentional.** Dense newspaper content should still feel calm.
7. **Mobile is first-class.**

## 4. Typography (four families)
- **Masthead:** UnifrakturCook (blackletter). Masthead and a few ornamental uses only, never body text or long headlines.
- **Headlines:** Playfair Display, bold, tight tracking, often uppercase for section titles. This is the free stand-in for Canopée, the condensed display face used on the main reference site.
- **Body:** Source Serif 4, 17 to 18px, line-height about 1.6. Margin notes use its italic.
- **Labels and metadata:** DM Sans, uppercase with moderate letter spacing, for dates, categories, reading time and buttons.

## 5. Colour
All values are in `tokens.css`. Paper `--paper`, ink `--ink`, hairline `--rule`, brand accent `--accent`. Card colour fields: blue, mustard, sage, forest, charcoal. Accent on paper is below AA for small text, so use `--accent-text` for small accent text and `--accent` for fills and large type.

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
