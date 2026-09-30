import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { heroSlides, stats } from '../data/site'
import { useQuote } from '../context/QuoteContext'
import { Counter } from '../components/ui'

const DURATION = 7000

export default function Hero() {
  const [i, setI] = useState(0)
  const { open } = useQuote()
  const go = useCallback((d) => setI((x) => (x + d + heroSlides.length) % heroSlides.length), [])

  useEffect(() => {
    const t = setTimeout(() => go(1), DURATION)
    return () => clearTimeout(t)
  }, [i, go])

  const s = heroSlides[i]

  return (
    <>
      <section className="hero">
        <AnimatePresence mode="sync">
          <motion.div key={i} className="hero-slide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
            <motion.img src={s.image} alt="" initial={{ scale: 1.18 }} animate={{ scale: 1 }} transition={{ duration: 8, ease: 'linear' }} />
          </motion.div>
        </AnimatePresence>
        <div className="hero-overlay" />
        <div className="hero-grid-lines" />

        <div className="container hero-content">
          <AnimatePresence mode="wait">
            <motion.div key={i} exit={{ opacity: 0, y: -20, transition: { duration: 0.35 } }}>
              <motion.div className="hero-eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="dot"><Sparkles size={14} /></span> {s.eyebrow}
              </motion.div>
              <h1>
                {s.title.map((line, k) => (
                  <span className="line" key={k}>
                    <motion.span style={{ display: 'block' }} initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 + k * 0.12, ease: [0.2, 0.7, 0.2, 1] }}>
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}>{s.text}</motion.p>
              <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
                <Link to="/products" className="btn btn-primary">Explore Products <ArrowRight size={18} /></Link>
                <button className="btn btn-ghost" onClick={() => open()}>Request a Quote</button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hero-side">Oil &amp; Gas · Flow Line · Wellhead</div>

        <div className="hero-controls">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div className="hero-counter"><b>0{i + 1}</b> / 0{heroSlides.length}</div>
              <div className="hero-dots">
                {heroSlides.map((_, k) => (
                  <button key={k} className="hero-dot" onClick={() => setI(k)} aria-label={`Slide ${k + 1}`}>
                    {k === i && <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: DURATION / 1000, ease: 'linear' }} />}
                    {k < i && <span />}
                  </button>
                ))}
              </div>
            </div>
            <div className="hero-arrows">
              <button className="hero-arrow" onClick={() => go(-1)} aria-label="Previous slide"><ArrowLeft size={20} /></button>
              <button className="hero-arrow" onClick={() => go(1)} aria-label="Next slide"><ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="container">
          {stats.map((st) => (
            <div className="stat" key={st.label}>
              <div className="stat-value"><Counter value={st.value} prefix={st.prefix} suffix={st.suffix} format={st.format} /></div>
              <div className="stat-label">{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
