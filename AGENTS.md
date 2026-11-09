# AGENTS.md

Standing instructions for Codex. Read this first on every task.

## Project
The Daily Ledger: personalised finance news presented as a vintage-style newspaper, built for the web.
- Product spec: `docs/PRD.md`
- Visual direction: `design/DESIGN_BRIEF.md`
- References (inspiration only): `design/REFERENCES.md` and `design/references/`
- Design tokens: `design/tokens.css`

## Stack
- Web: Next.js (App Router), TypeScript, Tailwind CSS + custom CSS, Framer Motion
- Pipeline and recommender: Python 3.11 in `/pipeline` (batch jobs, no separate API service)
- Database: PostgreSQL + pgvector, SQL migrations in `/db/migrations`
- LLMs: Gemini free tier primary, Groq and OpenRouter as fallbacks, Ollama for local development
- Embeddings: sentence-transformers (`bge-small`), run locally
- Do not add dependencies without explaining why. Do not change the stack without asking.

## Layout
`/web` app, `/pipeline` Python jobs, `/db` migrations, `/design` tokens and references, `/docs` specs, `/scripts` helpers.

## Commands
Add the exact commands here once the project is scaffolded (task 0.1):
- web: `npm run dev`, `npm test`, `npm run lint`, `npm run screenshots`
- pipeline: `pytest`, `ruff check`
The development machine runs Windows (PowerShell). Prefer cross-platform scripts.

## Design rules
1. Use only tokens from `design/tokens.css`. No hardcoded colours, fonts, spacing or border styles.
2. Build the design system and static mockups before application logic.
3. References are inspiration, not templates. Never copy a site's layout, text, assets or branding.
4. Limit each screen to a small number of active font families.
5. Primary persona: the Curious Beginner. Explain finance clearly and avoid jargon walls.
6. Mobile layouts must be deliberate, not compressed desktop layouts.

## Engineering rules
1. Free-tier services and free or local models only. Ask before changing this.
2. Never republish full source articles. Every story shows the source name and a link to the original.
3. Source text is held in memory only. Store extracted facts and a short excerpt (max 600 characters), never the full text.
4. Every generated story must pass verification (numbers and names match the extracted facts) before publishing.
5. Cache all LLM output. Never call an LLM during a page view.
6. Secrets live in `.env` files, never in Git. Keep `.env.example` current and placeholder-only.
7. One scoped task per branch. Keep diffs small and explain meaningful decisions.
8. Add tests for new logic. Run lint and tests before calling a task complete.
9. Accessibility: WCAG AA contrast, keyboard operation, semantic HTML, visible focus, reduced-motion support.
10. Do not invent data, sources, financial figures or article facts. Label demo content as illustrative.
11. Do not overwrite the reference images or silently delete existing files.
12. Include a not-financial-advice notice in the footer and on generated content.

## Definition of done
- Relevant checks pass, or failures are reported clearly.
- No unexplained TODOs, placeholder secrets or dead controls.
- UI work is checked at desktop (1440px) and mobile (390px) sizes.
- The final message lists files changed, commands run, assumptions made and open questions.
