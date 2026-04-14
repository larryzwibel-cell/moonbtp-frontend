import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SUGGESTIONS = [
  "Parpaing 20x20x50", "Plaque BA13", "Laine de verre 100mm",
  "Carrelage 60x60", "Parquet chêne", "Fenêtre PVC", "Ciment 35kg",
  "Câble électrique 2.5mm²", "Peinture blanc mat", "Chauffe-eau 200L"
]

const STATS = [
  { value: '1 200+', label: 'Matériaux comparés' },
  { value: '4', label: 'Grandes enseignes' },
  { value: '15 %', label: 'Économie moyenne' },
  { value: '100%', label: 'Gratuit' },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '🔍', title: 'Recherchez', desc: "Tapez le nom d'un matériau — parpaing, isolation, carrelage..." },
  { step: '02', icon: '⚖️', title: 'Comparez', desc: 'Voyez en un coup d\'œil les prix sur 4 enseignes côte à côte.' },
  { step: '03', icon: '💰', title: 'Économisez', desc: 'Cliquez sur l\'offre la moins chère et économisez jusqu\'à 30%.' },
]

const POPULAR = [
  { name: "Parpaing", icon: "🧱", saving: "15%", query: "Parpaing" },
  { name: "BA13", icon: "📋", saving: "12%", query: "BA13" },
  { name: "Isolation", icon: "🌡️", saving: "20%", query: "Laine de verre" },
  { name: "Carrelage", icon: "⬜", saving: "18%", query: "Carrelage" },
  { name: "Parquet", icon: "🪵", saving: "22%", query: "Parquet" },
  { name: "Fenêtre PVC", icon: "🪟", saving: "19%", query: "Fenêtre" },
  { name: "Câble élec", icon: "⚡", saving: "25%", query: "Câble" },
  { name: "Peinture", icon: "🪣", saving: "17%", query: "Peinture" },
]

