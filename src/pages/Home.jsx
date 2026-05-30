import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to Bean Scene</h1>
        <p>Locally roasted coffee, cozy atmosphere, and the best espresso in town. Come for the coffee, stay for the vibes.</p>
        <Link to="/menu" className="btn">View Our Menu</Link>
      </section>

      <section className="features">
        <div className="feature">
          <div className="icon">🌱</div>
          <h3>Single Origin</h3>
          <p>Beans sourced directly from family farms around the world.</p>
        </div>
        <div className="feature">
          <div className="icon">🔥</div>
          <h3>Roasted Daily</h3>
          <p>Small-batch roasted every morning for maximum freshness.</p>
        </div>
        <div className="feature">
          <div className="icon">💛</div>
          <h3>Made With Love</h3>
          <p>Our baristas pour their heart into every single cup.</p>
        </div>
      </section>
    </>
  )
}
