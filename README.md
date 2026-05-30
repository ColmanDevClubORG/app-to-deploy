# app-to-deploy ☕

A small React + Vite coffee shop website (Bean Scene) for practicing deployment to Vercel.

## Pages

- **Home** — hero section and features
- **Menu** — espresso, cold drinks, and pastries
- **About** — store info, hours, contact

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

- React 18
- React Router 6
- Vite 5
