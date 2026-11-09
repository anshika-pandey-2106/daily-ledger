# Codex Build Guide: The Daily Ledger

*Setup steps, files to prepare, and phase-by-phase prompts · 8 November 2026*

## 1. How to use this guide

Work top to bottom. Sections 2 to 5 are one-time setup. Section 6 is the build: each task has a ready-to-paste prompt. Do one task per git branch, review the result, then move on.

**Defaults assumed (change them in AGENTS.md if you disagree):** Next.js + TypeScript + Tailwind for the web app, Python 3.11 for the pipeline and recommender, Postgres with pgvector (Neon free tier, Docker locally), Auth.js with Google sign-in, Gemini free tier as the main LLM with Groq and OpenRouter as fallbacks, local sentence-transformers for embeddings.

**Check before you start:** free-tier limits and model names change often. Confirm the current limits for Gemini, Groq, OpenRouter, Neon and Vercel before relying on them.

## 2. Repo setup

Create a GitHub repo called `daily-ledger` with this structure:

```
daily-ledger/
  README.md
  AGENTS.md
  .gitignore
  .env.example
  docs/
    PRD.md
    CODEX_BUILD_GUIDE.md
    CODEX_FIRST_PROMPT.md
  design/
    DESIGN_BRIEF.md
    REFERENCES.md
    tokens.css
    references/        (reference screenshots)
    screenshots/       (created by Codex's screenshot script)
  web/                 (Next.js app, task 0.1)
  pipeline/            (Python: ingestion, LLM, recommender, eval)
  db/migrations/
  scripts/
```

First commit: copy in the contents of the starter bundle (daily-ledger-starter.zip), add `docs/PRD.md` (export the PRD document as Markdown) and `docs/CODEX_BUILD_GUIDE.md` (export this guide), check `git status` for stray secrets, then commit and push.

## 3. Files to prepare before the first prompt

| File | Function | Where it comes from |
| --- | --- | --- |
| `README.md` | Project overview, repository map and setup notes | Starter bundle |
| `AGENTS.md` | Standing rules Codex reads on every task: stack, rules, commands, definition of done | Starter bundle |
| `.gitignore` | Keeps secrets, dependencies and build output out of Git | Starter bundle |
| `.env.example` | Placeholder list of the environment variables the project needs | Starter bundle |
| `docs/PRD.md` | Product spec: goals, features, recommender, data model, risks | Export from the PRD document |
| `docs/CODEX_BUILD_GUIDE.md` | Your playbook of prompts (this guide); Codex does not need to read it | Export from this document |
| `docs/CODEX_FIRST_PROMPT.md` | Design-review-only first prompt | Starter bundle |
| `design/DESIGN_BRIEF.md` | Written design direction | Starter bundle |
| `design/tokens.css` | Exact colours, fonts, spacing, rules and motion values | Starter bundle |
| `design/REFERENCES.md` | What to take from each reference screenshot | Starter bundle |
| `design/references/*.png` | The reference screenshots | Starter bundle, plus the Robert Tran screenshot you add |

The starter bundle holds the single source of truth for `AGENTS.md`, `DESIGN_BRIEF.md`, `tokens.css` and `REFERENCES.md`. The templates that used to sit in this section have been removed so there is only one version of each. Torn-paper edges, stamps and a night edition are out of scope for now.

Before the first prompt: take a screenshot of the Robert Tran site and save it as `design/references/04-robert-tran-broadsheet-site.png`, choose your three news sources (prompt 1.3 needs them), and read `AGENTS.md`, `DESIGN_BRIEF.md` and `tokens.css`, changing anything you disagree with.

## 4. Collecting UI references

1. Spend about two hours collecting 15 to 25 screenshots before any code. Aim for a mix: 5 real historical front pages, 5 modern editorial sites, 3 data-box or ticker examples, 3 mobile layouts, 3 texture or typography close-ups.
2. Where to look: Chronicling America (Library of Congress) for real scans; The New York Times, Wall Street Journal, Financial Times and The Economist for modern hierarchy and finance density; Bloomberg Businessweek for bold layout; The Pudding for data storytelling; Awwwards, Codrops, Dribbble and Behance for searches like editorial web design or vintage newspaper UI; Google Fonts and Fontshare for pairings.
3. Name files descriptively, then write `REFERENCES.md` immediately while you remember what you liked.
4. Never ask Codex to clone one site. Ask it to combine principles from several.
5. Image attachment depends on which Codex interface you use (CLI, IDE, web). If your interface cannot take images, the brief, tokens and `REFERENCES.md` carry most of the weight, and you can describe a screenshot in words in the prompt.

