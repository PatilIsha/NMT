import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Check, Send } from 'lucide-react'
import { PageHero } from '../components/Chrome'
import { Reveal } from '../components/ui'
import { company, products } from '../data/site'

const initial = { name: '', email: '', phone: '', product: '', message: '' }

export default function Contact() {
  const [f, setF] = useState(initial)
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const x = {}
    if (!f.name.trim()) x.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) x.email = 'Please enter a valid email'
    if (!f.message.trim()) x.message = 'Please tell us about your requirement'
    setErr(x)
    if (Object.keys(x).length) return
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nProduct: ${f.product || '-'}\n\n${f.message}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Website enquiry — ${f.product || 'General'}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const cards = [
    { icon: MapPin, title: 'Visit us', body: company.address },
    { icon: Phone, title: 'Call us', body: company.phone, href: `tel:+${company.phoneRaw}` },
    { icon: Mail, title: 'Email us', body: company.email, href: `mailto:${company.email}` },
    { icon: Clock, title: 'Working hours', body: company.hours },
  ]

  return (
    <>
      <PageHero title="Contact Us" image="/images/stock/offshore-dusk.jpg" text="Talk to our team about products, custom builds, repairs or testing — we respond within one business day." />
      <section className="section section-grey">
        <div className="container contact-grid">
          <div className="contact-cards">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08} className="contact-card">
                <div className="ic"><c.icon size={24} /></div>
                <div>
                  <h4>{c.title}</h4>
                  {c.href ? <a href={c.href}>{c.body}</a> : <p>{c.body}</p>}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="form-card">
            {sent ? (
              <motion.div className="form-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="ok"><Check size={40} /></div>
                <h3>Thank you, {f.name.split(' ')[0]}!</h3>
                <p>Your email app has opened with the enquiry ready to send. If it didn't, write to us directly at <b>{company.email}</b>.</p>
                <button className="btn btn-outline" style={{ marginTop: 24 }} onClick={() => { setF(initial); setSent(false) }}>Send another</button>
              </motion.div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="eyebrow">Send a message</div>
                <h3>Let's talk about your requirement</h3>
                <div className="form-grid">
                  <div className={`field ${err.name ? 'error' : ''}`}>
                    <input id="c-name" placeholder=" " value={f.name} onChange={set('name')} />
                    <label htmlFor="c-name">Your name *</label>
                    {err.name && <div className="field-err">{err.name}</div>}
                  </div>
                  <div className={`field ${err.email ? 'error' : ''}`}>
                    <input id="c-email" type="email" placeholder=" " value={f.email} onChange={set('email')} />
                    <label htmlFor="c-email">Email *</label>
                    {err.email && <div className="field-err">{err.email}</div>}
                  </div>
                  <div className="field">
                    <input id="c-phone" type="tel" placeholder=" " value={f.phone} onChange={set('phone')} />
                    <label htmlFor="c-phone">Phone</label>
                  </div>
                  <div className="field">
                    <select id="c-product" value={f.product} onChange={set('product')}>
                      <option value="">General enquiry</option>
                      {products.map((p) => <option key={p.slug}>{p.name}</option>)}
                      <option>Repair / Testing service</option>
                    </select>
                    <label htmlFor="c-product">Product / service</label>
                  </div>
                  <div className={`field full ${err.message ? 'error' : ''}`}>
                    <textarea id="c-msg" placeholder=" " value={f.message} onChange={set('message')} />
                    <label htmlFor="c-msg">Your requirement *</label>
                    {err.message && <div className="field-err">{err.message}</div>}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: 24 }}>Send Enquiry <Send size={18} /></button>
                <p className="form-note">We never share your details.</p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="map" style={{ marginTop: 80 }}>
            <iframe title="NMT location" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
