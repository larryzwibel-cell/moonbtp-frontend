import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ARTICLES from '../data/blog'

function ArticleCard({ article }) {
  return (
    <Link to={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: '#16162A', border: '1px solid #2A2A45',
        borderRadius: 16, padding: 24, cursor: 'pointer',
        transition: 'border-color 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.borderColor = '#7C3AED'}
        onMouseLeave={e => e.currentTarget.style.borderColor = '#2A2A45'}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: '#1A1A30', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 24, flexShrink: 0,
          }}>{article.img}</div>
          <div>
            <span style={{
              fontSize: 11, fontWeight: 600, color: '#8B5CF6',
              background: 'rgba(124,58,237,0.15)', padding: '2px 10px',
              borderRadius: 20, border: '1px solid rgba(124,58,237,0.3)',
            }}>{article.category}</span>
          </div>
        </div>
        <h2 style={{ fontSize: 16, fontWeight: 500, color: '#F5F3FF', lineHeight: 1.4, marginBottom: 10 }}>
          {article.title}
        </h2>
        <p style={{ fontSize: 13, color: '#A89FC0', lineHeight: 1.6, marginBottom: 16 }}>
          {article.intro.substring(0, 120)}...
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: '#6B6585' }}>{article.date} · {article.readTime} de lecture</span>
          <span style={{ fontSize: 12, color: '#8B5CF6' }}>Lire l'article →</span>
        </div>
      </div>
    </Link>
  )
}