## 5. Working method

**Standard preamble.** Paste this at the top of every prompt in section 6:

```
Read AGENTS.md first, then the files named below. Work on a new git branch named after the task. Do only this task and nothing extra. Write tests for any new logic. Run tests and lint. At the end, list: files changed, assumptions made, anything you are unsure about.
```

**After every task:**

1. Read the diff, especially anything touching ranking, signals, verification or data handling.
2. Run it yourself. For UI tasks, look at the screenshot.
3. Ask Codex to explain any part you cannot explain yourself.
4. Merge only when you understand it.

**Reusable fix-up prompts:**

```
UI compare loop: Here is the current screenshot and the reference design/references/<file>.png. List the 8 biggest differences in spacing, type scale, rules and colour. Fix the top 5 using only tokens from design/tokens.css. Re-run the screenshot script and show what changed.
```

```
Explain loop: Explain how <module> works as if I must present it in an interview. Cover the data flow, the key functions, and two ways it could fail. Do not change any code.
```

```
Reset: The last change went in the wrong direction. Revert to the last commit, re-read AGENTS.md, and propose a plan in 5 bullets before changing any files.
```

## 6. Phase-by-phase prompts

Where a prompt contains text in angle brackets, replace it with your own choice before sending.

### Phase 0: Design (week 1)

Goal: the look is locked before any backend exists.

**0.1 Scaffold and token showcase**

```
Context files: docs/PRD.md (section 11), design/DESIGN_BRIEF.md, design/tokens.css.
Task: create the Next.js + TypeScript + Tailwind app in /web. Load the four fonts from design/DESIGN_BRIEF.md via next/font. Wire design/tokens.css into the Tailwind theme so classes map to tokens. Build a /tokens page that shows every font, colour, rule weight and spacing step. Add ESLint, a test runner with one smoke test, and a Playwright script (npm run screenshots) that saves desktop (1440px) and mobile (390px) screenshots of chosen routes to design/screenshots/.
No other UI.
```

**0.2 Front page mockup**

```
Context files: design/DESIGN_BRIEF.md, design/REFERENCES.md, design/references/, design/tokens.css.
Task: build one static front page at /mockup using hardcoded data in web/data/sample.ts (12 realistic sample stories). Include: blackletter masthead with tagline, dateline bar (volume number, date, price: free), market ticker strip, lead story with drop cap and 2-column span, a 3-column secondary section with column rules, a sidebar with a Markets at a glance box (static numbers) and a Wild Card box, and a footer with a not-financial-advice notice. Include four story-card variants: lead feature, standard image card, colour-field card (using the card colour tokens, on only some cards) and compact text brief. Follow the oversized masthead, hairline rules and three-column structure in the references as inspiration only. Build reusable components in web/components/paper/. Use only tokens. Save screenshots with the script.
```

**0.3 Refine the front page.** Use the UI compare loop from section 5, three to five rounds, against two or three different references.

**0.4 Article page mockup**

```
Context files: design/DESIGN_BRIEF.md, design/REFERENCES.md, design/tokens.css.
Task: build /mockup/article with hardcoded content: headline, deck, byline line reading 'Reported by <source>' with a link, a 180-word body with drop cap, a simplify toggle (Original / Plain English / ELI5, visual only), a margin-note component showing one static example explanation beside a highlighted term, a 5-star rating control, a Why this? button, an Ask the Correspondent side panel (visual only, with 3 suggested question chips), and two related stories. Responsive: the panel and margin note must collapse sensibly on mobile.
```

**0.5 Onboarding mockup**

```
Context files: design/DESIGN_BRIEF.md, design/tokens.css, docs/PRD.md (section 6.1).
Task: build /mockup/onboarding: a grid of 24 topic tags styled as newspaper section labels, exactly 5 must be selected, a counter reading 'n of 5 chosen', a disabled Continue button until 5 are chosen, and a knowledge level selector (Beginner, Intermediate, Advanced). Fully keyboard accessible with visible focus styles that match the theme.
```

**0.6 Texture and motion**

