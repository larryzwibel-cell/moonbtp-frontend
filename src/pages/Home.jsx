import { Link } from 'react-router-dom'

const S = {
  hero: {
    padding: '80px 24px 60px',
    textAlign: 'center',
    background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.2) 0%, transparent 70%)',
  },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '5px 14px',
    background: 'rgba(124,58,237,0.15)',
    border: '1px solid rgba(124,58,237,0.4)',
    borderRadius: 20, marginBottom: 24,
  },
  dot: { width: 7, height: 7, borderRadius: '50%', background: '#10B981' },
  h1: { fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, lineHeight: 1.1, margin: '0 0 20px', color: '#F5F3FF' },
  sub: { fontSize: 18, color: '#A89FC0', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.6 },
  stats: { display: 'flex', gap: 40, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' },
  ctas: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 80 },
  ctaPrimary: {
    padding: '14px 28px', borderRadius: 12,
    background: '#7C3AED', border: 'none', color: '#fff',
    fontSize: 15, fontWeight: 600, textDecoration: 'none',
  },
  ctaSecondary: {
    padding: '14px 28px', borderRadius: 12,
    background: 'none', border: '1px solid #2A2A45', color: '#A89FC0',
    fontSize: 15, textDecoration: 'none',
  },
}

const STATS = [
  { value: '1 200+', label: 'Matériaux comparés' },
  { value: '4', label: 'Grandes enseignes' },
  { value: '340+', label: 'Artisans vérifiés' },
  { value: '15 %', label: 'Économie moyenne' },
]

const FEATURES = [
  { icon: '🔍', title: 'Comparaison en temps réel', desc: 'Prix actualisés de Leroy Merlin, Brico Dépôt, Castorama et Point P en un seul endroit.' },
  { icon: '✅', title: 'Artisans certifiés RGE', desc: 'Chaque artisan est vérifié : SIRET, assurance décennale, avis clients authentiques.' },
  { icon: '💰', title: 'Économisez jusqu\'à 30%', desc: 'Notre comparateur trouve automatiquement l\'enseigne la moins chère pour chaque matériau.' },
  { icon: '⚡', title: 'Devis sous 24h', desc: 'Contactez un artisan et recevez votre devis en moins de 24 heures, garanti.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={S.hero}>
        <div style={S.badge}>
          <span style={S.dot} />
          <span style={{ fontSize: 12, color: '#8B5CF6', fontWeight: 500 }}>MVP · Version bêta publique</span>
        </div>
        <h1 style={S.h1}>
          Comparez les prix BTP<br />
          <span style={{ color: '#8B5CF6' }}>en temps réel</span>
        </h1>
        <p style={S.sub}>
          1 200+ matériaux · 4 grandes enseignes · économisez jusqu'à 30% sur vos chantiers
        </p>

        {/* STATS */}
        <div style={S.stats}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#F5F3FF' }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#6B6585' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={S.ctas}>
          <Link to="/comparateur" style={S.ctaPrimary}>Comparer les matériaux →</Link>
          <Link to="/artisans" style={S.ctaSecondary}>Trouver un artisan</Link>
        </div>

        {/* BRANDS */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#6B6585' }}>Prix comparés chez :</span>
          {[
            { name: 'Leroy Merlin', color: '#009245' },
            { name: 'Brico Dépôt', color: '#E3001B' },
            { name: 'Castorama', color: '#0066A4' },
            { name: 'Point P', color: '#F47920' },
          ].map(b => (
            <span key={b.name} style={{
              padding: '4px 12px', borderRadius: 8,
              background: `${b.color}15`, border: `1px solid ${b.color}30`,
              color: b.color, fontSize: 12, fontWeight: 500,
            }}>{b.name}</span>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '60px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: 28, fontWeight: 600, marginBottom: 8, color: '#F5F3FF' }}>
          Pourquoi MoonBTP ?
        </h2>
        <p style={{ textAlign: 'center', color: '#A89FC0', marginBottom: 48 }}>
          Le seul comparateur pensé pour les professionnels et particuliers du BTP
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {FEATURES.map(f => (
            <div key={f.title} style={{
              background: '#16162A', border: '1px solid #2A2A45',
              borderRadius: 16, padding: 24,
            }}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: '#F5F3FF', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: '#A89FC0', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA ARTISAN */}
      <section style={{ padding: '0 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          padding: '40px', borderRadius: 20,
          background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: '#F5F3FF', marginBottom: 8 }}>
              Vous êtes artisan BTP ?
            </h3>
            <p style={{ fontSize: 14, color: '#A89FC0' }}>
              Abonnement Pro dès 49€/mois · Profil mis en avant · Leads qualifiés · Devis simplifié
            </p>
          </div>
          <Link to="/artisans" style={{
            padding: '13px 28px', borderRadius: 12,
            background: '#7C3AED', color: '#fff',
            fontSize: 15, fontWeight: 500, whiteSpace: 'nowrap',
          }}>
            Rejoindre MoonBTP Pro →
          </Link>
        </div>
      </section>
    </>
  )
}
