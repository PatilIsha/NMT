import Hero from '../sections/Hero'
import {
  AboutPreview, ProductShowcase, ProductFinder, ServicesGrid, Process, IndustryGallery, WhyUs, Certifications, Clients, Faq, Cta,
} from '../sections/HomeSections'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProductShowcase />
      <ProductFinder />
      <Process />
      <ServicesGrid />
      <IndustryGallery />
      <WhyUs />
      <Certifications />
      <Clients />
      <Faq />
      <Cta />
    </>
  )
}
