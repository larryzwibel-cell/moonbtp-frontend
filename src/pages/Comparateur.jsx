import { useState, useMemo } from 'react'
import { PRODUCTS, CATEGORIES, BRANDS } from '../data/products'

function ProductCard({ product, selectedBrands }) {
  const allPrices = Object.entries(product.prices)
  const filtered = selectedBrands.length > 0
    ? allPrices.filter(([b]) => selectedBrands.includes(b))
    : allPrices
  if (filtered.length === 0) return null

  const sorted = [...filtered].sort((a, b) => a[1] - b[1])
  const best = sorted[0]
  const worst = sorted[sorted.length - 1]
  const saving = worst[1] - best[1]
  const savingPct = Math.round((saving / worst[1]) * 100)

  return (
    <div style={{
      background: '#16162A', border: '1px solid #2A2A45',
      borderRadius: 16, padding: 20, position: 'relative',
    }}>
      {product.popular && (
        <span style={{
          position: 'absolute', top: 12, right: 12,
          background: 'rgba(124,58,237,0.15)', color: '#8B5CF6',
          border: '1px solid rgba(124,58,237,0.35)',
          fontSize: 9, fontWeight: 700, padding: '2px 8px',
          borderRadius: 20, letterSpacing: '0.5px',
        }}>POPULAIRE</span>
      )}

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12, background: '#1A1A30',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22, flexShrink: 0,
        }}>{product.img}</div>
        <div>
          <div style={{ fontWeight: 500, fontSize: 14, color: '#F5F3FF', lineHeight: 1.3 }}>{product.name}</div>
          <div style={{ fontSize: 11, color: '#6B6585', marginTop: 3 }}>{product.cat} · par {product.unit}</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {sorted.map(([brand, price], i) => (
          <div key={brand} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '8px 11px', borderRadius: 9,
            background: i === 0 ? 'rgba(124,58,237,0.12)' : '#1A1A30',
            border: i === 0 ? '1px solid rgba(124,58,237,0.35)' : '1px solid transparent',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              {i === 0 && <span style={{ color: '#10B981', fontSize: 12 }}>✓</span>}
              <span style={{ fontSize: 12, color: i === 0 ? '#F5F3FF' : '#A89FC0', fontWeight: i === 0 ? 500 : 400 }}>
                {brand}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: i === 0 ? '#F5F3FF' : '#A89FC0' }}>
                {price.toFixed(2)} €
              </span>
              {i === 0 && sorted.length > 1 && (
                <span style={{
                  fontSize: 10, color: '#10B981',
                  background: 'rgba(16,185,129,0.12)',
                  padding: '1px 6px', borderRadius: 10,
                }}>-{savingPct}%</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {saving > 0.01 && (
        <div style={{
          marginTop: 10, padding: '7px 11px',
          background: 'rgba(16,185,129,0.08)', borderRadius: 9,
          border: '1px solid rgba(16,185,129,0.2)',
          fontSize: 12, color: '#10B981',
        }}>
          Économie potentielle : <strong>{saving.toFixed(2)} €</strong> par {product.unit}
        </div>
      )}

      <a
        href={`https://www.leroymerlin.fr/recherche?q=${encodeURIComponent(product.name)}`}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{
          display: 'block', marginTop: 12, width: '100%', padding: '9px 0',
          borderRadius: 10, background: '#7C3AED',
          color: '#fff', fontSize: 13, fontWeight: 500,
          textAlign: 'center', textDecoration: 'none',
        }}
      >
        Voir la meilleure offre →
      </a>
    </div>
  )
}

