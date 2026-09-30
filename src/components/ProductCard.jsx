import { forwardRef, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Ruler, Gauge } from 'lucide-react'

const isCutout = (src) => src.endsWith('.png')

/** Product card with cursor-follow 3D tilt and light sheen. */
const ProductCard = forwardRef(function ProductCard({ p, index = 0 }, outerRef) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    mx.set(x)
    my.set(y)
    ref.current.style.setProperty('--mx', `${x * 100}%`)
    ref.current.style.setProperty('--my', `${y * 100}%`)
  }
  const onLeave = () => { mx.set(0.5); my.set(0.5) }

  return (
    <motion.div
      ref={outerRef}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.div ref={ref} className="product-card" style={{ rotateX: rx, rotateY: ry, height: '100%' }} onMouseMove={onMove} onMouseLeave={onLeave}>
        <div className="shine" />
        <Link to={`/products/${p.slug}`} className="product-img">
          <img src={p.image} alt={p.name} loading="lazy" className={isCutout(p.image) ? 'contain' : ''} />
          <span className="product-tag">{p.category}</span>
        </Link>
        <div className="product-body">
          <h3>{p.name}</h3>
          <p>{p.summary}</p>
          <div className="product-specs">
            <span><Ruler size={14} /> {p.sizes}</span>
            <span><Gauge size={14} /> {p.pressure}</span>
          </div>
          <Link to={`/products/${p.slug}`} className="product-link">View details <ArrowRight size={16} /></Link>
        </div>
      </motion.div>
    </motion.div>
  )
})

export default ProductCard
