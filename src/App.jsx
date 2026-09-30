import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import { Preloader, ScrollProgress, FloatingActions } from './components/Chrome'
import { QuoteProvider } from './context/QuoteContext'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Services from './pages/Services'
import Contact from './pages/Contact'

const titles = { '/': 'Home', '/about': 'About Us', '/products': 'Products', '/services': 'Services', '/contact': 'Contact Us' }

function NotFound() {
  return (
    <section className="notfound">
      <div>
        <h1>404</h1>
        <p style={{ marginBottom: 24, color: 'var(--muted)' }}>This page seems to have lost pressure.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const t = titles[location.pathname]
    document.title = `${t || 'Products'} | NMT – National Machine Tools`
  }, [location.pathname])

  return (
    <MotionConfig reducedMotion="user">
      <QuoteProvider>
        <Preloader />
        <ScrollProgress />
        <Header />
        <AnimatePresence mode="wait">
          <motion.main key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <Footer />
        <FloatingActions />
      </QuoteProvider>
    </MotionConfig>
  )
}
