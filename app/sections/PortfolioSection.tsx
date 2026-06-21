'use client'
import { useEffect, useRef, useState } from 'react'
import { Briefcase, ExternalLink, ArrowUpRight } from 'lucide-react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

const projects = [
  { title: 'RITEL COMMUNITY.ID', cat: 'Web Platform', tags: ['Next.js', 'Supabase', 'FastAPI'], desc: 'Platform komunitas trader Indonesia dengan screener saham, analisa teknikal, dan sistem membership premium.', emoji: '📊', color: '#0066ff', year: '2024' },
  { title: 'RITEL COMMUNITY AI', cat: 'AI & Analytics', tags: ['Next.js', 'OpenAI', 'Python'], desc: 'Sistem AI untuk analisa saham, rekomendasi trading, dan pembuatan laporan otomatis berbasis machine learning.', emoji: '🤖', color: '#7c3aed', year: '2024' },
  { title: 'Trading Dashboard', cat: 'Dashboard', tags: ['React', 'TailwindCSS', 'API'], desc: 'Dashboard trading real-time dengan chart interaktif, portfolio tracker, dan notifikasi sinyal.', emoji: '📈', color: '#00d4ff', year: '2023' },
  { title: 'Market Scanner', cat: 'Web App', tags: ['Next.js', 'Python', 'Pandas'], desc: 'Scanner pasar saham Indonesia dengan filter teknikal, screening otomatis, dan export laporan.', emoji: '🔍', color: '#22c55e', year: '2023' },
  { title: 'Crypto Analytics', cat: 'Analytics', tags: ['Next.js', 'API', 'Chart.js'], desc: 'Platform analisa cryptocurrency dengan heatmap, tracking portofolio, dan kalkulasi profit/loss otomatis.', emoji: '🪙', color: '#f59e0b', year: '2022' },
  { title: 'Portfolio Website', cat: 'Web System', tags: ['Next.js', 'TypeScript', 'Tailwind'], desc: 'Website portofolio premium dengan design futuristik, animasi smooth, dan showcase project.', emoji: '🌐', color: '#00d4ff', year: '2026' },
]

export default function PortfolioSection() {
  const { ref, visible } = useReveal()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.7s ease' }}>
            <div className="section-label" style={{ display: 'inline-flex' }}>
              <Briefcase size={12} /> Featured Projects
            </div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
              Project <span className="gradient-text">Showcase</span>
            </h2>
          </div>
          <div style={{ fontSize: 13, color: '#00d4ff', fontWeight: 600, opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.3s', display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
            View All Projects <ArrowUpRight size={14} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="proj-grid">
          {projects.map((p, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: 'rgba(7,20,51,0.6)', border: `1px solid ${hovered === i ? p.color + '50' : 'rgba(0,212,255,0.12)'}`,
                borderRadius: 18, overflow: 'hidden', backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                opacity: visible ? 1 : 0, transform: visible ? (hovered === i ? 'translateY(-6px)' : 'none') : 'translateY(24px)',
                transition: `all 0.5s ease ${i * 0.08}s`,
                boxShadow: hovered === i ? `0 16px 48px rgba(0,0,0,0.4), 0 0 30px ${p.color}20` : 'none',
              }}>
              {/* Card header */}
              <div style={{ padding: '28px 24px 20px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 20, right: 20, width: 36, height: 36, borderRadius: 10, background: `${p.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ExternalLink size={14} color={p.color} />
                </div>
                <div style={{ fontSize: 40, marginBottom: 14 }}>{p.emoji}</div>
                <div style={{ fontSize: 10, color: p.color, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{p.cat} · {p.year}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(148,163,184,0.8)', lineHeight: 1.6, marginBottom: 0 }}>{p.desc}</p>
              </div>
              {/* Tags */}
              <div style={{ padding: '0 24px 24px', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.tags.map((tag, j) => (
                  <span key={j} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: '4px 10px', fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
              {/* Hover bottom bar */}
              <div style={{ height: 3, background: `linear-gradient(90deg, ${p.color}, transparent)`, opacity: hovered === i ? 1 : 0, transition: 'opacity 0.3s ease' }} />
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.proj-grid{grid-template-columns:repeat(2,1fr)!important}} @media(max-width:580px){.proj-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
