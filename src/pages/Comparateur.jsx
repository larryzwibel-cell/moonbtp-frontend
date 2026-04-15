import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BRANDS } from '../data/products'
import TOP20_PRODUCTS from '../data/top20'

const BRAND_URLS = {
  "Leroy Merlin": (name) => `https://www.leroymerlin.fr/recherche=${encodeURIComponent(name)}`,
  "Brico Dépôt":  (name) => `https://www.bricodepot.fr/search?q=${encodeURIComponent(name)}`,
  "Castorama":    (name) => `https://www.castorama.fr/search?q=${encodeURIComponent(name)}`,
  "Point P":      (name) => `https://www.pointp.fr/recherche?q=${encodeURIComponent(name)}`,
}

function getPrice(val) { return typeof val === 'object' ? val.price : val }

function getBestUrl(product) {
  const sorted = Object.entries(product.prices).sort((a,b) => getPrice(a[1]) - getPrice(b[1]))
  const best = sorted[0][0]
  return product.prices[best]?.url || BRAND_URLS[best]?.(product.name) || `https://www.google.com/search?q=${encodeURIComponent(product.name)}&tbm=shop`
}

function matchSearch(product, search) {
  if (!search.trim()) return true
  const terms = search.toLowerCase().split(' ').filter(t => t.length > 1)
  const searchable = [product.name.toLowerCase(), product.cat.toLowerCase(), ...(product.keywords || [])].join(' ')
  return terms.every(term => searchable.includes(term))
}

function ProductCard({ product, selectedBrands }) {
  const allPrices = Object.entries(product.prices).map(([b,v]) => [b, getPrice(v)])
  const filtered = selectedBrands.length > 0 ? allPrices.filter(([b]) => selectedBrands.includes(b)) : allPrices
  if (filtered.length === 0) return null
  const sorted = [...filtered].sort((a,b) => a[1]-b[1])
  const saving = sorted[sorted.length-1][1] - sorted[0][1]
  const savingPct = Math.round((saving/sorted[sorted.length-1][1])*100)
  return (
    <div style={{background:'#16162A',border:'1px solid #2A2A45',borderRadius:16,padding:20,position:'relative',display:'flex',flexDirection:'column'}}>
      {product.popular && <span style={{position:'absolute',top:12,right:12,background:'rgba(124,58,237,0.15)',color:'#8B5CF6',border:'1px solid rgba(124,58,237,0.35)',fontSize:9,fontWeight:700,padding:'2px 8px',borderRadius:20}}>POPULAIRE</span>}
      <div style={{display:'flex',alignItems:'flex-start',gap:12,marginBottom:16}}>
        <div style={{width:48,height:48,borderRadius:12,background:'#1A1A30',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,flexShrink:0}}>{product.img}</div>
        <div>
          <div style={{fontWeight:500,fontSize:14,color:'#F5F3FF',lineHeight:1.3}}>{product.name}</div>
          <div style={{fontSize:11,color:'#6B6585',marginTop:3}}>{product.cat} · par {product.unit}</div>
          {product.searchVolume && <div style={{fontSize:10,color:'#7C3AED',marginTop:3}}>🔍 {product.searchVolume}</div>}
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:6,flex:1}}>
        {sorted.map(([brand,price],i) => {
          const url = product.prices[brand]?.url || BRAND_URLS[brand]?.(product.name) || '#'
          return (
            <a key={brand} href={url} target="_blank" rel="noopener noreferrer sponsored"
              style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 11px',borderRadius:9,textDecoration:'none',background:i===0?'rgba(124,58,237,0.12)':'#1A1A30',border:i===0?'1px solid rgba(124,58,237,0.35)':'1px solid #2A2A45'}}>
              <div style={{display:'flex',alignItems:'center',gap:7}}>
                {i===0 && <span style={{color:'#10B981',fontSize:12}}>✓</span>}
                <span style={{fontSize:12,color:i===0?'#F5F3FF':'#A89FC0',fontWeight:i===0?500:400}}>{brand}</span>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:7}}>
                <span style={{fontSize:14,fontWeight:600,color:i===0?'#F5F3FF':'#A89FC0'}}>{price.toFixed(2)} €</span>
                {i===0 && sorted.length>1 && <span style={{fontSize:10,color:'#10B981',background:'rgba(16,185,129,0.12)',padding:'1px 6px',borderRadius:10}}>-{savingPct}%</span>}
                <span style={{fontSize:10,color:'#6B6585'}}>→</span>
              </div>
            </a>
          )
        })}
      </div>
      {saving > 0.01 && <div style={{marginTop:10,padding:'7px 11px',background:'rgba(16,185,129,0.08)',borderRadius:9,border:'1px solid rgba(16,185,129,0.2)',fontSize:12,color:'#10B981'}}>Économie potentielle : <strong>{saving.toFixed(2)} €</strong> par {product.unit}</div>}
      {product.tip && <div style={{marginTop:8,padding:'7px 11px',background:'rgba(124,58,237,0.06)',borderRadius:9,border:'1px solid rgba(124,58,237,0.15)',fontSize:11,color:'#A89FC0',lineHeight:1.5}}>💡 {product.tip}</div>}
      <a href={getBestUrl(product)} target="_blank" rel="noopener noreferrer sponsored"
        style={{display:'block',marginTop:12,padding:'10px 0',borderRadius:10,background:'#7C3AED',color:'#fff',fontSize:13,fontWeight:500,textAlign:'center',textDecoration:'none'}}>
        Voir la meilleure offre →
      </a>
      <p style={{fontSize:10,color:'#6B6585',textAlign:'center',marginTop:6}}>Lien partenaire · prix vérifié sur le site de l'enseigne</p>
    </div>
  )
}

