// Central content file — edit text, specs and contact details here.

export const company = {
  name: 'National Machine Tools',
  legal: 'NMT Oil and Gas Services Pvt. Ltd.',
  short: 'NMT',
  tagline: 'Engineered for Pressure. Built to Last.',
  email: 'info@nmtogs.com',
  phone: '+91 93561 25840',
  phoneRaw: '919356125840',
  address: 'Plot No. E-33, Yogeshwar Estate, Behind Shivam Estate, Chhatral GIDC Phase 2, Chhatral, Gujarat 382729, India',
  mapQuery: 'Chhatral GIDC Phase 2, Gujarat 382729',
  hours: 'Mon – Sat · 9:00 AM – 7:00 PM IST',
  socials: {
    linkedin: 'https://www.linkedin.com/',
    indiamart: 'https://www.indiamart.com/',
    justdial: 'https://www.justdial.com/',
  },
}

export const stats = [
  { value: 60, suffix: '+', label: 'Years of Service' },
  { value: 20000, suffix: '', label: 'PSI Max Working Pressure', format: true },
  { value: 12, suffix: '″', prefix: '½″ – ', label: 'Size Range' },
  { value: 13, suffix: '+', label: 'Industry Leaders Served' },
]

export const categories = ['All', 'Unions & Joints', 'Flow Line', 'Wellhead & Flanges', 'Adapters']

