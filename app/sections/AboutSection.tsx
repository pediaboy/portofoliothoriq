'use client'
import { useEffect, useRef, useState } from 'react'
import { User, MapPin, Calendar, Globe } from 'lucide-react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

const timelineItems = [
  { year: '2018', title: 'Web Development Journey Started', desc: 'Mulai belajar HTML, CSS, JavaScript, dan membangun project pertama.', color: '#0066ff' },
  { year: '2021', title: 'Trading Saham & Cryptocurrency', desc: 'Terjun ke dunia trading, mempelajari analisa teknikal & fundamental.', color: '#00d4ff' },
  { year: '2022', title: 'System Development & Automation', desc: 'Membangun sistem analisis, dashboard, dan tools trading sendiri.', color: '#7c3aed' },
  { year: '2024', title: 'AI Development & Financial Technology', desc: 'Fokus pada pengembangan AI, edukasi, dan membantu lebih banyak orang.', color: '#22c55e' },
]

export default function AboutSection() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" ref={ref} style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.7s ease' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <User size={12} /> About Me
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
            Perjalanan & <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="about-grid">
          {/* LEFT — Profile card */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-30px)', transition: 'all 0.8s ease 0.1s' }}>
            <div style={{ background: 'rgba(7,20,51,0.6)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: 20, padding: 32, backdropFilter: 'blur(24px)' }}>
              {/* Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
                <div style={{
                  width: 80, height: 80, borderRadius: 20,
                  background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 32, fontWeight: 900, color: '#fff',
                  boxShadow: '0 0 30px rgba(0,102,255,0.4)',
                  flexShrink: 0,
                }}>T</div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>Thirafi Thariq</div>
                  <div style={{ fontSize: 13, color: '#00d4ff', marginTop: 4 }}>Web Developer & Trader</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 6, fontSize: 12, color: '#94a3b8' }}>
                    <MapPin size={11} /> Indonesia
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(203,213,225,0.85)', marginBottom: 24 }}>
                Developer dan trader profesional yang fokus pada membangun sistem yang memberikan nilai nyata. Memiliki pengalaman luas dalam web development, system engineering, dan financial market analysis.
              </p>

              {[
                { icon: <Calendar size={14} />, label: 'Web Dev Since', val: '2018' },
                { icon: <Globe size={14} />, label: 'Trading Since', val: '2021' },
                { icon: <User size={14} />, label: 'Focus', val: 'Full-Stack & FinTech' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', fontSize: 13 }}>{item.icon}{item.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Timeline */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(30px)', transition: 'all 0.8s ease 0.2s' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 28 }}>Journey & Experience</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {timelineItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, position: 'relative' }}>
                  {/* Line */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: 14, height: 14, borderRadius: '50%', background: item.color, boxShadow: `0 0 16px ${item.color}`, marginTop: 4, flexShrink: 0 }} />
                    {i < timelineItems.length - 1 && (
                      <div style={{ width: 2, flex: 1, minHeight: 50, background: `linear-gradient(180deg, ${item.color}50, transparent)`, margin: '4px 0' }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ paddingBottom: i < timelineItems.length - 1 ? 28 : 0 }}>
                    <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 6, padding: '3px 10px', fontSize: 12, fontWeight: 700, color: item.color, display: 'inline-block', marginBottom: 8 }}>{item.year}</span>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#e2e8f0', marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: 'rgba(148,163,184,0.8)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
