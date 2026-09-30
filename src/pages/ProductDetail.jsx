import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { PageHero } from '../components/Chrome'
import { SectionHead, Reveal, WhatsAppIcon } from '../components/ui'
import ProductCard from '../components/ProductCard'
import { Cta } from '../sections/HomeSections'
import { products, company } from '../data/site'
import { useQuote } from '../context/QuoteContext'

export default function ProductDetail() {
  const { slug } = useParams()
  const p = products.find((x) => x.slug === slug)
  const [img, setImg] = useState(0)
  const [tab, setTab] = useState('overview')
  const { open } = useQuote()
  if (!p) return <Navigate to="/products" replace />

  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3)
  const current = p.gallery[img] || p.image
  const specs = [
    ['Category', p.category],
    ['Size range', p.sizes],
    ['Pressure rating', p.pressure],
    ['Service', 'Standard & sour service on request'],
    ['Testing', 'Hydrostatic test & dimensional inspection'],
    ['Documentation', 'Material test certificate & test report'],
  ]

  return (
    <>
      <PageHero title={p.name} image={p.gallery[1] || '/images/product-banner.jpg'} crumb={<><Link to="/products">Products</Link> <span>/</span> {p.name}</>} />
      <section className="section" key={slug}>
        <div className="container pd-grid">
          <Reveal>
            <div className="pd-main-img">
              <AnimatePresence mode="wait">
                <motion.img key={current} src={current} alt={p.name} className={current.endsWith('.png') ? 'contain' : ''}
                  initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} />
              </AnimatePresence>
            </div>
            {p.gallery.length > 1 && (
              <div className="pd-thumbs">
                {p.gallery.map((g, i) => (
                  <button key={g} className={`pd-thumb ${i === img ? 'active' : ''}`} onClick={() => setImg(i)} aria-label={`Image ${i + 1}`}>
                    <img src={g} alt="" />
                  </button>
                ))}
              </div>
            )}
          </Reveal>
          <Reveal delay={0.1} className="pd-info">
            <div className="eyebrow">{p.category}</div>
            <h2>{p.name}</h2>
            <p className="lead">{p.summary}</p>
            <div className="tabs" role="tablist">
              {['overview', 'specifications'].map((t) => (
                <button key={t} role="tab" aria-selected={tab === t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)} style={{ textTransform: 'capitalize' }}>
                  {t}
                  {tab === t && <motion.span layoutId="tab-u" className="tab-underline" />}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                {tab === 'overview' ? (
                  <div style={{ marginTop: 24 }}>
                    <p style={{ color: 'var(--muted)', marginBottom: 24 }}>{p.description}</p>
                    <ul className="feature-list">
                      {p.features.map((f) => <li key={f}><CheckCircle2 size={18} /> {f}</li>)}
                    </ul>
                  </div>
                ) : (
                  <table className="spec-table">
                    <tbody>{specs.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody>
                  </table>
                )}
              </motion.div>
            </AnimatePresence>
            <div className="pd-actions">
              <button className="btn btn-primary" onClick={() => open(p.name)}>Request a Quote <ArrowRight size={18} /></button>
              <a className="btn btn-outline" href={`https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(`Hello NMT, I'm interested in ${p.name}.`)}`} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section section-grey">
          <div className="container">
            <SectionHead eyebrow="Related" title="You may also" highlight="need" />
            <div className="product-grid">
              {related.map((r, i) => <ProductCard key={r.slug} p={r} index={i} />)}
            </div>
          </div>
        </section>
      )}
      <Cta />
    </>
  )
}
