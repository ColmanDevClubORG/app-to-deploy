import Weather from '../components/Weather'

export default function About() {
  return (
    <div className="page">
      <h1>About Us</h1>

      <Weather city="Tel Aviv" />

      <p>
        Bean Scene opened its doors in 2018 with a simple mission: serve great coffee
        in a place where everyone feels at home. We're a neighborhood spot, run by
        people who love coffee and the community around it.
      </p>
      <p>
        Every bean we serve is ethically sourced and roasted in small batches just
        down the street. Stop by, grab a cup, and stay a while.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>📍 Visit Us</h3>
          <p>123 Roast Street<br />Colman, IL 12345</p>
        </div>
        <div className="about-card">
          <h3>🕒 Hours</h3>
          <p>Mon–Fri: 7am – 7pm<br />Sat–Sun: 8am – 6pm</p>
        </div>
        <div className="about-card">
          <h3>📞 Contact</h3>
          <p>hello@beanscene.coffee<br />(555) 123-4567</p>
        </div>
      </div>
    </div>
  )
}
