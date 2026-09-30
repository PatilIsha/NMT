import { PageHero } from '../components/Chrome'
import { ServicesGrid, Process, Faq, Cta, Certifications } from '../sections/HomeSections'
import { SectionHead } from '../components/ui'

export default function Services() {
  return (
    <>
      <PageHero title="Services" image="/images/stock/welding.webp" text="Repair, testing, refurbishment and custom engineering for safety-critical oil & gas equipment." />
      <section className="section section-dark" style={{ paddingBottom: 40 }}>
        <div className="container">
          <SectionHead eyebrow="What we do" title="End-to-end" highlight="equipment care" lead="Our service workshop is equipped to diagnose, repair, re-certify and upgrade the equipment your operations rely on." />
        </div>
      </section>
      <ServicesGrid withHead={false} />
      <Process />
      <Certifications />
      <Faq />
      <Cta />
    </>
  )
}
