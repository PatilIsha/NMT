import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { PageHero } from '../components/Chrome'
import { Reveal, SectionHead } from '../components/ui'
import ProductCard from '../components/ProductCard'
import { ProductFinder, Cta } from '../sections/HomeSections'
import { categories, products, moreProducts } from '../data/site'

export default function Products() {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const list = useMemo(() => {
    const term = q.trim().toLowerCase()
    return products.filter(
      (p) => (cat === 'All' || p.category === cat) && (!term || `${p.name} ${p.summary} ${p.category}`.toLowerCase().includes(term)),
    )
  }, [cat, q])

  return (
    <>
      <PageHero title="Products" image="/images/product-banner.jpg" text="Hammer unions, pup joints, swivel joints, steel hose assemblies, adapters and API 6A / 16A wellhead components." />
      <section className="section section-grey">
        <div className="container">
          <div className="products-toolbar">
            <div className="filter-bar">
              {categories.map((c) => (
                <button key={c} className={`filter-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>
                  {cat === c && <motion.span layoutId="filter-pill-page" className="filter-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                  {c}
                </button>
              ))}
            </div>
            <label className="search-box">
              <Search size={18} />
              <input placeholder="Search products…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search products" />
            </label>
          </div>
          <motion.div layout className="product-grid">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => <ProductCard key={p.slug} p={p} index={i} />)}
            </AnimatePresence>
          </motion.div>
          {list.length === 0 && <p style={{ textAlign: 'center', padding: 40, color: 'var(--muted)' }}>No products match “{q}”. Try a different term or contact us for a custom build.</p>}
        </div>
      </section>
      <ProductFinder />
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Also available" title="More from" highlight="NMT" />
          <Reveal className="more-products" style={{ '--line': '#e3e6ec' }}>
            {moreProducts.map((m) => <span key={m} style={{ background: 'var(--paper)' }}>◆ {m}</span>)}
          </Reveal>
        </div>
      </section>
      <Cta />
    </>
  )
}