```
Context files: design/DESIGN_BRIEF.md, design/tokens.css.
Task: add paper grain using an SVG feTurbulence filter, a light vignette, grayscale halftone treatment for images using multiply blend, a short staggered print-in animation on the front page, ink-style link underline on hover, and prefers-reduced-motion support that disables all animation. Verify AA contrast and report the ratios you measured.
```

**Exit check:** you would be proud to put the screenshot at the top of the README.

### Phase 1: Skeleton (weeks 2 to 3)

**1.1 Database schema**

```
Context files: docs/PRD.md (section 9).
Task: write SQL migrations in /db/migrations for the tables in PRD section 9, plus a raw_items table for ingested items. Enable pgvector. Add a docker-compose file with Postgres + pgvector for local dev, a script to run migrations, and a seed script that inserts 24 topics with one-sentence descriptions and 10 sources with quality scores and license notes. Add indexes you think are needed and explain each one.
```

**1.2 Auth and onboarding wiring**

```
Context files: docs/PRD.md (section 6.1), the onboarding mockup.
Task: add Auth.js with Google sign-in. Turn the onboarding mockup into a real flow: after first login, require 5 topics and a knowledge level, save them to the database, then redirect to /today (an empty placeholder). Protect routes. Add a settings page to change topics. Server-side validate that exactly 5 topics are saved. Update .env.example.
```

**1.3 Ingestion from three sources**

```
Context files: docs/PRD.md (sections 6.3, 8, 10).
Task: in /pipeline/sources define a SourceAdapter interface and implement adapters for these three sources: <source 1 RSS URL>, <source 2 RSS URL>, <source 3 RSS URL>. Store raw items (title, url, snippet, published time, source) in raw_items. Deduplicate by normalised URL and by title similarity. Respect robots.txt, send a clear user agent, and rate limit requests. Do not store full article text from commercial outlets, only headline and snippet. Tests must use recorded fixtures, not live requests.
```

**1.4 Stage 1 ranking**

```
Context files: docs/PRD.md (section 7.1 and 7.2).
Task: implement rules-based topic tagging (keyword map per topic, in a config file) and the Stage 1 ranking function: score = topic_match x recency x source_quality, with recency as exponential decay with an 18 hour half-life, topic_match 1.0 for chosen topics and 0.3 for adjacent ones. Write these as pure functions with unit tests. Add an edition assembly script that writes edition_items for a user, including factors_json explaining each score.
```

**1.5 Render a real edition**

```
Context files: the front-page mockup components, docs/PRD.md (section 6.2).
Task: build /today to render the latest edition for the logged-in user from the database, reusing the paper components. If today's edition is missing, show the previous one with a visible notice. Remove hardcoded data from this route only. Add an end-to-end test that signs in a test user and checks the page renders 10 or more stories.
```

### Phase 2: Writing pipeline (week 4)

**2.1 LLM client with fallbacks**

```
Context files: docs/PRD.md (section 10).
Task: build /pipeline/llm with one interface complete(task, prompt, schema) and providers for Gemini, Groq, OpenRouter and Ollama. Route small tasks (tagging, verification) to a small model and writing to a larger one, configured in a YAML file. Add retries with backoff, rate-limit tracking, a fallback chain, a database cache keyed by hash of (task, model, prompt), and pydantic validation of JSON outputs. Tests use mocked providers only.
```

**2.2 Fact extraction**

```
Context files: docs/PRD.md (section 6.3).
Task: build fact extraction. Fetch article text with trafilatura only for allowed sources (government and permissively licensed ones, plus commercial pages only where robots.txt allows). Hold the text in memory only: store facts_json and a short excerpt of at most 600 characters, never the full text. Run verification in the same job while the text is still in memory. Prompt the LLM to return JSON: entities, numbers (value, unit, what it measures), dates, attributed quotes (max 12 words each), and key claims, each tied to a source sentence. Store as facts_json. Include 10 saved fixture articles and a test that checks the schema.
```

**2.3 Article writer**

```
Context files: docs/PRD.md (section 6.3).
Task: write pipeline/prompts/style.md describing the newspaper voice (inverted pyramid, short paragraphs, plain and informative, no hype). Build the writer: input is only facts_json, output is a headline, a one-line deck and a 120 to 200 word body. The prompt must state: use only the provided facts, no outside knowledge, do not mirror the original's sentence structure, no quote over 12 words. Store results with source name and URL.
```

**2.4 Verifier**

