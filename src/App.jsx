import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Comparateur from './pages/Comparateur'
import Artisans from './pages/Artisans'
import { BlogList, BlogArticle } from './pages/Blog'
import CGU from './pages/CGU'
import MentionsLegales from './pages/MentionsLegales'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comparateur" element={<Comparateur />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
