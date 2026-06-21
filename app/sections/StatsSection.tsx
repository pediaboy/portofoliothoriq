'use client'
import { useEffect, useRef, useState } from 'react'
import { BarChart2, TrendingUp } from 'lucide-react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function Counter({ target, suffix = '', duration = 1800 }: { target: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, visible } = useReveal()
  const started = useRef(false)
  useEffect(() => {
    if (visible && !started.current) {
      started.current = true
      const start = Date.now()
      const step = () => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
  }, [visible])
  return <span ref={ref}>{count}{suffix}</span>
}

// Animated SVG chart (dummy, no API)
function AnimatedChart() {
  const [phase, setPhase] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setPhase(p => (p + 1) % 100), 80)
    return () => clearInterval(id)
  }, [])

  const basePoints = [10,45,30,60,40,55,35,65,50,70,45,75,60,55,72,48,80,62,70,85]
  const w = 400, h = 120, n = basePoints.length
  const pts = basePoints.map((y, i) => {
    const wave = Math.sin((i / n + phase / 100) * Math.PI * 2) * 8
    return { x: (i / (n-1)) * w, y: h - (y + wave) }
  })
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
  const area = `${d} L${w},${h} L0,${h} Z`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 120 }} preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0066ff" />
          <stop offset="50%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#chartGrad)" />
      <path d={d} fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Glowing dot at end */}
      <circle cx={pts[pts.length-1].x} cy={pts[pts.length-1].y} r="5" fill="#00d4ff" opacity="0.9">
        <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

const statsData = [
  { label: 'Projects Completed', val: 50, suffix: '+', icon: '🚀', color: '#00d4ff' },
  { label: 'Years Experience', val: 6, suffix: '+', icon: '⚡', color: '#0066ff' },
  { label: 'Systems Developed', val: 20, suffix: '+', icon: '🛠', color: '#7c3aed' },
  { label: 'Technology Stack', val: 15, suffix: '+', icon: '💻', color: '#22c55e' },
]

export default function StatsSection() {
  const { ref, visible } = useReveal()

  return (
    <section id="experience" ref={ref} style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.7s ease' }}>
          <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>
            <BarChart2 size={12} /> Portfolio Analytics
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
            Hasil & <span className="gradient-text">Pencapaian</span>
          </h2>
        </div>

        {/* Chart card */}
        <div style={{
          background: 'rgba(7,20,51,0.65)', border: '1px solid rgba(0,212,255,0.15)',
          borderRadius: 20, padding: '28px 28px 20px', backdropFilter: 'blur(24px)',
          marginBottom: 28,
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.8s ease',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 13, color: '#94a3b8', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                <TrendingUp size={13} color="#00d4ff" /> Portfolio Growth
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#fff' }}>
                <Counter target={50} suffix="+" />
                <span style={{ fontSize: 14, color: '#94a3b8', fontWeight: 400, marginLeft: 8 }}>Total Projects</span>
              </div>
              <div style={{ fontSize: 13, color: '#22c55e', marginTop: 4 }}>↑ Consistent Growth</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>2018 → 2026</div>
              <div style={{ fontSize: 13, color: '#00d4ff', fontWeight: 600 }}>8 Years Journey</div>
            </div>
          </div>
          <AnimatedChart />
          {/* X labels */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: 'rgba(148,163,184,0.5)' }}>
            {['2018','2019','2020','2021','2022','2023','2024','2025','2026'].map(y => <span key={y}>{y}</span>)}
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="stats4-grid">
          {statsData.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(7,20,51,0.6)', border: '1px solid rgba(0,212,255,0.12)',
              borderRadius: 16, padding: '24px 20px', backdropFilter: 'blur(16px)',
              textAlign: 'center',
              opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
              transition: `all 0.7s ease ${i * 0.1}s`,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${s.color}50`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 32, fontWeight: 900, color: s.color }}>
                <Counter target={s.val} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 13, color: 'rgba(148,163,184,0.8)', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.stats4-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  )
}