export const products = [
  {
    slug: 'hammer-unions',
    name: 'Hammer Unions',
    category: 'Unions & Joints',
    image: '/images/hammer-union-4.jpg',
    gallery: ['/images/hammer-union-4.jpg', '/images/hammer-union-2.jpeg', '/images/fig-200.png'],
    summary: 'Forged, leak-tight hammer unions for fast, reliable make-up of high-pressure flow lines.',
    description:
      'Our hammer unions are manufactured from forged alloy steel and precision-machined for a positive, leak-proof seal. Available in standard and sour-gas service configurations, they are colour-coded and stamped for easy figure identification in the field.',
    sizes: '1/2″ – 12″',
    pressure: '500 – 20,000 PSI',
    minPsi: 500,
    maxPsi: 20000,
    minSize: 0.5,
    maxSize: 12,
    features: ['Forged alloy steel bodies', 'Standard & sour-gas (H₂S) service', 'Threaded, butt-weld & integral ends', 'Colour-coded figure identification'],
  },
  {
    slug: 'fig-50-union',
    name: 'FIG 50 Union',
    category: 'Unions & Joints',
    image: '/images/fig-50.png',
    gallery: ['/images/fig-50.png'],
    summary: 'Low-pressure hammer union for water, air, and general service lines.',
    description:
      'FIG 50 unions are designed for low-pressure applications such as water, air, mud and oil lines. A robust wing-nut design allows quick hammer make-up and break-out.',
    sizes: '1″ – 12″',
    pressure: 'Low pressure service',
    minPsi: 500,
    maxPsi: 2000,
    minSize: 1,
    maxSize: 12,
    features: ['Quick make-up wing nut', 'Metal-to-metal or O-ring seal', 'Threaded & weld ends', 'Economical for low-pressure lines'],
  },
  {
    slug: 'fig-100-union',
    name: 'FIG 100 Union',
    category: 'Unions & Joints',
    image: '/images/fig-100.png',
    gallery: ['/images/fig-100.png'],
    summary: 'General-purpose union for manifold and low-pressure flow applications.',
    description:
      'FIG 100 unions offer dependable sealing for general-purpose manifolds, suction and discharge lines, with interchangeable components for ease of maintenance.',
    sizes: '1″ – 12″',
    pressure: 'Low pressure service',
    minPsi: 500,
    maxPsi: 2000,
    minSize: 1,
    maxSize: 12,
    features: ['Interchangeable components', 'Buttress thread wing nut', 'Suction & discharge lines', 'Field-proven design'],
  },
  {
    slug: 'fig-200-union',
    name: 'FIG 200 Union',
    category: 'Unions & Joints',
    image: '/images/fig-200.png',
    gallery: ['/images/fig-200.png'],
    summary: 'Medium-pressure union for mud, cementing and manifold lines.',
    description:
      'FIG 200 unions are built for manifold and mud-line service where durability and fast connection matter. Replaceable seal rings extend service life.',
    sizes: '1″ – 12″',
    pressure: 'Up to 2,000 PSI',
    minPsi: 500,
    maxPsi: 2000,
    minSize: 1,
    maxSize: 12,
    features: ['Replaceable seal rings', 'Mud & manifold service', 'Forged wing nut', 'Pressure-tested before dispatch'],
  },
  {
    slug: 'pup-joints',
    name: 'Pup Joints',
    category: 'Flow Line',
    image: '/images/pup-joint.jpg',
    gallery: ['/images/pup-joint.jpg', '/images/pup-joints.webp'],
    summary: 'Integral and welded pup joints for temporary high-pressure flow lines.',
    description:
      'Our pup joints are made from high-strength seamless tubing with integral or welded union ends. Each joint is hydrostatically tested and supplied in custom lengths to suit your rig-up.',
    sizes: '1″ – 4″',
    pressure: 'Up to 20,000 PSI',
    minPsi: 1000,
    maxPsi: 20000,
    minSize: 1,
    maxSize: 4,
    features: ['Integral & welded union ends', 'Custom lengths', 'Hydro-tested every piece', 'Standard & sour service'],
  },
  {
    slug: 'swivel-joints',
    name: 'Swivel Joints',
    category: 'Flow Line',
    image: '/images/swivel-joints.jpg',
    gallery: ['/images/swivel-joints.jpg', '/images/swivel-joints.webp'],
    summary: 'Multi-style swivel joints giving full rotational freedom in flow lines.',
    description:
      'Long-radius swivel joints provide 360° rotation in multiple planes, making rig-up of temporary flow lines faster and safer. Hardened ball races ensure smooth movement under load.',
    sizes: '1″ – 4″',
    pressure: 'Up to 15,000 PSI',
    minPsi: 1000,
    maxPsi: 15000,
    minSize: 1,
    maxSize: 4,
    features: ['Long-radius design', 'Hardened ball races', 'Multiple style configurations', 'Grease fittings for service'],
  },
  {
    slug: 'steel-hose-assemblies',
    name: 'Steel Hose Assemblies',
    category: 'Flow Line',
    image: '/images/steel-hose.jpg',
    gallery: ['/images/steel-hose.jpg'],
    summary: 'Flexible stainless steel hose assemblies for demanding flow conditions.',
    description:
      'Braided stainless steel hose assemblies with flanged, threaded or union ends. Ideal where vibration, movement or thermal expansion rules out rigid piping.',
    sizes: '1/2″ – 12″',
    pressure: 'As per application',
    minPsi: 500,
    maxPsi: 10000,
    minSize: 0.5,
    maxSize: 12,
    features: ['Stainless steel braided', 'Flanged / threaded / union ends', 'Vibration & thermal tolerant', 'Built to specification'],
  },
  {
    slug: 'adapter-flanges-dsaf',
    name: 'Adapter Flanges (DSAF)',
    category: 'Wellhead & Flanges',
    image: '/images/dsaf.png',
    gallery: ['/images/dsaf.png'],
    summary: 'Double studded adapter flanges to connect dissimilar API end connections.',
    description:
      'DSAFs join flanges of different size or pressure ratings in compact stack-ups. Manufactured to API 6A dimensions and supplied with studs and nuts ready for installation.',
    sizes: '1-13/16″ – 21-1/4″',
    pressure: '2,000 – 20,000 PSI',
    minPsi: 2000,
    maxPsi: 20000,
    minSize: 2,
    maxSize: 12,
    features: ['API 6A dimensions', 'Compact height stack-up', 'Supplied with studs & nuts', 'Custom size combinations'],
  },
  {
    slug: 'api-6a-16a-double-studded',
    name: 'API 6A & 16A Double Studded',
    category: 'Wellhead & Flanges',
    image: '/images/dsaf.png',
    gallery: ['/images/dsaf.png'],
    summary: 'Double-studded adapters for wellhead and BOP stack connections.',
    description:
      'Engineered for wellhead and BOP connections to API 6A and 16A, our double-studded adapters are machined from forged material and fully traceable from heat to dispatch.',
    sizes: 'Per API 6A / 16A',
    pressure: '2,000 – 20,000 PSI',
    minPsi: 2000,
    maxPsi: 20000,
    minSize: 2,
    maxSize: 12,
    features: ['API 6A & 16A compliant', 'Forged, traceable material', 'Ring-groove inlay options', 'Full dimensional inspection'],
  },
  {
    slug: 'api-6a-16a-spools',
    name: 'API 6A & 16A Spools',
    category: 'Wellhead & Flanges',
    image: '/images/product-banner.jpg',
    gallery: ['/images/product-banner.jpg'],
    summary: 'Spacer, adapter and drilling spools for wellhead and pressure-control stacks.',
    description:
      'Spacer and adapter spools manufactured to API 6A / 16A for drilling, completion and well-intervention stacks. Available with flanged or studded ends and custom outlets.',
    sizes: 'Per API 6A / 16A',
    pressure: '2,000 – 20,000 PSI',
    minPsi: 2000,
    maxPsi: 20000,
    minSize: 2,
    maxSize: 12,
    features: ['Spacer, adapter & drilling spools', 'Flanged or studded ends', 'Custom outlets', 'Hydrostatic body test'],
  },
  {
    slug: 'adapters-crossovers',
    name: 'Adapters & Crossovers',
    category: 'Adapters',
    image: '/images/adapters.png',
    gallery: ['/images/adapters.png'],
    summary: 'Crossovers and adapters to link different thread, union and flange types.',
    description:
      'Crossovers and change-overs connecting API threads, hammer unions and flanges of different types and sizes. Precision CNC-machined for perfect thread form and seal integrity.',
    sizes: '1/2″ – 12″',
    pressure: 'Up to 15,000 PSI',
    minPsi: 500,
    maxPsi: 15000,
    minSize: 0.5,
    maxSize: 12,
    features: ['Thread-to-union-to-flange', 'CNC precision threading', 'Custom combinations', 'Gauged & inspected'],
  },
]

