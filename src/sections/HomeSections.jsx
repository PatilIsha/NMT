import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle2, Plus, Phone } from 'lucide-react'
import {
  categories, products, services, processSteps, whyUs, certifications, clients, faqs, industries, industryGallery, company,
} from '../data/site'
import { Reveal, SectionHead, Icon, Gauge } from '../components/ui'
import ProductCard from '../components/ProductCard'
import { useQuote } from '../context/QuoteContext'

/** Mobile-only cue that a row scrolls sideways. */
export function SwipeHint() {
  return <div className="swipe-hint" aria-hidden="true">Swipe to explore <ArrowRight size={14} /></div>
}

/* ---------------- About preview ---------------- */
export function AboutPreview() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  return (
    <section className="section" ref={ref}>
      <div className="container about-grid">
        <Reveal className="about-visual" x={-40} y={0}>
          <div className="about-img-main"><img src="/images/stock/lathe.webp" alt="Precision machining lathe" loading="lazy" /></div>
          <motion.div className="about-img-float" style={{ y }}><img src="/images/pup-joint.jpg" alt="Pup joints in the NMT workshop" loading="lazy" /></motion.div>
          <div className="about-badge">
            <svg className="about-badge-ring" viewBox="0 0 150 150" aria-hidden="true">
              <defs><path id="circ" d="M75,75 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0" /></defs>
              <text><textPath href="#circ">• Quality • Precision • Reliability </textPath></text>
            </svg>
            <div><strong>60+</strong><small>Years</small></div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <div className="eyebrow">About NMT</div>
            <h2 className="heading">Six decades of <span>precision</span> for the oilfield</h2>
            <p className="lead">
              National Machine Tools (NMT Oil and Gas Services Pvt. Ltd.) manufactures high-pressure flow line products and wellhead components,
              and repairs, tests and refurbishes critical rig equipment — all from our facility at Chhatral GIDC, Gujarat.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about-points">
              {['Forging to final testing in-house', 'API 6A & 16A components', 'Sizes 1/2″ to 12″', '500 to 20,000 PSI range'].map((t) => (
                <div className="about-point" key={t}><CheckCircle2 size={20} /> {t}</div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/about" className="btn btn-primary">Discover our story <ArrowRight size={18} /></Link>
            <p className="about-quote">“We are committed to manufacture and deliver products that meet customer satisfaction by following international standard practices.”</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Products (filterable) ---------------- */
export function ProductShowcase({ limit = 6 }) {
  const [cat, setCat] = useState('All')
  const list = useMemo(() => (cat === 'All' ? products : products.filter((p) => p.category === cat)).slice(0, limit), [cat, limit])
  return (
    <section className="section section-grey">
      <div className="container">
        <SectionHead split eyebrow="Our Products" title="Built for" highlight="High Pressure" lead="Flow line and wellhead equipment engineered, forged, machined and tested under one roof.">
          <div className="filter-bar">
            {categories.map((c) => (
              <button key={c} className={`filter-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>
                {cat === c && <motion.span layoutId="filter-pill" className="filter-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                {c}
              </button>
            ))}
          </div>
        </SectionHead>
        <motion.div layout className="product-grid m-scroll">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => <ProductCard key={p.slug} p={p} index={i} />)}
          </AnimatePresence>
        </motion.div>
        <SwipeHint />
        <Reveal style={{ textAlign: 'center', marginTop: 50 }}>
          <Link to="/products" className="btn btn-outline">View full catalogue <ArrowRight size={18} /></Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Interactive product finder ---------------- */
const psiSteps = [500, 1000, 2000, 3000, 5000, 10000, 15000, 20000]
const sizeSteps = [0.5, 1, 2, 3, 4, 6, 8, 10, 12]
const sizeLabel = (s) => (s === 0.5 ? '1/2″' : `${s}″`)

export function ProductFinder() {
  const [pi, setPi] = useState(4)
  const [si, setSi] = useState(2)
  const psi = psiSteps[pi]
  const size = sizeSteps[si]
  const matches = products.filter((p) => psi >= p.minPsi && psi <= p.maxPsi && size >= p.minSize && size <= p.maxSize)
  const { open } = useQuote()

  return (
    <section className="section section-dark finder-section">
      <div className="finder-bg" aria-hidden="true" />
      <div className="container">
        <SectionHead center eyebrow="Product Finder" title="Find the right" highlight="component" lead="Set your working pressure and nominal size — we'll show the products engineered for your duty." />
        <Reveal className="finder">
          <div className="finder-controls">
            <div className="gauge-wrap">
              <Gauge value={pi / (psiSteps.length - 1)} size={230} label={`${psi.toLocaleString('en-IN')} PSI`} sub="WORKING PRESSURE" />
            </div>
            <div>
              <div className="finder-label">Working pressure <b>{psi.toLocaleString('en-IN')} PSI</b></div>
              <input className="range" type="range" min={0} max={psiSteps.length - 1} value={pi} onChange={(e) => setPi(+e.target.value)} aria-label="Working pressure" />
              <div className="range-ticks"><span>500</span><span>5K</span><span>20K PSI</span></div>
            </div>
            <div>
              <div className="finder-label">Nominal size <b>{sizeLabel(size)}</b></div>
              <input className="range" type="range" min={0} max={sizeSteps.length - 1} value={si} onChange={(e) => setSi(+e.target.value)} aria-label="Nominal size" />
              <div className="range-ticks"><span>1/2″</span><span>4″</span><span>12″</span></div>
            </div>
          </div>
          <div className="finder-results">
            <div className="finder-count"><span>{matches.length}</span> product{matches.length === 1 ? '' : 's'} match your duty</div>
            <AnimatePresence mode="popLayout">
              {matches.map((p) => (
                <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                  <Link to={`/products/${p.slug}`} className="finder-item">
                    <img src={p.image} alt="" />
                    <div><strong>{p.name}</strong><small>{p.pressure}</small></div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
            {matches.length === 0 && (
              <div className="finder-empty">
                No standard product at this combination — we build custom.
                <div style={{ marginTop: 16 }}><button className="btn btn-primary" onClick={() => open('Other / Custom')}>Ask for a custom build</button></div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Services ---------------- */
export function ServicesGrid({ withHead = true }) {
  return (
    <section className="section section-dark" style={withHead ? undefined : { paddingTop: 0 }}>
      <div className="container">
        {withHead && (
          <SectionHead split eyebrow="Our Services" title="Repair. Test." highlight="Refurbish." lead="Keeping safety-critical rig equipment in peak condition with certified repair and testing.">
            <Link to="/services" className="btn btn-ghost">All services <ArrowRight size={18} /></Link>
          </SectionHead>
        )}
        <div className="services-grid m-scroll">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08} className="service-card">
              {s.photo && <img className="service-photo" src={s.photo} alt="" loading="lazy" />}
              <span className="service-num">0{i + 1}</span>
              <div className="service-icon"><Icon name={s.icon} size={30} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
        <SwipeHint />
      </div>
    </section>
  )
}

/* ---------------- Process timeline ---------------- */
export function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  return (
    <section className="section process" ref={ref}>
      <div className="container">
        <SectionHead center eyebrow="How We Build" title="From forge" highlight="to field" lead="Every component follows a controlled, traceable path — so what reaches your rig performs exactly as specified." />
        <div className="process-track">
          <div className="process-line"><motion.span style={{ scaleX: scrollYProgress }} /></div>
          {processSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="process-step">
              <div className="process-dot">0{i + 1}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Industries photo gallery ---------------- */
export function IndustryGallery() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead split eyebrow="Industries We Serve" title="Where our" highlight="equipment works" lead="From offshore platforms to refinery process lines — NMT components perform wherever pressure is non-negotiable.">
          <Link to="/products" className="btn btn-outline">Explore products <ArrowRight size={18} /></Link>
        </SectionHead>
        <div className="bento">
          {industryGallery.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08} className={`bento-tile ${g.size || ''}`}>
              <img src={g.img} alt={g.title} loading="lazy" />
              <div className="bento-overlay" />
              <div className="bento-text">
                <span className="bento-num">0{i + 1}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Why choose us ---------------- */
export function WhyUs() {
  return (
    <section className="section section-grey">
      <div className="container why-grid">
        <div>
          <SectionHead eyebrow="Why NMT" title="The partner that" highlight="doesn't fail under pressure" />
          <div className="why-cards m-scroll">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 0.08} className="why-card">
                <Icon name={w.icon} size={32} />
                <h4>{w.title}</h4>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
          <SwipeHint />
        </div>
        <Reveal className="why-visual" x={40} y={0}>
          <img src="/images/stock/welding-sparks.webp" alt="Welding in the fabrication shop" loading="lazy" />
          <div className="why-visual-card">
            <h4>Industries we serve</h4>
            <p>Trusted by drilling contractors, operators and service companies.</p>
            <div className="industries">{industries.map((x) => <span key={x}>{x}</span>)}</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Certifications ---------------- */
export function Certifications() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead center eyebrow="Quality Assured" title="Certified" highlight="Excellence" lead="Our systems and processes are recognised by national and international bodies." />
        <div className="cert-grid">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="cert-card">
              <img src={c.img} alt={c.title} loading="lazy" />
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Clients marquee ---------------- */
export function Clients() {
  const half = Math.ceil(clients.length / 2)
  const rows = [clients.slice(0, half), clients.slice(half)]
  return (
    <section className="section section-grey">
      <div className="container">
        <SectionHead center eyebrow="Our Clients" title="Trusted by" highlight="industry leaders" />
      </div>
      <div style={{ display: 'grid', gap: 24 }}>
        {rows.map((row, r) => (
          <div key={r} className={`marquee ${r ? 'reverse' : ''}`}>
            <div className="marquee-track">
              {[...row, ...row, ...row, ...row].map((c, i) => (
                <div className="client-logo" key={i} title={c.name}><img src={c.img} alt={c.name} loading="lazy" /></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------------- FAQ ---------------- */
export function Faq() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section className="section">
      <div className="container faq-grid">
        <div>
          <SectionHead eyebrow="FAQ" title="Questions?" highlight="Answered." lead="Can't find what you're looking for? Our engineers are one call away." />
          <Reveal>
            <a href={`tel:+${company.phoneRaw}`} className="btn btn-primary"><Phone size={18} /> {company.phone}</a>
          </Reveal>
        </div>
        <Reveal>
          {faqs.map((f, i) => (
            <div key={f.q} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)} aria-expanded={openIdx === i}>
                {f.q}
                <span className="faq-icon"><Plus size={18} /></span>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div className="faq-a" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}>
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- CTA banner ---------------- */
export function Cta() {
  const { open } = useQuote()
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="cta">
          <div>
            <h2>Have a drawing or requirement?</h2>
            <p>Share your specification and our engineering team will come back with a competitive quote — fast.</p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary" onClick={() => open()}>Request a Quote <ArrowRight size={18} /></button>
            <Link to="/contact" className="btn btn-ghost">Contact us</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
