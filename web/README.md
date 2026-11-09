# Daily Ledger web foundation

This folder contains the Next.js application. The design tokens remain in the repository-level `design/tokens.css`, so the showcase and later UI work share one source of truth.

## Run it

Open a terminal in `web`, then run:

```powershell
npm install
npm run dev
```

Open <http://localhost:3000/tokens> to view the token showcase. The project `.npmrc` puts npm's package cache in `D:\Dev\daily-ledger\.npm-cache` when the repository lives on D:.

## Checks and screenshots

Install the Playwright Chromium browser once:

```powershell
npm exec -- playwright install chromium
```

Then run:

```powershell
npm run lint
npm test
npm run screenshots
```

The Playwright smoke test runs the showcase at desktop and mobile sizes and writes full-page captures into `design/screenshots/`. The test runner starts the development server itself, so no separate server terminal is needed for these commands.

## Structure

- `src/app/layout.tsx` loads the four Google font families once with `next/font/local` and provides shared page metadata. The font files and their SIL Open Font License texts are included so builds do not depend on a connection to Google Fonts.
- `src/app/globals.css` imports Tailwind and the repository design tokens, then maps token values into named Tailwind colour, font and spacing utilities.
- `src/app/tokens/` contains the static token showcase and its responsive styles.
- `tests/` contains a browser-level smoke test; `playwright.config.ts` defines the review viewports.

This foundation intentionally contains no product data, API routes, authentication or article UI.
