import { Target, Eye, Heart } from 'lucide-react'
import { PageHero } from '../components/Chrome'
import { Reveal, SectionHead, Counter } from '../components/ui'
import { AboutPreview, Process, IndustryGallery, WhyUs, Certifications, Clients, Cta } from '../sections/HomeSections'
import { moreProducts, stats } from '../data/site'

const vm = [
  { icon: Target, title: 'Mission', text: 'To manufacture and deliver products that meet customer satisfaction by following international standard practices — every order, every time.' },
  { icon: Eye, title: 'Vision', text: 'To be the most trusted Indian partner for high-pressure flow line, wellhead and rig-equipment services across the global oil & gas industry.' },
  { icon: Heart, title: 'Values', text: 'Safety first, uncompromising quality, honest commitments and continuous improvement in everything we build and service.' },
]

const commitments = [
  'Motivated & trained human resources',
  'Innovative manufacturing processes',
  'Continual improvement',
  'Adherence to delivery schedules',
]

export default function About() {
  return (
    <>
      <PageHero title="About Us" image="/images/stock/refinery-night.webp" text="Over 60 years of manufacturing and servicing high-pressure equipment for the oil & gas industry." />
      <AboutPreview />

      <section className="section section-dark">
        <div className="container">
          <SectionHead center eyebrow="What drives us" title="Mission, vision" highlight="& values" />
          <div className="vm-grid">
            {vm.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} className="vm-card">
                <v.icon size={40} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="stats-strip" style={{ marginTop: 60, borderRadius: 22, overflow: 'hidden' }}>
            <div className="container" style={{ paddingInline: 0 }}>
              {stats.map((st) => (
                <div className="stat" key={st.label}>
                  <div className="stat-value"><Counter value={st.value} prefix={st.prefix} suffix={st.suffix} format={st.format} /></div>
                  <div className="stat-label">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Quality Policy" title="How we" highlight="deliver" lead="Our commitment to customer satisfaction is achieved through:" />
          <div className="values-list">
            {commitments.map((c, i) => (
              <Reveal key={c} delay={i * 0.08} className="value-row">
                <span className="num">0{i + 1}</span> {c}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <IndustryGallery />
      <WhyUs />

      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Full Range" title="We also" highlight="manufacture" lead="Beyond our flagship lines, NMT supplies a wide range of oilfield components." />
          <Reveal className="more-products">
            {moreProducts.map((m) => <span key={m}>◆ {m}</span>)}
          </Reveal>
        </div>
      </section>

      <Certifications />
      <Clients />
      <Cta />
    </>
  )
}