function ArticleView({ article }) {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <Link to="/blog" style={{ fontSize: 13, color: '#8B5CF6', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32 }}>
        ← Retour au blog
      </Link>

      <div style={{ marginBottom: 32 }}>
        <span style={{
          fontSize: 11, fontWeight: 600, color: '#8B5CF6',
          background: 'rgba(124,58,237,0.15)', padding: '3px 12px',
          borderRadius: 20, border: '1px solid rgba(124,58,237,0.3)',
        }}>{article.category}</span>
        <h1 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 700, color: '#F5F3FF', lineHeight: 1.2, margin: '16px 0 12px' }}>
          {article.title}
        </h1>
        <div style={{ display: 'flex', gap: 16, color: '#6B6585', fontSize: 12 }}>
          <span>📅 {article.date}</span>
          <span>⏱ {article.readTime} de lecture</span>
        </div>
      </div>

      {/* INTRO */}
      <div style={{
        background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)',
        borderRadius: 16, padding: '20px 24px', marginBottom: 32,
        fontSize: 15, color: '#A89FC0', lineHeight: 1.7,
      }}>
        {article.intro}
      </div>

      {/* SECTIONS */}
      {article.sections.map((section, i) => (
        <div key={i} style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: '#F5F3FF', marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid #2A2A45' }}>
            {section.title}
          </h2>
          <p style={{ fontSize: 14, color: '#A89FC0', lineHeight: 1.8, marginBottom: section.table ? 16 : 0 }}>
            {section.content}
          </p>
          {section.table && (
            <div style={{ background: '#16162A', border: '1px solid #2A2A45', borderRadius: 12, overflow: 'hidden', marginTop: 16 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#1A1A30' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: '#6B6585' }}>Enseigne</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: 12, fontWeight: 600, color: '#6B6585' }}>Prix</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: '#6B6585' }}>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {section.table.map((row, j) => (
                    <tr key={j} style={{ borderTop: '1px solid #2A2A45', background: j === 0 ? 'rgba(16,185,129,0.05)' : 'none' }}>
                      <td style={{ padding: '12px 16px', fontSize: 13, color: '#F5F3FF', fontWeight: j === 0 ? 600 : 400 }}>
                        {j === 0 && <span style={{ color: '#10B981', marginRight: 6 }}>✓</span>}
                        {row.enseigne}
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: 14, fontWeight: 600, color: j === 0 ? '#10B981' : '#A89FC0' }}>
                        {row.prix}
                        {j === 0 && <div style={{ fontSize: 10, color: '#10B981' }}>Meilleur prix</div>}
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: 12, color: '#6B6585' }}>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}

      {/* CONCLUSION */}
      <div style={{
        background: '#16162A', border: '1px solid #2A2A45',
        borderRadius: 16, padding: '24px', marginBottom: 32,
      }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: '#F5F3FF', marginBottom: 10 }}>
          Notre conclusion
        </h3>
        <p style={{ fontSize: 14, color: '#A89FC0', lineHeight: 1.7 }}>{article.conclusion}</p>
      </div>

      {/* CTA */}
      <div style={{
        background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.35)',
        borderRadius: 20, padding: '32px', textAlign: 'center',
      }}>
        <h3 style={{ fontSize: 20, fontWeight: 600, color: '#F5F3FF', marginBottom: 12 }}>
          Prêt à économiser ?
        </h3>
        <p style={{ fontSize: 14, color: '#A89FC0', marginBottom: 20 }}>
          Comparez les prix en temps réel sur MoonBTP — gratuit et sans inscription
        </p>
        <Link to="/comparateur" style={{
          display: 'inline-block', padding: '13px 32px', borderRadius: 12,
          background: '#7C3AED', color: '#fff', fontSize: 15, fontWeight: 600,
          textDecoration: 'none',
        }}>
          {article.cta} →
        </Link>
      </div>

      {/* ARTICLES SUGGERES */}
      <div style={{ marginTop: 48 }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#F5F3FF', marginBottom: 20 }}>
          Articles similaires
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16 }}>
          {ARTICLES.filter(a => a.id !== article.id).map(a => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function BlogList() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 80px' }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#F5F3FF', marginBottom: 8 }}>
          Blog MoonBTP
        </h1>
        <p style={{ fontSize: 15, color: '#A89FC0' }}>
          Guides, comparatifs de prix et conseils pour vos achats de matériaux BTP
        </p>
      </div>

      {/* FEATURED */}
      <Link to={`/blog/${ARTICLES[0].slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: 24 }}>
        <div style={{
          background: '#16162A', border: '1px solid #2A2A45',
          borderRadius: 20, padding: 32, cursor: 'pointer',
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = '#7C3AED'}
          onMouseLeave={e => e.currentTarget.style.borderColor = '#2A2A45'}
        >
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{
              width: 80, height: 80, borderRadius: 16,
              background: '#1A1A30', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 40, flexShrink: 0,
            }}>{ARTICLES[0].img}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                <span style={{
                  fontSize: 11, fontWeight: 600, color: '#8B5CF6',
                  background: 'rgba(124,58,237,0.15)', padding: '2px 10px',
                  borderRadius: 20, border: '1px solid rgba(124,58,237,0.3)',
                }}>{ARTICLES[0].category}</span>
                <span style={{
                  fontSize: 11, fontWeight: 600, color: '#10B981',
                  background: 'rgba(16,185,129,0.1)', padding: '2px 10px',
                  borderRadius: 20, border: '1px solid rgba(16,185,129,0.3)',
                }}>À la une</span>
              </div>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: '#F5F3FF', lineHeight: 1.3, marginBottom: 10 }}>
                {ARTICLES[0].title}
              </h2>
              <p style={{ fontSize: 14, color: '#A89FC0', lineHeight: 1.6 }}>
                {ARTICLES[0].intro.substring(0, 180)}...
              </p>
              <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, color: '#6B6585' }}>{ARTICLES[0].date} · {ARTICLES[0].readTime} de lecture</span>
                <span style={{ fontSize: 13, color: '#8B5CF6' }}>Lire l'article →</span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {ARTICLES.slice(1).map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export function BlogArticle() {
  const { slug } = useParams()
  const article = ARTICLES.find(a => a.slug === slug)
  if (!article) return (
    <div style={{ textAlign: 'center', padding: '80px 24px', color: '#6B6585' }}>
      <div style={{ fontSize: 40, marginBottom: 16 }}>📄</div>
      <p>Article introuvable</p>
      <Link to="/blog" style={{ color: '#8B5CF6', marginTop: 16, display: 'inline-block' }}>← Retour au blog</Link>
    </div>
  )
  return <ArticleView article={article} />
}
