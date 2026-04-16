import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import TOP20_PRODUCTS from '../data/top20'

function getPrice(val) { return typeof val === 'object' ? val.price : val }

function getBestPrice(product) {
  return Math.min(...Object.values(product.prices).map(getPrice))
}

function getBestBrand(product) {
  const sorted = Object.entries(product.prices).sort((a,b) => getPrice(a[1]) - getPrice(b[1]))
  return sorted[0][0]
}

function getWorstPrice(product) {
  return Math.max(...Object.values(product.prices).map(getPrice))
}

const BRAND_COLORS = {
  "Leroy Merlin": "#009245",
  "Brico Dépôt": "#E3001B",
  "Castorama": "#0066A4",
  "Point P": "#F47920",
}

export default function BudgetChantier() {
  const [items, setItems] = useState([
    { id: 1, productId: null, quantity: 1 }
  ])
  const [chantierName, setChantierName] = useState('')
  const [showResult, setShowResult] = useState(false)

  const addItem = () => {
    setItems(prev => [...prev, { id: Date.now(), productId: null, quantity: 1 }])
    setShowResult(false)
  }

  const removeItem = (id) => {
    if (items.length === 1) return
    setItems(prev => prev.filter(i => i.id !== id))
    setShowResult(false)
  }

  const updateItem = (id, field, value) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, [field]: value } : i))
    setShowResult(false)
  }

  const validItems = useMemo(() =>
    items.filter(i => i.productId && i.quantity > 0).map(i => {
      const product = TOP20_PRODUCTS.find(p => p.id === parseInt(i.productId))
      return { ...i, product }
    }).filter(i => i.product)
  , [items])

  const totalBest = useMemo(() =>
    validItems.reduce((sum, i) => sum + getBestPrice(i.product) * i.quantity, 0)
  , [validItems])

  const totalWorst = useMemo(() =>
    validItems.reduce((sum, i) => sum + getWorstPrice(i.product) * i.quantity, 0)
  , [validItems])

  const saving = totalWorst - totalBest
  const savingPct = totalWorst > 0 ? Math.round((saving / totalWorst) * 100) : 0

  const brandTotals = useMemo(() => {
    const totals = {}
    validItems.forEach(i => {
      const brand = getBestBrand(i.product)
      if (!totals[brand]) totals[brand] = { total: 0, items: [] }
      totals[brand].total += getBestPrice(i.product) * i.quantity
      totals[brand].items.push({ name: i.product.name, qty: i.quantity, price: getBestPrice(i.product) })
    })
    return totals
  }, [validItems])

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 80px' }}>

      {/* HEADER */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ fontSize: 32 }}>🏗️</div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: '#F5F3FF' }}>
            Budget chantier
          </h1>
        </div>
        <p style={{ fontSize: 14, color: '#A89FC0', lineHeight: 1.6 }}>
          Entrez vos matériaux et quantités — MoonBTP calcule automatiquement le budget optimal avec l'enseigne la moins chère pour chaque produit.
        </p>
      </div>

      {/* NOM DU CHANTIER */}
      <div style={{ marginBottom: 24 }}>
        <input
          value={chantierName}
          onChange={e => setChantierName(e.target.value)}
          placeholder="Nom du chantier (ex: Rénovation salle de bain)"
          style={{
            width: '100%', padding: '12px 16px', borderRadius: 12,
            background: '#16162A', border: '1px solid #2A2A45',
            color: '#F5F3FF', fontSize: 15, outline: 'none',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* LISTE MATERIAUX */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
        {items.map((item, idx) => {
          const product = TOP20_PRODUCTS.find(p => p.id === parseInt(item.productId))
          return (
            <div key={item.id} style={{
              background: '#16162A', border: '1px solid #2A2A45',
              borderRadius: 14, padding: '16px',
              display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'
            }}>
              <div style={{ fontSize: 13, color: '#6B6585', minWidth: 24, fontWeight: 600 }}>
                {idx + 1}
              </div>

              {/* SELECT PRODUIT */}
              <select
                value={item.productId || ''}
                onChange={e => updateItem(item.id, 'productId', e.target.value)}
                style={{
                  flex: 1, minWidth: 200, padding: '9px 12px', borderRadius: 10,
                  background: '#1A1A30', border: '1px solid #2A2A45',
                  color: item.productId ? '#F5F3FF' : '#6B6585', fontSize: 13,
                }}
              >
                <option value="">-- Choisir un matériau --</option>
                {TOP20_PRODUCTS.map(p => (
                  <option key={p.id} value={p.id}>{p.img} {p.name}</option>
                ))}
              </select>

              {/* QUANTITE */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button
                  onClick={() => updateItem(item.id, 'quantity', Math.max(1, item.quantity - 1))}
                  style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: '#1A1A30', border: '1px solid #2A2A45',
                    color: '#F5F3FF', fontSize: 16, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >−</button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={e => updateItem(item.id, 'quantity', Math.max(1, parseInt(e.target.value) || 1))}
                  style={{
                    width: 70, padding: '7px 10px', borderRadius: 8, textAlign: 'center',
                    background: '#1A1A30', border: '1px solid #2A2A45',
                    color: '#F5F3FF', fontSize: 14,
                  }}
                />
                <button
                  onClick={() => updateItem(item.id, 'quantity', item.quantity + 1)}
                  style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: '#1A1A30', border: '1px solid #2A2A45',
                    color: '#F5F3FF', fontSize: 16, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >+</button>
                {product && (
                  <span style={{ fontSize: 11, color: '#6B6585' }}>/ {product.unit}</span>
                )}
              </div>

              {/* PRIX BEST */}
              {product && (
                <div style={{ textAlign: 'right', minWidth: 100 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#10B981' }}>
                    {(getBestPrice(product) * item.quantity).toFixed(2)} €
                  </div>
                  <div style={{ fontSize: 10, color: '#6B6585' }}>
                    chez {getBestBrand(product)}
                  </div>
                </div>
              )}

              {/* SUPPRIMER */}
              <button
                onClick={() => removeItem(item.id)}
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                  color: '#EF4444', fontSize: 14, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}
              >✕</button>
            </div>
          )
        })}
      </div>

      {/* BOUTONS */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
        <button onClick={addItem} style={{
          padding: '10px 20px', borderRadius: 10,
          background: '#1A1A30', border: '1px solid #2A2A45',
          color: '#A89FC0', fontSize: 13, cursor: 'pointer',
        }}>
          + Ajouter un matériau
        </button>
        {validItems.length > 0 && (
          <button onClick={() => setShowResult(true)} style={{
            padding: '10px 24px', borderRadius: 10,
            background: '#7C3AED', border: 'none',
            color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}>
            Calculer mon budget →
          </button>
        )}
      </div>

      {/* RESULTAT */}
      {showResult && validItems.length > 0 && (
        <div>
          {/* TOTAL HERO */}
          <div style={{
            background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.35)',
            borderRadius: 20, padding: '32px', marginBottom: 20, textAlign: 'center'
          }}>
            {chantierName && (
              <div style={{ fontSize: 13, color: '#8B5CF6', marginBottom: 8, fontWeight: 500 }}>
                {chantierName}
              </div>
            )}
            <div style={{ fontSize: 13, color: '#A89FC0', marginBottom: 8 }}>Budget optimal MoonBTP</div>
            <div style={{ fontSize: 48, fontWeight: 700, color: '#F5F3FF', marginBottom: 8 }}>
              {totalBest.toFixed(2)} €
            </div>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, color: '#6B6585' }}>Sans MoonBTP</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: '#A89FC0', textDecoration: 'line-through' }}>
                  {totalWorst.toFixed(2)} €
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: '#10B981' }}>Votre économie</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#10B981' }}>
                  {saving.toFixed(2)} € ({savingPct}%)
                </div>
              </div>
            </div>
          </div>

          {/* DETAIL PAR ENSEIGNE */}
          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#F5F3FF', marginBottom: 16 }}>
            Où acheter chaque produit
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14, marginBottom: 24 }}>
            {Object.entries(brandTotals).map(([brand, data]) => (
              <div key={brand} style={{
                background: '#16162A', border: `1px solid ${BRAND_COLORS[brand]}40`,
                borderRadius: 14, padding: 18,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 6,
                    background: BRAND_COLORS[brand],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, fontWeight: 700, color: '#fff'
                  }}>
                    {brand.substring(0,2).toUpperCase()}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#F5F3FF' }}>{brand}</span>
                  <span style={{ marginLeft: 'auto', fontSize: 15, fontWeight: 700, color: BRAND_COLORS[brand] }}>
                    {data.total.toFixed(2)} €
                  </span>
                </div>
                {data.items.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '5px 0', borderTop: '1px solid #2A2A45',
                    fontSize: 12, color: '#A89FC0'
                  }}>
                    <span>{item.name} ×{item.qty}</span>
                    <span>{(item.price * item.qty).toFixed(2)} €</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* DETAIL COMPLET */}
          <div style={{ background: '#16162A', border: '1px solid #2A2A45', borderRadius: 16, overflow: 'hidden', marginBottom: 24 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#1A1A30' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, color: '#6B6585', fontWeight: 600 }}>Matériau</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: 12, color: '#6B6585', fontWeight: 600 }}>Qté</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: 12, color: '#6B6585', fontWeight: 600 }}>Meilleure enseigne</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right', fontSize: 12, color: '#6B6585', fontWeight: 600 }}>Prix unitaire</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right', fontSize: 12, color: '#6B6585', fontWeight: 600 }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {validItems.map((item, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #2A2A45' }}>
                    <td style={{ padding: '11px 16px', fontSize: 13, color: '#F5F3FF' }}>
                      {item.product.name}
                    </td>
                    <td style={{ padding: '11px 16px', textAlign: 'center', fontSize: 13, color: '#A89FC0' }}>
                      {item.quantity} {item.product.unit}
                    </td>
                    <td style={{ padding: '11px 16px', textAlign: 'center' }}>
                      <span style={{
                        fontSize: 11, padding: '2px 8px', borderRadius: 20,
                        background: `${BRAND_COLORS[getBestBrand(item.product)]}20`,
                        color: BRAND_COLORS[getBestBrand(item.product)],
                        border: `1px solid ${BRAND_COLORS[getBestBrand(item.product)]}40`,
                      }}>
                        {getBestBrand(item.product)}
                      </span>
                    </td>
                    <td style={{ padding: '11px 16px', textAlign: 'right', fontSize: 13, color: '#10B981', fontWeight: 500 }}>
                      {getBestPrice(item.product).toFixed(2)} €
                    </td>
                    <td style={{ padding: '11px 16px', textAlign: 'right', fontSize: 14, fontWeight: 700, color: '#F5F3FF' }}>
                      {(getBestPrice(item.product) * item.quantity).toFixed(2)} €
                    </td>
                  </tr>
                ))}
                <tr style={{ borderTop: '2px solid #7C3AED', background: 'rgba(124,58,237,0.08)' }}>
                  <td colSpan={4} style={{ padding: '14px 16px', fontSize: 14, fontWeight: 600, color: '#F5F3FF' }}>
                    TOTAL OPTIMAL
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'right', fontSize: 18, fontWeight: 700, color: '#7C3AED' }}>
                    {totalBest.toFixed(2)} €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ACTIONS */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                const text = `Budget chantier MoonBTP\n${chantierName ? chantierName + '\n' : ''}\nBudget optimal : ${totalBest.toFixed(2)} €\nÉconomie réalisée : ${saving.toFixed(2)} € (${savingPct}%)\n\nDétail :\n${validItems.map(i => `- ${i.product.name} ×${i.quantity} : ${(getBestPrice(i.product) * i.quantity).toFixed(2)} € chez ${getBestBrand(i.product)}`).join('\n')}\n\nCalculé sur moonbtp.fr`
                navigator.clipboard.writeText(text)
                alert('Budget copié dans le presse-papier !')
              }}
              style={{
                padding: '11px 20px', borderRadius: 10,
                background: '#1A1A30', border: '1px solid #2A2A45',
                color: '#A89FC0', fontSize: 13, cursor: 'pointer',
              }}
            >
              📋 Copier le devis
            </button>
            <button
              onClick={() => { setItems([{ id: 1, productId: null, quantity: 1 }]); setShowResult(false); setChantierName('') }}
              style={{
                padding: '11px 20px', borderRadius: 10,
                background: '#1A1A30', border: '1px solid #2A2A45',
                color: '#A89FC0', fontSize: 13, cursor: 'pointer',
              }}
            >
              🔄 Nouveau chantier
            </button>
            <Link to="/comparateur" style={{
              padding: '11px 20px', borderRadius: 10,
              background: '#7C3AED', color: '#fff',
              fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>
              Voir tous les matériaux →
            </Link>
          </div>
        </div>
      )}

      {validItems.length === 0 && items.some(i => i.productId) === false && (
        <div style={{
          textAlign: 'center', padding: '40px 24px',
          background: '#16162A', border: '1px solid #2A2A45',
          borderRadius: 16, color: '#6B6585'
        }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>🏗️</div>
          <p style={{ fontSize: 14 }}>Sélectionnez vos matériaux et quantités pour calculer votre budget optimal</p>
        </div>
      )}
    </div>
  )
}
