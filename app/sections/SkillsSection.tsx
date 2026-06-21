'use client'
import { useEffect, useRef, useState } from 'react'
import { Cpu } from 'lucide-react'

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

const skills = [
  { name: 'Next.js', pct: 92, color: '#00d4ff' },
  { name: 'React', pct: 90, color: '#0066ff' },
  { name: 'TypeScript', pct: 85, color: '#7c3aed' },
  { name: 'Tailwind CSS', pct: 93, color: '#00d4ff' },
  { name: 'Node.js', pct: 80, color: '#22c55e' },
  { name: 'Supabase', pct: 88, color: '#3b82f6' },
  { name: 'Database', pct: 82, color: '#0066ff' },
  { name: 'Automation', pct: 85, color: '#7c3aed' },
  { name: 'API Integration', pct: 90, color: '#00d4ff' },
  { name: 'AI Development', pct: 78, color: '#a78bfa' },
  { name: 'Trading Analysis', pct: 88, color: '#22c55e' },
  { name: 'Data Analytics', pct: 82, color: '#f59e0b' },
]

export default function SkillsSection() {
  const { ref, visible } = useReveal()
  const [animate, setAnimate] = useState(false)
  useEffect(() => { if (visible) setTimeout(() => setAnimate(true), 200) }, [visible])

  return (
    <section id="skills" ref={ref} style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.7s ease' }}>
          <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>
            <Cpu size={12} /> Tech Stack
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(148,163,184,0.8)', marginTop: 12, maxWidth: 500, margin: '12px auto 0' }}>
            Teknologi yang digunakan dalam membangun sistem dan produk digital
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="skills-grid">
          {skills.map((sk, i) => (
            <div key={i} style={{
              background: 'rgba(7,20,51,0.6)', border: '1px solid rgba(0,212,255,0.1)',
              borderRadius: 14, padding: '18px 22px', backdropFilter: 'blur(16px)',
              opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
              transition: `all 0.6s ease ${i * 0.06}s`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#e2e8f0' }}>{sk.name}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: sk.color }}>{sk.pct}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: animate ? `${sk.pct}%` : '0%', background: `linear-gradient(90deg, ${sk.color}80, ${sk.color})`, boxShadow: `0 0 12px ${sk.color}60`, transitionDelay: `${i * 0.06}s` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.skills-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
