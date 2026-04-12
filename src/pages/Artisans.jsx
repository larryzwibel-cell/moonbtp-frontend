import { useState, useMemo } from 'react'
import { ARTISANS, METIERS } from '../data/artisans'

function ArtisanCard({ artisan }) {
  return (
    <div style={{
      background: '#16162A',
      border: `1px solid ${artisan.premium ? 'rgba(124,58,237,0.5)' : '#2A2A45'}`,
      borderRadius: 16, padding: 20, position: 'relative',
    }}>
      {artisan.premium && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: 'linear-gradient(90deg, #7C3AED, #8B5CF6)',
          borderRadius: '16px 16px 0 0',
        }} />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: artisan.premium ? '#7C3AED' : '#1A1A30',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 600, color: '#fff', flexShrink: 0,
        }}>{artisan.avatar}</div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500, fontSize: 14, color: '#F5F3FF' }}>{artisan.name}</span>
            {artisan.cert && <span style={{ fontSize: 12, color: '#10B981' }}>✓</span>}
            {artisan.premium && (
              <span style={{
                fontSize: 9, color: '#8B5CF6',
                background: 'rgba(124,58,237,0.2)',
                border: '1px solid rgba(124,58,237,0.4)',
                padding: '1px 6px', borderRadius: 8, letterSpacing: '0.5px', fontWeight: 600,
              }}>PRO</span>
            )}
          </div>
          <div style={{ fontSize: 12, color: '#6B6585' }}>{artisan.metier} · {artisan.ville}</div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#F5F3FF' }}>{artisan.tarif}</div>
          <div style={{ fontSize: 10, color: '#6B6585' }}>+ charges</div>
        </div>
      </div>

      {/* Note */}
      <div style={{ marginBottom: 12 }}>
        <span style={{ color: '#F59E0B', fontSize: 13 }}>
          {'★'.repeat(Math.floor(artisan.note))}{'☆'.repeat(5 - Math.floor(artisan.note))}
        </span>
        <span style={{ fontSize: 11, color: '#6B6585', marginLeft: 6 }}>
          {artisan.note} · {artisan.avis} avis
        </span>
      </div>

      {/* RGE */}
      {artisan.rgeDomaines.length > 0 && (
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 12 }}>
          {artisan.rgeDomaines.map(d => (
            <span key={d} style={{
              fontSize: 10, padding: '2px 8px', borderRadius: 20,
              background: 'rgba(16,185,129,0.08)', color: '#10B981',
              border: '1px solid rgba(16,185,129,0.2)',
            }}>RGE {d}</span>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontSize: 11, padding: '3px 10px', borderRadius: 20,
          background: 'rgba(16,185,129,0.12)', color: '#10B981',
          border: '1px solid rgba(16,185,129,0.25)',
        }}>Dispo {artisan.dispo}</span>
        <button style={{
          padding: '8px 16px', borderRadius: 10,
          background: '#7C3AED', border: 'none',
          color: '#fff', fontSize: 12, fontWeight: 500,
        }}>Contacter</button>
      </div>
    </div>
  )
}

export default function Artisans() {
  const [search, setSearch] = useState('')
  const [metier, setMetier] = useState('Tous')

  const filtered = useMemo(() => {
    return ARTISANS.filter(a => {
      const ms = a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.ville.toLowerCase().includes(search.toLowerCase())
      const mm = metier === 'Tous' || a.metier === metier
      return ms && mm
    }).sort((a, b) => (b.premium ? 1 : 0) - (a.premium ? 1 : 0))
  }, [search, metier])

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 24px 80px' }}>

      {/* HERO SECTION */}
      <div style={{
        background: '#16162A', border: '1px solid #2A2A45',
        borderRadius: 20, padding: '32px',
        marginBottom: 28, display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        gap: 24, flexWrap: 'wrap',
      }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 600, color: '#F5F3FF', marginBottom: 8 }}>
            Artisans certifiés BTP
          </h1>
          <p style={{ fontSize: 14, color: '#A89FC0', lineHeight: 1.6, maxWidth: 500 }}>
            340+ artisans vérifiés · SIRET contrôlé · Assurance décennale · Devis sous 24h · Avis authentiques
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
          {[['96%', 'satisfaction'], ['24h', 'délai réponse'], ['340+', 'artisans']].map(([v, l]) => (
            <div key={l} style={{
              textAlign: 'center', background: '#0F0F1A',
              borderRadius: 12, padding: '14px 18px',
              border: '1px solid #2A2A45',
            }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#8B5CF6' }}>{v}</div>
              <div style={{ fontSize: 10, color: '#6B6585' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FILTRES */}
      <div style={{
        background: '#16162A', border: '1px solid #2A2A45',
        borderRadius: 16, padding: 20, marginBottom: 24,
        display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center',
      }}>
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Nom, ville ou code postal..."
          style={{
            flex: 1, minWidth: 200, padding: '10px 14px', borderRadius: 12,
            background: '#1A1A30', border: '1px solid #2A2A45',
            color: '#F5F3FF', fontSize: 13, outline: 'none',
          }}
        />
        <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
          {METIERS.map(m => (
            <button key={m} onClick={() => setMetier(m)} style={{
              padding: '7px 13px', borderRadius: 10,
              border: `1px solid ${metier === m ? '#7C3AED' : '#2A2A45'}`,
              background: metier === m ? 'rgba(124,58,237,0.2)' : 'none',
              color: metier === m ? '#8B5CF6' : '#6B6585',
              fontSize: 12,
            }}>{m}</button>
          ))}
        </div>
      </div>

      {/* GRILLE */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {filtered.map(a => <ArtisanCard key={a.id} artisan={a} />)}
      </div>

      {/* CTA PRO */}
      <div style={{
        marginTop: 48, padding: '36px 40px', borderRadius: 20,
        background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.35)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
      }}>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#F5F3FF', marginBottom: 8 }}>
            Vous êtes artisan ?
          </h3>
          <p style={{ fontSize: 14, color: '#A89FC0' }}>
            Abonnement Pro dès <strong style={{ color: '#8B5CF6' }}>49€/mois</strong> · Profil mis en avant · Leads qualifiés · Devis simplifié
          </p>
        </div>
        <button style={{
          padding: '13px 28px', borderRadius: 12,
          background: '#7C3AED', border: 'none',
          color: '#fff', fontSize: 15, fontWeight: 500, whiteSpace: 'nowrap',
        }}>
          Rejoindre MoonBTP Pro →
        </button>
      </div>
    </div>
  )
}