export default function Comparateur() {
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('q') || '')
  const [cat, setCat] = useState('Tous')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [sortBy, setSortBy] = useState('popular')

  useEffect(() => { const q = searchParams.get('q'); if (q) setSearch(q) }, [searchParams])

  const toggleBrand = (b) => setSelectedBrands(prev => prev.includes(b) ? prev.filter(x=>x!==b) : [...prev,b])
  const cats = ['Tous',...new Set(TOP20_PRODUCTS.map(p=>p.cat))]

  const filtered = useMemo(() => {
    let list = TOP20_PRODUCTS.filter(p => matchSearch(p, search) && (cat==='Tous'||p.cat===cat) && (selectedBrands.length===0||selectedBrands.some(b=>p.prices[b]!==undefined)))
    if(sortBy==='best') list=list.sort((a,b)=>Math.min(...Object.values(a.prices).map(getPrice))-Math.min(...Object.values(b.prices).map(getPrice)))
    if(sortBy==='saving') list=list.sort((a,b)=>{
      const sa=Math.max(...Object.values(a.prices).map(getPrice))-Math.min(...Object.values(a.prices).map(getPrice))
      const sb=Math.max(...Object.values(b.prices).map(getPrice))-Math.min(...Object.values(b.prices).map(getPrice))
      return sb-sa
    })
    if(sortBy==='popular') list=list.sort((a,b)=>(b.popular?1:0)-(a.popular?1:0))
    return list
  },[search,cat,selectedBrands,sortBy])

  return (
    <div style={{maxWidth:1280,margin:'0 auto',padding:'40px 24px 80px'}}>
      <div style={{marginBottom:32}}>
        <h1 style={{fontSize:28,fontWeight:600,color:'#F5F3FF',marginBottom:8}}>Comparateur de matériaux BTP</h1>
        <p style={{fontSize:14,color:'#A89FC0'}}>Top 20 matériaux les plus recherchés — cliquez sur une enseigne pour voir le prix exact.</p>
      </div>
      <div style={{background:'#16162A',border:'1px solid #2A2A45',borderRadius:20,padding:24,marginBottom:24}}>
        <div style={{display:'flex',gap:12,marginBottom:18,flexWrap:'wrap'}}>
          <div style={{flex:1,minWidth:240,position:'relative'}}>
            <span style={{position:'absolute',left:14,top:'50%',transform:'translateY(-50%)',fontSize:16,color:'#6B6585'}}>🔍</span>
            <input value={search} onChange={e=>setSearch(e.target.value)}
              placeholder="Ex: plaque BA13, isolant, fenêtre PVC, parquet chêne..."
              style={{width:'100%',padding:'11px 14px 11px 42px',borderRadius:12,background:'#1A1A30',border:'1px solid #2A2A45',color:'#F5F3FF',fontSize:14,outline:'none'}}/>
          </div>
          <select value={sortBy} onChange={e=>setSortBy(e.target.value)}
            style={{padding:'11px 16px',borderRadius:12,background:'#1A1A30',border:'1px solid #2A2A45',color:'#A89FC0',fontSize:13}}>
            <option value="popular">Populaires</option>
            <option value="best">Prix croissant</option>
            <option value="saving">Économies max</option>
          </select>
        </div>
        <div style={{display:'flex',gap:7,flexWrap:'wrap',marginBottom:16}}>
          {cats.map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:'5px 13px',borderRadius:20,border:`1px solid ${cat===c?'#7C3AED':'#2A2A45'}`,background:cat===c?'rgba(124,58,237,0.2)':'none',color:cat===c?'#8B5CF6':'#6B6585',fontSize:12}}>{c}</button>)}
        </div>
        <div style={{display:'flex',gap:8,flexWrap:'wrap',alignItems:'center'}}>
          <span style={{fontSize:12,color:'#6B6585'}}>Enseignes :</span>
          {Object.entries(BRANDS).map(([brand,b])=>(
            <button key={brand} onClick={()=>toggleBrand(brand)}
              style={{display:'flex',alignItems:'center',gap:6,padding:'4px 12px',borderRadius:20,border:`1px solid ${selectedBrands.includes(brand)?b.color:'#2A2A45'}`,background:selectedBrands.includes(brand)?`${b.color}20`:'none',color:selectedBrands.includes(brand)?b.color:'#6B6585',fontSize:12}}>
              <span style={{width:16,height:16,borderRadius:4,background:b.color,display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:8,fontWeight:700,color:'#fff'}}>{b.logo}</span>
              {brand}
            </button>
          ))}
          {selectedBrands.length>0 && <button onClick={()=>setSelectedBrands([])} style={{background:'none',border:'none',color:'#6B6585',fontSize:11,textDecoration:'underline'}}>Réinitialiser</button>}
        </div>
      </div>
      <div style={{marginBottom:20,color:'#6B6585',fontSize:13}}>
        <span style={{color:'#F5F3FF',fontWeight:500}}>{filtered.length}</span> produits trouvés
        {search && <span> pour "<span style={{color:'#8B5CF6'}}>{search}</span>"</span>}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',gap:16}}>
        {filtered.map(p=><ProductCard key={p.id} product={p} selectedBrands={selectedBrands}/>)}
      </div>
      {filtered.length===0 && (
        <div style={{textAlign:'center',padding:'80px 0',color:'#6B6585'}}>
          <div style={{fontSize:40,marginBottom:16}}>🔍</div>
          <p style={{marginBottom:8}}>Aucun résultat pour "<span style={{color:'#8B5CF6'}}>{search}</span>"</p>
          <p style={{fontSize:12,marginBottom:20}}>Essayez : parpaing, isolant, carrelage, fenêtre, parquet, câble...</p>
          <button onClick={()=>setSearch('')} style={{padding:'8px 20px',borderRadius:10,background:'#7C3AED',border:'none',color:'#fff',fontSize:13,cursor:'pointer'}}>Voir tous les matériaux</button>
        </div>
      )}
      <p style={{marginTop:40,fontSize:11,color:'#6B6585',textAlign:'center'}}>
        MoonBTP peut percevoir une commission sur les achats via nos liens (affiliation Awin). Prix indicatifs — vérifiez sur le site de l'enseigne.
      </p>
    </div>
  )
}
