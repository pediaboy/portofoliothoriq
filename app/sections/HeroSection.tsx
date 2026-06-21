'use client'
import { useEffect, useState } from 'react'
import { ArrowRight, Mail, ChevronDown, Code2, TrendingUp, Zap, Star, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  const [visible, setVisible] = useState(false)
  const [typed, setTyped] = useState('')
  const titles = ['Web Developer', 'System Builder', 'Trader & Analyst', 'AI Enthusiast']
  const [titleIdx, setTitleIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const current = titles[titleIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!isDeleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 80)
    } else if (isDeleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 45)
    } else if (!isDeleting && typed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else {
      setIsDeleting(false)
      setTitleIdx((i) => (i + 1) % titles.length)
    }
    return () => clearTimeout(timeout)
  }, [typed, isDeleting, titleIdx])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const stats = [
    { icon: <Code2 size={18} />, val: '6+', label: 'Years Web Dev' },
    { icon: <TrendingUp size={18} />, val: '3+', label: 'Years Trading' },
    { icon: <Zap size={18} />, val: '50+', label: 'Projects Built' },
    { icon: <Star size={18} />, val: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', padding: '120px 24px 80px', overflow: 'hidden' }}>
      {/* BG radial glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 600, background: 'radial-gradient(ellipse, rgba(0,102,255,0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '40%', right: '5%', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }} className="hero-grid">

          {/* LEFT */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all 0.9s cubic-bezier(0.4,0,0.2,1)' }}>
            {/* Badge */}
            <div style={{ marginBottom: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span className="section-label" style={{ marginBottom: 0 }}>
                <span style={{width:6,height:6,borderRadius:'50%',background:'#22c55e',display:'inline-block'}} />
                Available for Projects
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 100, padding: '6px 14px', fontSize: 12, fontWeight: 600, color: '#a78bfa', letterSpacing: '0.05em' }}>
                <Code2 size={11} /> WEB DEVELOPER · TRADER · CRYPTO ENTHUSIAST
              </span>
            </div>

            {/* Name */}
            <h1 style={{ fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 8, letterSpacing: '-1px' }}>
              <span style={{ display: 'block', color: '#fff' }}>THIRAFI</span>
              <span style={{ display: 'block', background: 'linear-gradient(135deg, #00d4ff, #0066ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>THARIQ</span>
              <span style={{ display: 'block', color: 'rgba(255,255,255,0.85)' }}>AL IDRIS</span>
            </h1>

            {/* Subtitle badges */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '20px 0 24px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,102,255,0.15)', border: '1px solid rgba(0,102,255,0.3)', borderRadius: 6, padding: '5px 12px', fontSize: 13, fontWeight: 600, color: '#60a5fa', letterSpacing: '0.05em' }}>
                <Code2 size={12} /> WEB DEVELOPMENT SEJAK 2018
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 6, padding: '5px 12px', fontSize: 13, fontWeight: 600, color: '#86efac', letterSpacing: '0.05em' }}>
                <TrendingUp size={12} /> TRADING SAHAM & CRYPTO SEJAK 2021
              </span>
            </div>

            {/* Typewriter */}
            <div style={{ fontSize: 20, fontWeight: 600, color: '#00d4ff', fontFamily: 'JetBrains Mono, monospace', marginBottom: 20, minHeight: 32 }}>
              &gt; {typed}<span style={{ borderRight: '2px solid #00d4ff', marginLeft: 1 }}>_</span>
            </div>

            {/* Description */}
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(203,213,225,0.85)', maxWidth: 560, marginBottom: 36 }}>
              Memulai perjalanan di dunia web development sejak tahun 2018 dan aktif di pasar saham serta cryptocurrency sejak tahun 2021. Fokus pada pengembangan sistem, dashboard, automation, analisa data, financial technology, serta pengembangan solusi digital yang memberikan dampak nyata.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button onClick={() => scrollTo('about')} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 10,
                background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                border: 'none', color: '#fff', fontSize: 14, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'inherit',
                boxShadow: '0 0 24px rgba(0,102,255,0.4)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'none')}>
                About Me <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollTo('projects')} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 10,
                background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.35)',
                color: '#00d4ff', fontSize: 14, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'inherit',
              }}
              onMouseEnter={e => { (e.currentTarget.style.background = 'rgba(0,212,255,0.14)'); (e.currentTarget.style.transform = 'translateY(-2px)') }}
              onMouseLeave={e => { (e.currentTarget.style.background = 'rgba(0,212,255,0.08)'); (e.currentTarget.style.transform = 'none') }}>
                View Projects
              </button>
              <button onClick={() => scrollTo('contact')} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 10,
                background: 'transparent', border: '1px solid rgba(148,163,184,0.2)',
                color: 'rgba(148,163,184,0.8)', fontSize: 14, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'inherit',
              }}
              onMouseEnter={e => { (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.4)'); (e.currentTarget.style.color = '#cbd5e1') }}
              onMouseLeave={e => { (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.2)'); (e.currentTarget.style.color = 'rgba(148,163,184,0.8)') }}>
                <Mail size={15} /> Contact
              </button>
            </div>
          </div>

          {/* RIGHT — Code card */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(40px)', transition: 'all 0.9s cubic-bezier(0.4,0,0.2,1) 0.2s' }} className="hero-code-card">
            <div style={{ width: 320, position: 'relative' }} className="float-anim">
              <div style={{ position: 'absolute', inset: -20, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,102,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
              {/* Code card */}
              <div style={{
                background: 'rgba(4,15,46,0.85)', border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: 16, padding: 24, fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12, lineHeight: 1.8,
                boxShadow: '0 0 40px rgba(0,102,255,0.15), 0 24px 64px rgba(0,0,0,0.5)',
              }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                  <span style={{ marginLeft: 8, color: 'rgba(148,163,184,0.5)', fontSize: 11 }}>developer.ts</span>
                </div>
                <div style={{ color: '#94a3b8' }}>const <span style={{ color: '#00d4ff' }}>developer</span> = {'{'}</div>
                <div style={{ paddingLeft: 20 }}>
                  <div><span style={{ color: '#a78bfa' }}>name</span>: <span style={{ color: '#86efac' }}>"Thirafi Thariq"</span>,</div>
                  <div><span style={{ color: '#a78bfa' }}>passion</span>: [</div>
                  <div style={{ paddingLeft: 16 }}>
                    <div><span style={{ color: '#fbbf24' }}>"Code"</span>,</div>
                    <div><span style={{ color: '#fbbf24' }}>"Trade"</span>,</div>
                    <div><span style={{ color: '#fbbf24' }}>"Build"</span>,</div>
                  </div>
                  <div>],</div>
                  <div><span style={{ color: '#a78bfa' }}>status</span>: <span style={{ color: '#22c55e' }}>"Always Learning"</span>,</div>
                  <div><span style={{ color: '#a78bfa' }}>focus</span>: <span style={{ color: '#86efac' }}>"Problem Solving"</span></div>
                </div>
                <div style={{ color: '#94a3b8' }}>{'}'};</div>
                <div style={{ marginTop: 12, color: '#64748b', fontSize: 11 }}>// Building the future of tech</div>
              </div>

              {/* Floating badges — Lucide icons only */}
              <div style={{ position: 'absolute', top: -16, right: -16, background: 'rgba(0,102,255,0.15)', border: '1px solid rgba(0,102,255,0.35)', borderRadius: 10, padding: '10px 14px', fontSize: 12, fontWeight: 700, color: '#60a5fa', backdropFilter: 'blur(12px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <Star size={16} color="#60a5fa" />
                <div>50+ Projects</div>
              </div>
              <div style={{ position: 'absolute', bottom: -14, left: -14, background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 10, padding: '10px 14px', fontSize: 12, fontWeight: 700, color: '#86efac', backdropFilter: 'blur(12px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <TrendingUp size={16} color="#86efac" />
                <div>Trader Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, opacity: visible ? 1 : 0, transition: 'opacity 0.9s ease 0.5s' }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(7,20,51,0.6)', border: '1px solid rgba(0,212,255,0.12)',
              borderRadius: 14, padding: '20px', display: 'flex', alignItems: 'center', gap: 14,
              backdropFilter: 'blur(16px)', transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(0,102,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d4ff', flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>{s.val}</div>
                <div style={{ fontSize: 12, color: 'rgba(148,163,184,0.8)', marginTop: 2 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.5, cursor: 'pointer', zIndex: 2 }} onClick={() => scrollTo('about')}>
        <span style={{ fontSize: 11, letterSpacing: '0.1em', color: '#94a3b8' }}>SCROLL DOWN</span>
        <ChevronDown size={16} color="#00d4ff" />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-code-card { display: none; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