export default function Home() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [budget, setBudget] = useState(10000)
  const [showSuggestions, setShowSuggestions] = useState(false)

  const filteredSuggestions = SUGGESTIONS.filter(s =>
    s.toLowerCase().includes(search.toLowerCase()) && search.length > 0
  )

  const handleSearch = (query) => {
    const q = query || search
    if (q.trim()) navigate(`/comparateur?q=${encodeURIComponent(q.trim())}`)
  }

  const handleKey = (e) => { if (e.key === 'Enter') handleSearch() }

  const saving = Math.round(budget * 0.15)
  const savingMin = Math.round(budget * 0.10)
  const savingMax = Math.round(budget * 0.30)

  return (
    <>
      <section style={{padding:'70px 24px 60px',textAlign:'center',background:'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.25) 0%, transparent 70%)'}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'5px 14px',background:'rgba(124,58,237,0.15)',border:'1px solid rgba(124,58,237,0.4)',borderRadius:20,marginBottom:24}}>
          <span style={{width:7,height:7,borderRadius:'50%',background:'#10B981',display:'inline-block'}}/>
          <span style={{fontSize:12,color:'#8B5CF6',fontWeight:500}}>Site en ligne · Bêta publique</span>
        </div>
        <h1 style={{fontSize:'clamp(32px,5vw,56px)',fontWeight:700,lineHeight:1.1,margin:'0 0 16px',color:'#F5F3FF'}}>
          Comparez les prix BTP<br/>
          <span style={{color:'#8B5CF6'}}>et économisez jusqu'à 30%</span>
        </h1>
        <p style={{fontSize:17,color:'#A89FC0',maxWidth:500,margin:'0 auto 40px',lineHeight:1.6}}>
          Leroy Merlin · Castorama · Brico Dépôt · Point P<br/>
          1 200+ matériaux comparés en temps réel
        </p>

        <div style={{maxWidth:640,margin:'0 auto 16px',position:'relative'}}>
          <div style={{display:'flex',alignItems:'center',background:'#16162A',border:'2px solid #7C3AED',borderRadius:16,padding:'6px 6px 6px 20px',boxShadow:'0 0 40px rgba(124,58,237,0.2)'}}>
            <span style={{fontSize:20,marginRight:12,color:'#6B6585'}}>🔍</span>
            <input
              value={search}
              onChange={e=>{setSearch(e.target.value);setShowSuggestions(true)}}
              onKeyDown={handleKey}
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setTimeout(()=>setShowSuggestions(false),150)}
              placeholder="Rechercher un matériau... ex: parpaing, isolation, carrelage"
              style={{flex:1,background:'none',border:'none',color:'#F5F3FF',fontSize:16,outline:'none',padding:'8px 0'}}
            />
            <button onClick={()=>handleSearch()} style={{padding:'12px 24px',borderRadius:12,background:'#7C3AED',border:'none',color:'#fff',fontSize:15,fontWeight:600,whiteSpace:'nowrap',flexShrink:0}}>
              Comparer →
            </button>
          </div>
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div style={{position:'absolute',top:'100%',left:0,right:0,background:'#16162A',border:'1px solid #2A2A45',borderRadius:12,marginTop:8,zIndex:100,overflow:'hidden'}}>
              {filteredSuggestions.map(s=>(
                <div key={s} onMouseDown={()=>handleSearch(s)}
                  style={{padding:'12px 20px',cursor:'pointer',color:'#A89FC0',fontSize:14,textAlign:'left',borderBottom:'1px solid #2A2A45'}}
                  onMouseEnter={e=>e.target.style.background='#1A1A30'}
                  onMouseLeave={e=>e.target.style.background='none'}>
                  🔍 {s}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap',marginBottom:48}}>
          <span style={{fontSize:12,color:'#6B6585',alignSelf:'center'}}>Populaires :</span>
          {['Parpaing','BA13','Isolation','Carrelage','Parquet','Fenêtre PVC'].map(t=>(
            <button key={t} onClick={()=>handleSearch(t)} style={{padding:'4px 12px',borderRadius:20,background:'rgba(124,58,237,0.1)',border:'1px solid rgba(124,58,237,0.25)',color:'#8B5CF6',fontSize:12,cursor:'pointer'}}>
              {t}
            </button>
          ))}
        </div>

        <div style={{display:'flex',gap:40,justifyContent:'center',flexWrap:'wrap'}}>
          {STATS.map(s=>(
            <div key={s.label} style={{textAlign:'center'}}>
              <div style={{fontSize:26,fontWeight:700,color:'#F5F3FF'}}>{s.value}</div>
              <div style={{fontSize:12,color:'#6B6585'}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'20px 24px 40px',textAlign:'center'}}>
        <p style={{fontSize:12,color:'#6B6585',marginBottom:16}}>Prix comparés en temps réel chez</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          {[{name:'Leroy Merlin',color:'#009245'},{name:'Brico Dépôt',color:'#E3001B'},{name:'Castorama',color:'#0066A4'},{name:'Point P',color:'#F47920'}].map(b=>(
            <span key={b.name} style={{padding:'6px 16px',borderRadius:10,background:`${b.color}12`,border:`1px solid ${b.color}30`,color:b.color,fontSize:13,fontWeight:600}}>{b.name}</span>
          ))}
        </div>
      </section>

      <section style={{padding:'60px 24px',maxWidth:1100,margin:'0 auto'}}>
        <h2 style={{textAlign:'center',fontSize:28,fontWeight:600,marginBottom:8,color:'#F5F3FF'}}>Comment ça marche ?</h2>
        <p style={{textAlign:'center',color:'#A89FC0',marginBottom:48,fontSize:15}}>3 étapes pour trouver le meilleur prix</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))',gap:20}}>
          {HOW_IT_WORKS.map(step=>(
            <div key={step.step} style={{background:'#16162A',border:'1px solid #2A2A45',borderRadius:20,padding:'32px 24px',textAlign:'center',position:'relative'}}>
              <div style={{width:48,height:48,borderRadius:14,background:'rgba(124,58,237,0.15)',border:'1px solid rgba(124,58,237,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,margin:'0 auto 16px'}}>{step.icon}</div>
              <div style={{position:'absolute',top:20,right:20,fontSize:11,fontWeight:700,color:'rgba(124,58,237,0.4)',letterSpacing:1}}>{step.step}</div>
              <h3 style={{fontSize:18,fontWeight:600,color:'#F5F3FF',marginBottom:10}}>{step.title}</h3>
              <p style={{fontSize:13,color:'#A89FC0',lineHeight:1.6}}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'0 24px 60px',maxWidth:1100,margin:'0 auto'}}>
        <div style={{background:'#16162A',border:'1px solid #2A2A45',borderRadius:24,padding:'40px'}}>
          <h2 style={{fontSize:24,fontWeight:600,color:'#F5F3FF',marginBottom:8,textAlign:'center'}}>💰 Calculez vos économies</h2>
          <p style={{textAlign:'center',color:'#A89FC0',fontSize:14,marginBottom:36}}>Estimez combien vous pouvez économiser sur votre chantier</p>
          <div style={{maxWidth:600,margin:'0 auto'}}>
            <div style={{marginBottom:32}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:12}}>
                <label style={{fontSize:14,color:'#A89FC0'}}>Budget matériaux estimé</label>
                <span style={{fontSize:18,fontWeight:700,color:'#F5F3FF'}}>{budget.toLocaleString('fr-FR')} €</span>
              </div>
              <input type="range" min="1000" max="100000" step="1000" value={budget}
                onChange={e=>setBudget(Number(e.target.value))}
                style={{width:'100%',accentColor:'#7C3AED',height:6}}/>
              <div style={{display:'flex',justifyContent:'space-between',marginTop:6}}>
                <span style={{fontSize:11,color:'#6B6585'}}>1 000 €</span>
                <span style={{fontSize:11,color:'#6B6585'}}>100 000 €</span>
              </div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:12,marginBottom:28}}>
              <div style={{background:'#1A1A30',borderRadius:14,padding:'20px 16px',textAlign:'center',border:'1px solid #2A2A45'}}>
                <div style={{fontSize:11,color:'#6B6585',marginBottom:6}}>Économie min</div>
                <div style={{fontSize:22,fontWeight:700,color:'#10B981'}}>{savingMin.toLocaleString('fr-FR')} €</div>
                <div style={{fontSize:10,color:'#6B6585',marginTop:4}}>10% du budget</div>
              </div>
              <div style={{background:'rgba(124,58,237,0.12)',borderRadius:14,padding:'20px 16px',textAlign:'center',border:'1px solid rgba(124,58,237,0.35)'}}>
                <div style={{fontSize:11,color:'#8B5CF6',marginBottom:6}}>Économie moyenne</div>
                <div style={{fontSize:26,fontWeight:700,color:'#F5F3FF'}}>{saving.toLocaleString('fr-FR')} €</div>
                <div style={{fontSize:10,color:'#8B5CF6',marginTop:4}}>15% du budget</div>
              </div>
              <div style={{background:'#1A1A30',borderRadius:14,padding:'20px 16px',textAlign:'center',border:'1px solid #2A2A45'}}>
                <div style={{fontSize:11,color:'#6B6585',marginBottom:6}}>Économie max</div>
                <div style={{fontSize:22,fontWeight:700,color:'#10B981'}}>{savingMax.toLocaleString('fr-FR')} €</div>
                <div style={{fontSize:10,color:'#6B6585',marginTop:4}}>30% du budget</div>
              </div>
            </div>
            <Link to="/comparateur" style={{display:'block',textAlign:'center',padding:'14px 0',borderRadius:12,background:'#7C3AED',color:'#fff',fontSize:15,fontWeight:600,textDecoration:'none'}}>
              Commencer à économiser →
            </Link>
          </div>
        </div>
      </section>

      <section style={{padding:'0 24px 60px',maxWidth:1100,margin:'0 auto'}}>
        <h2 style={{fontSize:24,fontWeight:600,color:'#F5F3FF',marginBottom:8,textAlign:'center'}}>Matériaux les plus comparés</h2>
        <p style={{textAlign:'center',color:'#A89FC0',fontSize:14,marginBottom:32}}>Cliquez pour comparer directement</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(130px, 1fr))',gap:12}}>
          {POPULAR.map(p=>(
            <button key={p.name} onClick={()=>handleSearch(p.query)}
              style={{background:'#16162A',border:'1px solid #2A2A45',borderRadius:16,padding:'20px 12px',textAlign:'center',cursor:'pointer'}}
              onMouseEnter={e=>e.currentTarget.style.borderColor='#7C3AED'}
              onMouseLeave={e=>e.currentTarget.style.borderColor='#2A2A45'}>
              <div style={{fontSize:28,marginBottom:8}}>{p.icon}</div>
              <div style={{fontSize:13,fontWeight:500,color:'#F5F3FF',marginBottom:4}}>{p.name}</div>
              <div style={{fontSize:11,color:'#10B981'}}>jusqu'à -{p.saving}</div>
            </button>
          ))}
        </div>
      </section>

      <section style={{padding:'0 24px 80px',maxWidth:1100,margin:'0 auto'}}>
        <div style={{padding:'48px 40px',borderRadius:24,textAlign:'center',background:'rgba(124,58,237,0.1)',border:'1px solid rgba(124,58,237,0.35)'}}>
          <h2 style={{fontSize:28,fontWeight:600,color:'#F5F3FF',marginBottom:12}}>Prêt à économiser sur votre chantier ?</h2>
          <p style={{fontSize:15,color:'#A89FC0',marginBottom:28}}>Rejoignez les professionnels BTP qui comparent avant d'acheter</p>
          <Link to="/comparateur" style={{display:'inline-block',padding:'14px 36px',borderRadius:12,background:'#7C3AED',color:'#fff',fontSize:16,fontWeight:600,textDecoration:'none'}}>
            Comparer les matériaux gratuitement →
          </Link>
        </div>
      </section>
    </>
  )
}