export default function Comparateur() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('Tous')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [sortBy, setSortBy] = useState('best')

  const toggleBrand = (b) =>
    setSelectedBrands(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b])

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter(p => {
      const ms = p.name.toLowerCase().includes(search.toLowerCase())
      const mc = cat === 'Tous' || p.cat === cat
      const mb = selectedBrands.length === 0 || selectedBrands.some(b => p.prices[b] !== undefined)
      return ms && mc && mb
    })
    if (sortBy === 'best') list = list.sort((a, b) => Math.min(...Object.values(a.prices)) - Math.min(...Object.values(b.prices)))
    if (sortBy === 'saving') list = list.sort((a, b) => {
      const sa = Math.max(...Object.values(a.prices)) - Math.min(...Object.values(a.prices))
      const sb = Math.max(...Object.values(b.prices)) - Math.min(...Object.values(b.prices))
      return sb - sa
    })
    if (sortBy === 'popular') list = list.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
    return list
  }, [search, cat, selectedBrands, sortBy])

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 24px 80px' }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 600, color: '#F5F3FF', marginBottom: 8 }}>
          Comparateur de matériaux BTP
        </h1>
        <p style={{ fontSize: 14, color: '#A89FC0' }}>
          Comparez les prix en temps réel sur 4 grandes enseignes. L'offre la moins chère est toujours mise en avant.
        </p>
      </div>

      {/* FILTRES */}
      <div style={{
        background: '#16162A', border: '1px solid #2A2A45',
        borderRadius: 20, padding: 24, marginBottom: 24,
      }}>
        {/* Search + sort */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 240, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: '#6B6585' }}>🔍</span>
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher un matériau..."
              style={{
                width: '100%', padding: '11px 14px 11px 42px', borderRadius: 12,
                background: '#1A1A30', border: '1px solid #2A2A45',
                color: '#F5F3FF', fontSize: 14, outline: 'none',
              }}
            />
          </div>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{
            padding: '11px 16px', borderRadius: 12,
            background: '#1A1A30', border: '1px solid #2A2A45',
            color: '#A89FC0', fontSize: 13,
          }}>
            <option value="best">Prix croissant</option>
            <option value="saving">Économies max</option>
            <option value="popular">Populaires</option>
          </select>
        </div>

        {/* Catégories */}
        <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 16 }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{
              padding: '5px 13px', borderRadius: 20,
              border: `1px solid ${cat === c ? '#7C3AED' : '#2A2A45'}`,
              background: cat === c ? 'rgba(124,58,237,0.2)' : 'none',
              color: cat === c ? '#8B5CF6' : '#6B6585',
              fontSize: 12, fontWeight: cat === c ? 500 : 400,
            }}>{c}</button>
          ))}
        </div>

        {/* Enseignes */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#6B6585' }}>Enseignes :</span>
          {Object.entries(BRANDS).map(([brand, b]) => (
            <button key={brand} onClick={() => toggleBrand(brand)} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '4px 12px', borderRadius: 20,
              border: `1px solid ${selectedBrands.includes(brand) ? b.color : '#2A2A45'}`,
              background: selectedBrands.includes(brand) ? `${b.color}20` : 'none',
              color: selectedBrands.includes(brand) ? b.color : '#6B6585',
              fontSize: 12,
            }}>
              <span style={{
                width: 16, height: 16, borderRadius: 4, background: b.color,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 8, fontWeight: 700, color: '#fff',
              }}>{b.logo}</span>
              {brand}
            </button>
          ))}
          {selectedBrands.length > 0 && (
            <button onClick={() => setSelectedBrands([])} style={{
              background: 'none', border: 'none', color: '#6B6585',
              fontSize: 11, textDecoration: 'underline',
            }}>Réinitialiser</button>
          )}
        </div>
      </div>

      {/* Résultats */}
      <div style={{ marginBottom: 20, color: '#6B6585', fontSize: 13 }}>
        <span style={{ color: '#F5F3FF', fontWeight: 500 }}>{filtered.length}</span> produits trouvés
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} selectedBrands={selectedBrands} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px 0', color: '#6B6585' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
          <p>Aucun produit trouvé pour "{search}"</p>
        </div>
      )}

      {/* Disclaimer affiliation */}
      <p style={{ marginTop: 40, fontSize: 11, color: '#6B6585', textAlign: 'center' }}>
        MoonBTP peut percevoir une commission sur les achats effectués via nos liens (programme d'affiliation).
        Les prix affichés sont indicatifs et peuvent varier. Consultez le site de l'enseigne pour le prix exact.
      </p>
    </div>
  )
}
