import { defineConfig, loadEnv, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'

// Dev-only middleware that mirrors the Vercel serverless function in /api/weather.ts
// so `npm run dev` can serve /api/weather without needing `vercel dev`.
// On Vercel (production), the real serverless function is used instead.
function devWeatherApi(env: Record<string, string>): PluginOption {
  return {
    name: 'dev-weather-api',
    configureServer(server) {
      server.middlewares.use('/api/weather', async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        const apiKey = env.API_WEATHER_KEY
        const url = new URL(req.url ?? '/', 'http://localhost')
        const city = url.searchParams.get('city') ?? 'Tel Aviv'

        if (!apiKey) {
          res.statusCode = 500
          return res.end(JSON.stringify({ error: 'Missing API_WEATHER_KEY in .env' }))
        }

        try {
          const r = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`,
          )
          if (!r.ok) {
            res.statusCode = r.status
            return res.end(JSON.stringify({ error: `Weather API returned ${r.status}` }))
          }
          const data = await r.json()
          res.end(
            JSON.stringify({
              city: data.location.name,
              country: data.location.country,
              temp: Math.round(data.current.temp_c),
              condition: data.current.condition.text,
              icon: data.current.condition.icon,
            }),
          )
        } catch (e) {
          res.statusCode = 500
          res.end(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), devWeatherApi(env)],
  }
})
