import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { products, company } from '../data/site'
import { WhatsAppIcon } from './ui'

const pressures = ['Up to 2,000 PSI', '3,000 – 5,000 PSI', '6,000 – 10,000 PSI', '15,000 PSI', '20,000 PSI', 'Not sure']
const services = ['Sour service (H₂S)', 'Custom drawing', 'Third-party inspection', 'Urgent delivery']

const empty = { products: [], size: '', pressure: '', qty: '', extras: [], name: '', company: '', email: '', phone: '', notes: '' }

export default function QuoteModal({ isOpen, initialProduct, onClose }) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(empty)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setStep(0)
      setDone(false)
      setErrors({})
      setData({ ...empty, products: initialProduct ? [initialProduct] : [] })
    }
  }, [isOpen, initialProduct])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  const toggle = (key, v) =>
    setData((d) => ({ ...d, [key]: d[key].includes(v) ? d[key].filter((x) => x !== v) : [...d[key], v] }))
  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (step === 0 && data.products.length === 0) e.products = 'Select at least one product'
    if (step === 2) {
      if (!data.name.trim()) e.name = 'Required'
      if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = 'Enter a valid email'
      if (data.phone.replace(/\D/g, '').length < 8) e.phone = 'Enter a valid phone'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const message = () =>
    [
      `*Quote Request — ${company.short} Website*`,
      `Products: ${data.products.join(', ')}`,
      data.size && `Size: ${data.size}`,
      data.pressure && `Pressure: ${data.pressure}`,
      data.qty && `Quantity: ${data.qty}`,
      data.extras.length && `Requirements: ${data.extras.join(', ')}`,
      `Name: ${data.name}`,
      data.company && `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      data.notes && `Notes: ${data.notes}`,
    ]
      .filter(Boolean)
      .join('\n')

  const next = () => validate() && setStep((s) => s + 1)
  const submit = () => {
    if (!validate()) return
    window.open(`https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(message())}`, '_blank', 'noopener')
    setDone(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Request a quote"
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="modal-head">
              <button className="modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
              <h3>Request a Quote</h3>
              <p>Tell us what you need — we reply within one business day.</p>
              {!done && (
                <div className="steps">
                  {[0, 1, 2].map((i) => (
                    <div key={i}><span style={{ width: step >= i ? '100%' : '0%' }} /></div>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-body">
              {done ? (
                <motion.div className="form-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="ok"><Check size={40} /></div>
                  <h3 className="step-title">Enquiry ready!</h3>
                  <p>We've opened WhatsApp with your request pre-filled — just hit send. You can also email us at <b>{company.email}</b>.</p>
                  <button className="btn btn-primary" style={{ marginTop: 24 }} onClick={onClose}>Close</button>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
                    {step === 0 && (
                      <>
                        <div className="step-title">1. What products do you need?</div>
                        <div className="chip-group">
                          {products.map((p) => (
                            <button key={p.slug} type="button" className={`chip ${data.products.includes(p.name) ? 'active' : ''}`} onClick={() => toggle('products', p.name)}>
                              {p.name}
                            </button>
                          ))}
                          <button type="button" className={`chip ${data.products.includes('Other / Custom') ? 'active' : ''}`} onClick={() => toggle('products', 'Other / Custom')}>Other / Custom</button>
                        </div>
                        {errors.products && <div className="field-err">{errors.products}</div>}
                      </>
                    )}
                    {step === 1 && (
                      <>
                        <div className="step-title">2. Specifications</div>
                        <div className="form-grid" style={{ marginTop: 0 }}>
                          <div className="field">
                            <input id="q-size" placeholder=" " value={data.size} onChange={set('size')} />
                            <label htmlFor="q-size">Size (e.g. 2″, 3″)</label>
                          </div>
                          <div className="field">
                            <input id="q-qty" placeholder=" " value={data.qty} onChange={set('qty')} />
                            <label htmlFor="q-qty">Quantity</label>
                          </div>
                        </div>
                        <p style={{ fontWeight: 600, margin: '22px 0 10px' }}>Working pressure</p>
                        <div className="chip-group">
                          {pressures.map((p) => (
                            <button key={p} type="button" className={`chip ${data.pressure === p ? 'active' : ''}`} onClick={() => setData((d) => ({ ...d, pressure: p }))}>{p}</button>
                          ))}
                        </div>
                        <p style={{ fontWeight: 600, margin: '22px 0 10px' }}>Additional requirements</p>
                        <div className="chip-group">
                          {services.map((p) => (
                            <button key={p} type="button" className={`chip ${data.extras.includes(p) ? 'active' : ''}`} onClick={() => toggle('extras', p)}>{p}</button>
                          ))}
                        </div>
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <div className="step-title">3. Your details</div>
                        <div className="form-grid" style={{ marginTop: 0 }}>
                          {[
                            ['name', 'Full name *'],
                            ['company', 'Company'],
                            ['email', 'Email *', 'email'],
                            ['phone', 'Phone *', 'tel'],
                          ].map(([k, l, t]) => (
                            <div key={k} className={`field ${errors[k] ? 'error' : ''}`}>
                              <input id={`q-${k}`} type={t || 'text'} placeholder=" " value={data[k]} onChange={set(k)} />
                              <label htmlFor={`q-${k}`}>{l}</label>
                              {errors[k] && <div className="field-err">{errors[k]}</div>}
                            </div>
                          ))}
                          <div className="field full">
                            <textarea id="q-notes" placeholder=" " value={data.notes} onChange={set('notes')} />
                            <label htmlFor="q-notes">Anything else? (end connections, standards, delivery location)</label>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}

              {!done && (
                <div className="modal-foot">
                  {step > 0 ? (
                    <button className="btn btn-outline" onClick={() => setStep((s) => s - 1)}><ArrowLeft size={18} /> Back</button>
                  ) : <span />}
                  {step < 2 ? (
                    <button className="btn btn-primary" onClick={next}>Continue <ArrowRight size={18} /></button>
                  ) : (
                    <button className="btn btn-primary" onClick={submit}><WhatsAppIcon size={18} /> Send Enquiry</button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