```
Context files: docs/PRD.md (sections 6.3 and 8).
Task: build the verification step with three checks. First, deterministic: every number and named entity in the written story must appear in facts_json. Second, an LLM check using the small model for unsupported claims. Third, an n-gram overlap check against the source text that fails any story sharing 8 or more consecutive words with it. On failure retry once, then drop the story and log the reason to a rejections table. Write thorough tests including stories with a planted wrong number.
```

**2.5 Daily batch job**

```
Context files: docs/PRD.md (sections 6.2, 8, 10).
Task: orchestrate the full pipeline (fetch, dedupe, extract, write, verify, tag, assemble editions) in one idempotent command. Cap at 25 stories per run. Add a GitHub Actions workflow that runs it daily on a cron schedule. If the run fails, keep serving the previous edition. Write a run summary (stories fetched, written, rejected, LLM calls used per provider) to a run_log table.
```

**Exit check:** 20 stories published, none with a number missing from its facts.

### Phase 3: Reading experience (week 5)

**3.1 Reading view**

```
Context files: the article mockup, docs/PRD.md (section 6.4).
Task: build /story/[id] from the database using the article mockup components. Always show 'Reported by <source>' with a link to the original. The simplify toggle stays visual only for now. Add proper metadata and a not-financial-advice footer.
```

**3.2 Highlight-to-explain**

```
Context files: docs/PRD.md (sections 6.4 and 8).
Task: implement highlight-to-explain. Use the browser Selection API to show a floating Explain button anchored to the selection (also reachable by keyboard shortcut). On click, call /api/explain with the selected term and its surrounding sentence, and show the answer as a margin note. The API checks the glossary table by (term, context_type) first, then falls back to the LLM client and stores the result. Add per-user rate limiting. Limit selections to 1 to 5 words.
```

**3.3 Glossary seed**

```
Context files: docs/PRD.md (section 6.4).
Task: write a batch script that generates short definitions for about 300 common finance terms (basis points, yield curve, spread, hedge, and so on) at three levels, writes them to data/glossary.json for my manual review, and a loader that imports reviewed entries. Add a /glossary page listing the terms the current user has looked up.
```

**3.4 Ratings and event logging**

```
Context files: docs/PRD.md (sections 6.5 and 7.4).
Task: implement the events pipeline. Client hooks log impression (IntersectionObserver), click, dwell time, scroll depth, term highlighted, save and rating, batched and sent with sendBeacon to /api/events. Store raw events with no weighting applied. Wire the star rating and Save controls. Add tests for batching and for rejecting malformed events.
```

### Phase 4: Recommender core (weeks 6 to 7)

**4.1 Embeddings**

```
Context files: docs/PRD.md (section 7.3).
Task: add a pipeline step that embeds each story and each topic description with bge-small via sentence-transformers, stores vectors in pgvector columns, and creates an HNSW index. Provide a backfill command for existing stories. Add a test that semantically similar stories rank above unrelated ones.
```

**4.2 User profile vector**

```
Context files: docs/PRD.md (sections 7.3 and 7.4).
Task: build user profile vectors. Put the signal weights from the PRD table in a YAML config. The vector starts as the mean of the chosen topic embeddings, then becomes a time-decayed (14 day half-life) weighted sum of embeddings of interacted stories, normalised. Write pure functions plus unit tests, including negative signals pushing the vector away. Add a nightly update job.
```

**4.3 Blended ranking behind a flag**

```
Context files: docs/PRD.md (section 7.3).
Task: implement final = a*similarity + b*topic_match + c*hot + d*recency with weights in config. Add a RANKER_STAGE setting (stage1, stage2, stage3) so each stage can be run separately for the evaluation harness later. Keep Stage 1 working exactly as before.
```

**4.4 Why this story**

```
Context files: docs/PRD.md (section 7.7), the article mockup.
Task: generate human-readable factors for each edition item from factors_json (matched topic, similar to stories you rated highly, top story across n sources, Wild Card pick). Build the Why this? popover in the UI and a Show me less like this action that logs a strong negative event.
```

**4.5 Simplify toggle**

```
Context files: docs/PRD.md (section 6.4).
Task: make the simplify toggle work. Generate Plain English and ELI5 versions from facts_json on first request and cache them. Default each user to a level based on their knowledge level, and remember their last choice. Run the verification checks on simplified versions too.
```

**Exit check:** rate a few stories, trigger the update job, and see tomorrow's edition visibly change.

### Phase 5: Depth (weeks 8 to 9)

