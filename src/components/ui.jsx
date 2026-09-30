import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import {
  Gauge as GaugeIcon, Cog, PenTool, Flame, ShieldCheck, ClipboardCheck, Award, BadgeCheck, Users, Timer, Lightbulb, Wrench, Circle,
} from 'lucide-react'

// Only icons referenced by name in data/site.js — keeps the bundle small.
const Icons = { Gauge: GaugeIcon, Cog, PenTool, Flame, ShieldCheck, ClipboardCheck, Award, BadgeCheck, Users, Timer, Lightbulb, Wrench }

export function Icon({ name, size = 24, ...rest }) {
  const Cmp = Icons[name] || Circle
  return <Cmp size={size} {...rest} />
}

export function Reveal({ children, delay = 0, y = 40, x = 0, className, as = 'div', ...rest }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}

export function SectionHead({ eyebrow, title, highlight, lead, center, split, children }) {
  return (
    <div className={`section-head ${center ? 'center' : ''} ${split ? 'split' : ''}`}>
      <Reveal>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2 className="heading">
          {title} {highlight && <span>{highlight}</span>}
        </h2>
        {lead && <p className="lead">{lead}</p>}
      </Reveal>
      {children && <Reveal delay={0.15}>{children}</Reveal>}
    </div>
  )
}

export function Counter({ value, prefix = '', suffix = '', format = false, duration = 2.2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, value, duration])
  return (
    <span ref={ref}>
      {prefix}
      {format ? n.toLocaleString('en-IN') : n}
      {suffix}
    </span>
  )
}

/** Animated pressure gauge; `value` 0..1 drives the needle and arc. */
export function Gauge({ value = 0.6, size = 220, label, sub, dark = true }) {
  const r = 80
  const circ = Math.PI * r * 1.5 // 270° arc
  const angle = -135 + value * 270
  const ticks = Array.from({ length: 28 })
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} role="img" aria-label={label}>
      <circle cx="100" cy="100" r="96" fill={dark ? '#0b0f16' : '#fff'} stroke={dark ? 'rgba(255,255,255,.1)' : '#e1e5ec'} />
      {ticks.map((_, i) => {
        const a = ((-135 + (i * 270) / 27) * Math.PI) / 180
        const long = i % 3 === 0
        const r1 = long ? 64 : 68
        return (
          <line
            key={i}
            x1={100 + r1 * Math.sin(a)} y1={100 - r1 * Math.cos(a)}
            x2={100 + 72 * Math.sin(a)} y2={100 - 72 * Math.cos(a)}
            stroke={i / 27 > 0.8 ? '#e1262d' : dark ? 'rgba(255,255,255,.45)' : '#98a1b3'}
            strokeWidth={long ? 2 : 1}
          />
        )
      })}
      <circle cx="100" cy="100" r={r} fill="none" stroke={dark ? '#182030' : '#eef0f4'} strokeWidth="8"
        strokeDasharray={`${circ} ${Math.PI * 2 * r}`} transform="rotate(135 100 100)" strokeLinecap="round" />
      <motion.circle cx="100" cy="100" r={r} fill="none" stroke="#e1262d" strokeWidth="8" strokeLinecap="round"
        transform="rotate(135 100 100)"
        initial={{ strokeDasharray: `0 ${Math.PI * 2 * r}` }}
        animate={{ strokeDasharray: `${circ * value} ${Math.PI * 2 * r}` }}
        transition={{ type: 'spring', stiffness: 60, damping: 16 }} />
      <motion.g initial={{ rotate: -135 }} animate={{ rotate: angle }} transition={{ type: 'spring', stiffness: 70, damping: 12 }}
        style={{ originX: 0.5, originY: 0.5 }}>
        {/* invisible disc centres the group's bbox on the pivot so rotation is about (100,100) */}
        <circle cx="100" cy="100" r="64" fill="transparent" />
        <polygon points="97,100 103,100 100,38" fill="#e1262d" />
      </motion.g>
      <circle cx="100" cy="100" r="9" fill="#e1262d" />
      <circle cx="100" cy="100" r="4" fill={dark ? '#0b0f16' : '#fff'} />
      {label && <text x="100" y="146" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="800" fontSize="24" fill={dark ? '#fff' : '#1a2130'}>{label}</text>}
      {sub && <text x="100" y="164" textAnchor="middle" fontSize="9" letterSpacing="2" fill="#8a94a6">{sub}</text>}
    </svg>
  )
}

export function WhatsAppIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.37 9.37 0 0 1 6.67 2.77 9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43M20.1 3.9A11.3 11.3 0 0 0 12.05.56C5.78.56.67 5.67.67 11.95c0 2 .52 3.96 1.52 5.69L.57 23.5l6-1.57a11.4 11.4 0 0 0 5.45 1.39h.01c6.27 0 11.38-5.11 11.38-11.39 0-3.04-1.18-5.9-3.33-8.05" />
    </svg>
  )
}

export function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}
