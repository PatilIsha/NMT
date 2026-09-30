import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Mail, Clock, Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { company, products } from '../data/site'
import { useQuote } from '../context/QuoteContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products', mega: true },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState(null)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobile, setMobile] = useState(false)
  const { pathname } = useLocation()
  const { open } = useQuote()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobile(false)
    setMegaOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
  }, [mobile])

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <a href={`mailto:${company.email}`}><Mail size={14} /> {company.email}</a>
            <a href={`tel:+${company.phoneRaw}`}><Phone size={14} /> {company.phone}</a>
          </div>
          <div className="topbar-right">
            <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}><Clock size={14} color="#e1262d" /> {company.hours}</span>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="logo" aria-label={`${company.name} home`}>
            <img src="/images/logo.png" alt={company.name} />
          </Link>

          <nav className="nav" onMouseLeave={() => setHovered(null)}>
            {links.map((l) => (
              <div
                key={l.to}
                className="nav-item"
                onMouseEnter={() => {
                  setHovered(l.to)
                  setMegaOpen(!!l.mega)
                }}
                onMouseLeave={() => l.mega && setMegaOpen(false)}
              >
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  {hovered === l.to && <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                  {l.label}
                  {l.mega && <ChevronDown size={16} style={{ transition: 'transform .3s', transform: megaOpen ? 'rotate(180deg)' : 'none' }} />}
                </NavLink>

                {l.mega && (
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div className="mega" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.22 }}>
                        <div className="mega-list">
                          {products.slice(0, 10).map((p) => (
                            <Link key={p.slug} to={`/products/${p.slug}`}>
                              <img src={p.image} alt="" loading="lazy" />
                              <div>
                                <strong>{p.name}</strong>
                                <small>{p.pressure}</small>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mega-feature">
                          <h4>Full Product Range</h4>
                          <p>1/2″ to 12″ · 500 to 20,000 PSI · API 6A & 16A</p>
                          <Link to="/products" className="btn btn-primary" style={{ width: 'fit-content', padding: '11px 20px' }}>
                            View all <ArrowRight size={16} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="header-cta">
            <button className="btn btn-primary" onClick={() => open()}>
              <span className="btn-text-full">Get a Quote</span> <ArrowRight size={18} />
            </button>
            <button className="burger" onClick={() => setMobile(true)} aria-label="Open menu"><Menu size={22} /></button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div className="mobile-menu" initial={{ clipPath: 'circle(0% at 100% 0%)' }} animate={{ clipPath: 'circle(150% at 100% 0%)' }} exit={{ clipPath: 'circle(0% at 100% 0%)' }} transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}>
            <div className="mobile-menu-top">
              <img src="/images/logo.png" alt={company.name} />
              <button className="burger" style={{ background: 'var(--red)' }} onClick={() => setMobile(false)} aria-label="Close menu"><X size={22} /></button>
            </div>
            <nav>
              {links.map((l, i) => (
                <motion.div key={l.to} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.07 }}>
                  <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>{l.label}</NavLink>
                </motion.div>
              ))}
            </nav>
            <button className="btn btn-primary" style={{ marginTop: 30, justifyContent: 'center' }} onClick={() => { setMobile(false); open() }}>
              Request a Quote <ArrowRight size={18} />
            </button>
            <div className="mobile-menu-foot">
              <a href={`tel:+${company.phoneRaw}`}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
