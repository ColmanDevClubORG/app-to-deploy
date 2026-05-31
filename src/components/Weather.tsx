import { useEffect, useState } from 'react'

type WeatherData = {
  city: string
  country: string
  temp: number
  condition: string
  icon: string
}

type Props = {
  city?: string
}

export default function Weather({ city = 'Tel Aviv' }: Props) {
  const [data, setData] = useState<WeatherData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/api/weather?city=${encodeURIComponent(city)}`)
      .then((r) => r.json())
      .then((d: WeatherData | { error: string }) =>
        'error' in d ? setError(d.error) : setData(d),
      )
      .catch((e: unknown) => setError(e instanceof Error ? e.message : String(e)))
  }, [city])

  return (
    <div className="weather-card">
      <h3>🌤️ Right now in {city}</h3>
      {error && <p className="weather-error">{error}</p>}
      {!error && !data && <p>Loading weather…</p>}
      {data && (
        <div className="weather-info">
          <img src={`https:${data.icon}`} alt={data.condition} width="64" height="64" />
          <div>
            <div className="weather-temp">{data.temp}°C</div>
            <div className="weather-desc">{data.condition}</div>
          </div>
        </div>
      )}
    </div>
  )
}
