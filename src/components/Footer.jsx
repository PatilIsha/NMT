import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Send, Globe } from 'lucide-react'
import { company, products } from '../data/site'
import { LinkedInIcon } from './ui'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    window.open(`mailto:${company.email}?subject=${encodeURIComponent('Please add me to NMT updates')}&body=${encodeURIComponent(email)}`)
    setSent(true)
  }

  return (
    <footer className="footer">
      <div className="footer-big" aria-hidden="true">NMT · 60+ YEARS</div>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo"><img src="/images/logo.png" alt={company.name} /></div>
            <p style={{ fontSize: 14.5, maxWidth: 340 }}>
              Manufacturer of high-pressure flow line and wellhead equipment, and trusted service partner for oil & gas operators — for over six decades.
            </p>
            <div className="socials">
              <a href={company.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href={company.socials.indiamart} target="_blank" rel="noreferrer" aria-label="IndiaMART"><Globe size={18} /></a>
              <a href={`mailto:${company.email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>Products</h5>
            <ul>
              {products.filter((p) => !p.slug.startsWith('fig')).slice(0, 6).map((p) => (
                <li key={p.slug}><Link to={`/products/${p.slug}`}>{p.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Get in Touch</h5>
            <ul className="footer-contact">
              <li><MapPin size={18} /> {company.address}</li>
              <li><Phone size={18} /> <a href={`tel:+${company.phoneRaw}`}>{company.phone}</a></li>
              <li><Mail size={18} /> <a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><Clock size={18} /> {company.hours}</li>
            </ul>
            <form className="newsletter" onSubmit={onSubmit}>
              <input type="email" placeholder={sent ? 'Thanks — we’ll be in touch!' : 'Your email for updates'} value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" />
              <button type="submit" aria-label="Subscribe"><Send size={18} /></button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {company.legal}. All rights reserved.</span>
          <span>ISO 9001:2015 · ZED · MSME · GeM</span>
        </div>
      </div>
    </footer>
  )
}