export const moreProducts = [
  'Ring Joint Gaskets', 'Flanges', 'Spacer & Adaptor Spools', 'Cross Overs', 'High-Pressure Nipples & Couplings',
  'Dies & Inserts', 'Change-overs', 'Tees & Crosses', 'Bull Plugs', 'CNC Turning Parts', 'Oil Field Rubber Parts', 'API Gate Valve Spares',
]

export const services = [
  {
    icon: 'Gauge',
    img: '/images/svc-test.png',
    photo: '/images/stock/pressure-gauge.webp',
    title: 'Repair & Testing of High Pressure Test Units',
    text: 'Complete overhaul, calibration and certified pressure testing of high-pressure test units to restore them to original performance.',
  },
  {
    icon: 'Cog',
    img: '/images/svc-hydraulic.png',
    photo: '/images/stock/valves.webp',
    title: 'Repair & Testing of Hydraulic Power Units',
    text: 'Diagnostics, component replacement and load testing of hydraulic power units to keep your rig operations running without interruption.',
  },
  {
    icon: 'PenTool',
    img: '/images/svc-product.png',
    photo: '/images/stock/cnc-tools.webp',
    title: 'Custom Product Development',
    text: 'From drawing to delivery — we engineer and manufacture components to your exact specification, standard or application.',
  },
  {
    icon: 'Flame',
    img: '/images/heat.png',
    photo: '/images/stock/welding-sparks.webp',
    title: 'Open & Closed Die Forgings, Heat Treatment',
    text: 'Forged blanks and controlled heat treatment to deliver the mechanical properties and toughness that high-pressure service demands.',
  },
  {
    icon: 'ShieldCheck',
    img: '/images/control-unit.png',
    photo: '/images/stock/offshore-rig-aerial.webp',
    title: 'Repair / Refurbishment / Upgrade of BOP Control Units',
    text: 'Inspection, refurbishment and upgrade of BOP control units — restoring safety-critical equipment to reliable working condition.',
  },
  {
    icon: 'ClipboardCheck',
    img: '/images/svc-pressure.png',
    photo: '/images/stock/gauge-valves.webp',
    title: 'PR-1 and PR-2 Testing',
    text: 'Performance verification testing to PR-1 and PR-2 requirements, with documented results for qualification and compliance.',
  },
]

export const processSteps = [
  { title: 'Engineering', text: 'Drawings, material selection and design review against API and client standards.' },
  { title: 'Forging', text: 'Open & closed die forgings for superior grain flow and strength.' },
  { title: 'Heat Treatment', text: 'Controlled quench & temper to achieve specified hardness and toughness.' },
  { title: 'CNC Machining', text: 'Precision CNC turning and threading for exact fit and seal integrity.' },
  { title: 'Testing & QA', text: 'Hydrostatic testing, dimensional inspection and full traceability.' },
  { title: 'Dispatch', text: 'Colour coding, stamping, documentation and on-schedule delivery.' },
]

export const whyUs = [
  { icon: 'Award', title: 'Six Decades of Know-how', text: 'Over 60 years of hands-on manufacturing and servicing experience in oil & gas equipment.' },
  { icon: 'BadgeCheck', title: 'International Standards', text: 'Products manufactured following international standard practices, including API 6A & 16A.' },
  { icon: 'Users', title: 'Trained Workforce', text: 'Motivated, skilled people who take pride in precision and safety.' },
  { icon: 'Timer', title: 'On-time Delivery', text: 'Disciplined planning so your operations never wait on a component.' },
  { icon: 'Lightbulb', title: 'Innovative Processes', text: 'Continuous improvement in manufacturing methods and quality control.' },
  { icon: 'Wrench', title: 'Build + Service', text: 'We manufacture, repair, test and refurbish — one partner for the full life cycle.' },
]

