import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">☕ Bean Scene</Link>
      <div className="links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}
