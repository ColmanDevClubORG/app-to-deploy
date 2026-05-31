// Vercel serverless function: GET /api/weather
// Reads API_WEATHER_KEY from environment variables (set in Vercel dashboard).
// Docs: https://www.weatherapi.com/docs/

import type { VercelRequest, VercelResponse } from '@vercel/node'

type WeatherApiResponse = {
  location: { name: string; country: string }
  current: {
    temp_c: number
    condition: { text: string; icon: string }
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.API_WEATHER_KEY
  const city = (req.query.city as string) || 'Tel Aviv'

  if (!apiKey) {
    return res.status(500).json({
      error: 'Missing API_WEATHER_KEY. Add it in Vercel → Project → Settings → Environment Variables.',
    })
  }

  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`
    const response = await fetch(url)

    if (!response.ok) {
      return res.status(response.status).json({ error: `Weather API returned ${response.status}` })
    }

    const data = (await response.json()) as WeatherApiResponse

    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate')
    return res.status(200).json({
      city: data.location.name,
      country: data.location.country,
      temp: Math.round(data.current.temp_c),
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
    })
  } catch (err) {
    return res.status(500).json({ error: err instanceof Error ? err.message : String(err) })
  }
}
