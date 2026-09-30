import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../data/site'
import { Gauge, WhatsAppIcon } from './ui'

export function Preloader() {
  const [show, setShow] = useState(true)
  const [v, setV] = useState(0)
  useEffect(() => {
    const t1 = setTimeout(() => setV(0.92), 80)
    const t2 = setTimeout(() => setShow(false), 1500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="preloader" exit={{ y: '-100%' }} transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}>
          <div className="preloader-inner">
            <div className="preloader-gauge"><Gauge value={v} size={120} /></div>
            <div className="preloader-text">Pressurising…</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

export function FloatingActions() {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)
  useEffect(() => scrollY.on('change', (y) => setShow(y > 600)), [scrollY])
  return (
    <div className="fab-stack">
      <AnimatePresence>
        {show && (
          <motion.button className="fab fab-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
      <a className="fab fab-wa" href={`https://wa.me/${company.phoneRaw}?text=${encodeURIComponent('Hello NMT, I would like to enquire about your products.')}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  )
}

export function PageHero({ title, text, image, crumb }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 120])
  return (
    <section className="page-hero">
      <motion.div className="page-hero-bg" style={{ y }}><img src={image} alt="" /></motion.div>
      <div className="container">
        <motion.div className="crumbs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Link to="/">Home</Link> <span>/</span> {crumb || title}
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}>
          {title}
        </motion.h1>
        {text && (
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}>
            {text}
          </motion.p>
        )}
      </div>
    </section>
  )
}
