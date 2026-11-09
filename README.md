# The Daily Ledger

A personalised finance news publication presented as a vintage-style newspaper. Pick five topics you care about and receive a daily edition: the most relevant stories written fresh from extracted facts, with highlight-to-explain for jargon, ratings that teach the recommender, and a chat panel to ask questions about any article.

**Status:** design phase. See `docs/PRD.md` for the full product spec.

> Not financial advice. Stories are summaries written from extracted facts and always link to the original source.

## Repository map

| Path | Function |
|---|---|
| `README.md` | This file: overview, repository map, setup notes. |
| `AGENTS.md` | Standing instructions Codex reads on every task: stack, rules, commands, definition of done. |
| `.gitignore` | Keeps secrets, dependencies and build output out of Git. |
| `.env.example` | Placeholder list of the environment variables the project needs. Copy to `.env.local` and fill in. Never commit real values. |
| `docs/PRD.md` | Product requirements: goals, features, recommender spec, data model, risks. Source of truth for what to build. |
| `docs/CODEX_BUILD_GUIDE.md` | Your playbook: setup steps and the phase-by-phase prompts you paste into Codex. You use this; Codex does not need to read it. |
| `docs/CODEX_FIRST_PROMPT.md` | A design-review-only first prompt that checks Codex understands the project before any code is written. |
| `design/DESIGN_BRIEF.md` | Written design direction: typography, layout, cards, texture, motion, what to avoid. |
| `design/tokens.css` | Exact colours, fonts, spacing, rules and motion values. The only place design values are defined. |
| `design/REFERENCES.md` | What to take from each reference screenshot, and what not to copy. |
| `design/references/` | The reference screenshots. Never modify or delete. |
| `design/screenshots/` | Created later by Codex's screenshot script, used to compare its output with the references. |
| `web/` | Created in task 0.1: the Next.js app. |
| `pipeline/` | Created in Phase 1: Python jobs for ingestion, writing, verification, embeddings, recommender and evaluation. |
| `db/migrations/` | Created in task 1.1: SQL schema migrations. |
| `scripts/` | Small helper scripts. |

## One-time setup (Windows, PowerShell)

Install Git, Node.js LTS (22 or newer), Python 3.11, and the Codex CLI, then check:

```powershell
git --version
node --version
py --version
codex --version
```

Docker Desktop is needed later, from task 1.1, for a local Postgres.

Clone the repository, copy these files in, check `git status` for stray secrets, then commit and push:

```powershell
git add .
git commit -m "docs: add specs, design direction and references"
git push
```

## Working with Codex

1. Open a terminal in the repository folder and run `codex`.
2. Start with `docs/CODEX_FIRST_PROMPT.md` (review only, no code).
3. Then follow `docs/CODEX_BUILD_GUIDE.md` one prompt at a time, on one git branch per task.
4. Read every diff, run it, and merge only what you understand.

## Free-tier principle

Everything runs on free tiers, free APIs and local models. Check each provider's current limits before relying on them.