**5.1 MMR and caps**

```
Context files: docs/PRD.md (section 7.6).
Task: add MMR re-ranking with a configurable lambda, caps per topic and per source on the front page, and a guaranteed lead slot chosen by global hot score. Unit test that near-duplicate stories do not appear together.
```

**5.2 Bandit exploration**

```
Context files: docs/PRD.md (section 7.5).
Task: implement Beta-Bernoulli Thompson sampling per user per topic for 2 of every 15 slots (the Wild Card slots). Reward is read-through or a rating of 4 or more. Store posteriors in user_profiles with slow decay. Log the propensity of each served item in edition_items. Seed the random generator in tests.
```

**5.3 Clustering and synthesis**

```
Context files: docs/PRD.md (section 6.3).
Task: cluster stories covering the same event using agglomerative clustering on embeddings with a distance threshold in config. Compute hot score from cluster size, source quality and recency. For clusters with 2 or more sources, have the writer synthesise one story from the combined facts and show 'n sources covering this'. Re-run verification on synthesised stories.
```

**5.4 Ask the Correspondent**

```
Context files: docs/PRD.md (section 6.4), the article mockup panel.
Task: build the chat panel. Ground answers in the story's facts_json and chunks of the stored excerpt. Retrieve the top chunks per question, answer using only them, and say when the answer is general background rather than from the article. Show suggested question chips, keep the last 6 turns, limit to 10 questions per user per day, and log a chat event for the recommender. Add a not-financial-advice line. Test refusal behaviour when the answer is not in the sources.
```

**5.5 Evaluation harness**

```
Context files: docs/PRD.md (section 7.8).
Task: build /pipeline/eval. Create synthetic users with hidden preference vectors and simulated click, dwell and rating behaviour with noise. Run these rankers: random, popularity, stage1, stage2, stage3, full system with bandit. Compute NDCG@10, Precision@10, Recall@20, coverage, intra-list diversity and serendipity. Add inverse propensity scoring on logged bandit data and regret curves. Output charts and a markdown results table to docs/eval/. State in the report that synthetic evaluation measures learning of given preferences, not real user satisfaction.
```

**Exit check:** the results chart exists and the full system beats the popularity baseline.

### Phase 6: Polish (week 10)

**6.1 Archive**

```
Task: build an edition archive at /archive with a calendar or list by date, edition numbering (Vol. and No.), and a way to open any past edition read-only. Context: docs/PRD.md (section 6.2).
```

**6.2 Tests and CI**

```
Task: add a GitHub Actions workflow that runs lint, web tests, pytest and a Playwright smoke test on every pull request. Raise test coverage on ranking, signal weighting, bandit and verification to a level you can justify, and report current coverage.
```

**6.3 Deployment**

```
Task: prepare deployment on Vercel (web) with a Neon Postgres database and the GitHub Actions cron for the pipeline. Write step-by-step deployment docs, document every environment variable, add a health check route and basic error logging. Do not commit any secrets.
```

**6.4 README and demo material**

```
Task: write the README: one-paragraph pitch, screenshots from design/screenshots/, a Mermaid architecture diagram, the recommender stages explained simply, the evaluation results from docs/eval/, honest limitations (free-tier constraints, synthetic evaluation, copyright approach), and a 2 minute demo script listing the exact clicks to show.
```

**6.5 Stretch (only after launch):** email digest, print-ready PDF edition, flashcards from the personal glossary, markets-at-a-glance with live data.

## 7. Per-task review checklist

- Does it follow the rules in AGENTS.md (free services, tokens only, no full-text republishing)?
- Do tests exist for new logic, and do they fail when the logic is broken?
- Are any LLM calls happening on page views instead of in the batch job?
- Can I explain this module out loud without reading it?
- For UI: does it look like the references on both desktop and mobile?

## 8. Suggested first week

1. Day 1: create the repo, export the PRD, settle the open questions in PRD section 16, and choose your three sources.
2. Day 2: add the Robert Tran screenshot and any other references to design/references, then update REFERENCES.md.
3. Day 3: review AGENTS.md, DESIGN\_BRIEF.md and tokens.css from the starter bundle and change anything you disagree with.
4. Day 4: run docs/CODEX\_FIRST\_PROMPT.md, then prompts 0.1 and 0.2.
5. Days 5 to 7: refine with the UI compare loop, then 0.4 to 0.6.
