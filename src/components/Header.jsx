import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/comparateur', label: 'Matériaux' },
    { to: '/artisans', label: 'Artisans' },
  ]

  return (
    <header style={{
      background: 'rgba(10,10,15,0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid #2A2A45',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 10,
            background: '#7C3AED',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, fontWeight: 700, color: '#fff',
          }}>M</div>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#F5F3FF' }}>
            Moon<span style={{ color: '#8B5CF6' }}>BTP</span>
            <span style={{ fontSize: 11, color: '#6B6585', marginLeft: 5, fontWeight: 400 }}>.fr</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} style={{
              padding: '6px 16px',
              borderRadius: 8,
              fontSize: 14,
              color: location.pathname === to ? '#F5F3FF' : '#A89FC0',
              background: location.pathname === to ? '#2A2A45' : 'none',
              fontWeight: location.pathname === to ? 500 : 400,
            }}>{label}</Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', gap: 8 }}>
          <Link to="/artisans" style={{
            background: '#7C3AED',
            border: 'none',
            color: '#fff',
            padding: '7px 16px',
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 500,
            display: 'inline-block',
          }}>Devenir artisan →</Link>
        </div>
      </div>
    </header>
  )
}
