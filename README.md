# app-to-deploy ☕

A small React + Vite coffee shop website (Bean Scene) for practicing deployment to Vercel.

## Pages

- **Home** — hero section and features
- **Menu** — espresso, cold drinks, and pastries
- **About** — store info, hours, contact, and a live weather widget powered by WeatherAPI.com

## API key setup (required)

The About page calls `/api/weather`, a Vercel serverless function that uses a WeatherAPI.com key. **Without the key the widget will error.**

1. Sign up at [weatherapi.com/signup.aspx](https://www.weatherapi.com/signup.aspx) — instant, no credit card. Find your key at [weatherapi.com/my](https://www.weatherapi.com/my/).
2. **For local dev:** copy `.env.example` to `.env` and paste your key:
   ```bash
   cp .env.example .env
   npm run dev
   ```
   A small Vite dev middleware in `vite.config.js` mirrors the serverless function so `/api/weather` works locally too.
3. **For Vercel:** in your project dashboard → **Settings → Environment Variables**, add:
   - Name: `API_WEATHER_KEY`
   - Value: your key
   - Apply to: Production, Preview, Development
   Then redeploy.

> The key lives only on the server — it's never sent to the browser.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

### Option 1: Connect via GitHub (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project** and import this repo.
4. Vercel auto-detects Vite. Keep the defaults:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

Every `git push` to `main` will trigger a new deployment.

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Use `vercel --prod` for a production deployment.

## Notes

- `vercel.json` includes a rewrite so React Router routes (like `/menu`) work on refresh.
- This is a static site — no backend, no env vars needed.

## Stack

- React 18 + TypeScript
- React Router 6
- Vite 5