export const certifications = [
  { img: '/images/certs/iso.png', title: 'ISO 9001:2015', text: 'Quality Management System' },
  { img: '/images/certs/zed.jpg', title: 'ZED Certified', text: 'Zero Defect, Zero Effect' },
  { img: '/images/certs/msme.png', title: 'MSME Registered', text: 'Govt. of India' },
  { img: '/images/certs/gem.png', title: 'GeM Registered', text: 'Government e-Marketplace' },
]

export const clients = [
  { name: 'ONGC', img: '/images/clients/ongc.png' },
  { name: 'Essar', img: '/images/clients/essar.png' },
  { name: 'Jindal', img: '/images/clients/jindal.png' },
  { name: 'MEIL', img: '/images/clients/meil.png' },
  { name: 'Aban', img: '/images/clients/aban.png' },
  { name: 'Al Mansoori', img: '/images/clients/almansoori.png' },
  { name: 'Bureau Veritas', img: '/images/clients/bv.webp' },
  { name: 'Quippo', img: '/images/clients/quippo.webp' },
  { name: 'KS Drilling', img: '/images/clients/ks-drilling.webp' },
  { name: 'GTC Oil', img: '/images/clients/gtc.webp' },
  { name: 'Aakash', img: '/images/clients/aakash.png' },
  { name: 'A-One', img: '/images/clients/aone.png' },
  { name: 'SGD', img: '/images/clients/sgd.png' },
]

export const industries = [
  'Onshore Drilling', 'Offshore Rigs', 'Well Testing', 'Cementing & Fracturing', 'Well Intervention', 'Refineries & Process Plants',
]

export const industryGallery = [
  { title: 'Offshore Rigs', text: 'Flow line & pressure-control equipment for jack-ups and platforms.', img: '/images/stock/offshore-rig-aerial.webp', size: 'wide' },
  { title: 'Onshore Drilling', text: 'Unions, pup joints and swivels for land rigs.', img: '/images/stock/pumpjack.webp' },
  { title: 'Well Testing', text: 'High-pressure manifolds, gauges and test units.', img: '/images/stock/gauge-valves.webp', size: 'tall' },
  { title: 'Refineries & Process Plants', text: 'Hose assemblies, flanges and crossovers.', img: '/images/stock/refinery-night.webp' },
  { title: 'Fabrication & Forging', text: 'Open & closed die forgings with heat treatment.', img: '/images/stock/welding.webp' },
  { title: 'Precision Machining', text: 'CNC turning and threading to API tolerances.', img: '/images/stock/lathe.webp' },
]

export const faqs = [
  { q: 'What size and pressure range do you manufacture?', a: 'Our range covers sizes from 1/2″ to 12″ and pressure ratings from 500 PSI for low-pressure service up to 20,000 PSI for high-pressure applications.' },
  { q: 'Do you manufacture to API standards?', a: 'Yes. Wellhead and pressure-control components such as flanges, spools and double-studded adapters are manufactured to API 6A and 16A dimensions and practices.' },
  { q: 'Can you make custom or non-standard parts?', a: 'Absolutely. Custom product development is one of our core services — share your drawing or requirement and our engineering team will quote.' },
  { q: 'Do you offer repair and testing services?', a: 'Yes — we repair and test high-pressure test units, hydraulic power units and BOP control units, and perform PR-1 / PR-2 testing.' },
  { q: 'Do you supply sour-service (H₂S) equipment?', a: 'Yes, selected unions, pup joints and fittings are available in sour-gas service configurations. Please mention it in your enquiry.' },
]

export const heroSlides = [
  {
    image: '/images/stock/offshore-dusk.jpg',
    eyebrow: '60+ Years of Service',
    title: ['Engineered for', 'Pressure.'],
    text: 'Hammer unions, pup joints, swivels and API 6A / 16A wellhead components — manufactured in India, trusted in oilfields worldwide.',
  },
  {
    image: '/images/hammer-union-2.jpeg',
    eyebrow: 'Up to 20,000 PSI',
    title: ['Leak-tight.', 'Field-proven.'],
    text: 'Forged, precision-machined and pressure-tested flow line products from 1/2″ to 12″.',
  },
  {
    image: '/images/stock/refinery-night.webp',
    eyebrow: 'Repair · Testing · Refurbishment',
    title: ['Built to Last.', 'Serviced to Perform.'],
    text: 'From BOP control units to hydraulic power units — our service team keeps safety-critical equipment running.',
  },
  {
    image: '/images/stock/welding.webp',
    eyebrow: 'Forge · Heat Treat · Machine · Test',
    title: ['Precision From', 'Forge to Field.'],
    text: 'Forging, heat treatment, CNC machining and pressure testing — all under one roof for complete quality control.',
  },
]
