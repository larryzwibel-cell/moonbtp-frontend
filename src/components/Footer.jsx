import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #2A2A45',
      padding: '32px 24px',
      background: '#0A0A0F',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: '#7C3AED',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 700, color: '#fff',
          }}>M</div>
          <span style={{ fontSize: 13, color: '#6B6585' }}>
            MoonBTP.fr © {new Date().getFullYear()}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {[
            { to: '/comparateur', label: 'Comparateur' },
            { to: '/artisans', label: 'Artisans' },
            { to: '/mentions-legales', label: 'Mentions légales' },
            { to: '/cgu', label: 'CGU' },
          ].map(({ to, label }) => (
            <Link key={to} to={to} style={{ fontSize: 12, color: '#6B6585' }}>
              {label}
            </Link>
          ))}
        </div>

        <div style={{ fontSize: 11, color: '#6B6585' }}>
          Un projet de{' '}
          <span style={{ color: '#8B5CF6' }}>Mounir Boudjenah</span>
          {' '}·{' '}
          <a href="https://alya-ia.fr" target="_blank" rel="noopener noreferrer"
            style={{ color: '#6B6585', textDecoration: 'underline' }}>alya-ia.fr</a>
        </div>
      </div>
    </footer>
  )
}
