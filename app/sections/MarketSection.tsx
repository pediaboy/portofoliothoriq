'use client'
import { useEffect, useRef, useState } from 'react'
import { Eye, Target, CheckCircle } from 'lucide-react'

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

const services = [
  { title: 'Web Development', icon: '💻', desc: 'Membangun website dan web app modern, responsif, dan berkinerja tinggi.', color: '#00d4ff' },
  { title: 'System Development', icon: '🛠', desc: 'Membangun sistem backend, API, database, dan arsitektur scalable.', color: '#0066ff' },
  { title: 'Automation', icon: '⚙️', desc: 'Otomasi proses bisnis, workflow, dan sistem notifikasi cerdas.', color: '#7c3aed' },
  { title: 'Data Analysis', icon: '📊', desc: 'Analisa data bisnis, visualisasi, dan laporan interaktif berbasis data.', color: '#22c55e' },
  { title: 'Trading Analysis', icon: '📈', desc: 'Analisa teknikal & fundamental saham dan crypto untuk keputusan trading.', color: '#f59e0b' },
  { title: 'Financial Technology', icon: '🏦', desc: 'Pengembangan aplikasi fintech, payment gateway, dan sistem keuangan.', color: '#0066ff' },
  { title: 'AI Development', icon: '🤖', desc: 'Integrasi AI dan machine learning dalam produk digital.', color: '#a78bfa' },
  { title: 'Consulting', icon: '🎯', desc: 'Konsultasi strategi teknologi, arsitektur sistem, dan growth digital.', color: '#00d4ff' },
]

export default function MarketSection() {
  const { ref, visible } = useReveal()
  const [hovered, setHovered] = useState<number | null>(null)

  const missions = [
    'Terus belajar dan berkembang',
    'Membangun produk digital yang bermanfaat',
    'Mengembangkan teknologi berbasis data',
    'Membantu lebih banyak orang melalui teknologi',
  ]

  return (
    <>
      {/* VISION & MISSION */}
      <section id="vision" ref={ref} style={{ padding: '100px 24px', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.7s ease' }}>
            <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}><Eye size={12} /> Vision & Mission</div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
              Visi & <span className="gradient-text">Misi</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 80 }} className="vm-grid">
            {/* Vision */}
            <div style={{ background: 'rgba(7,20,51,0.65)', border: '1px solid rgba(0,102,255,0.25)', borderRadius: 20, padding: 36, backdropFilter: 'blur(24px)', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-24px)', transition: 'all 0.8s ease 0.1s' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(0,102,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>👁</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 14 }}>VISI</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(203,213,225,0.85)' }}>
                Menjadi developer dan trader yang mampu membangun sistem yang bermanfaat, efisien, dan memiliki dampak nyata bagi banyak orang.
              </p>
              <div style={{ marginTop: 24, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #0066ff, #00d4ff, transparent)' }} />
            </div>

            {/* Mission */}
            <div style={{ background: 'rgba(7,20,51,0.65)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 20, padding: 36, backdropFilter: 'blur(24px)', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(24px)', transition: 'all 0.8s ease 0.2s' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(124,58,237,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>🎯</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 14 }}>MISI</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {missions.map((m, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 14, color: 'rgba(203,213,225,0.85)', lineHeight: 1.5 }}>{m}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #7c3aed, transparent)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" style={{ padding: '0 24px 100px', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>🏆 Achievements</div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
              Pencapaian <span className="gradient-text">Utama</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="ach-grid">
            {[
              { icon: '🚀', title: '50+ Projects', desc: 'Berbagai project web, sistem, dan platform yang telah berhasil didelivery.', color: '#00d4ff' },
              { icon: '📈', title: '3+ Tahun Trading', desc: 'Konsisten trading saham & crypto dengan pendekatan data-driven.', color: '#22c55e' },
              { icon: '🤖', title: 'AI Integration', desc: 'Berhasil mengintegrasikan AI ke dalam beberapa platform digital.', color: '#7c3aed' },
              { icon: '⚡', title: 'Full-Stack Mastery', desc: 'Menguasai end-to-end development dari UI hingga database & deployment.', color: '#0066ff' },
              { icon: '🌐', title: 'Platform Aktif', desc: 'RITEL COMMUNITY.ID — platform trader aktif dengan ribuan pengguna.', color: '#f59e0b' },
              { icon: '💡', title: '8 Tahun Journey', desc: 'Perjalanan panjang dari pemula hingga developer & trader profesional.', color: '#00d4ff' },
            ].map((a, i) => (
              <div key={i} style={{
                background: 'rgba(7,20,51,0.6)', border: `1px solid rgba(0,212,255,0.12)`,
                borderRadius: 16, padding: '24px 22px', backdropFilter: 'blur(16px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${a.color}40`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px rgba(0,0,0,0.3)` }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{a.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: a.color, marginBottom: 8 }}>{a.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(148,163,184,0.8)', lineHeight: 1.6 }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.ach-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '0 24px 100px', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              <Target size={12} /> What I Do
            </div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
              Layanan & <span className="gradient-text">Keahlian</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }} className="svc-grid">
            {services.map((s, i) => (
              <div key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: 'rgba(7,20,51,0.6)', border: `1px solid ${hovered === i ? s.color + '45' : 'rgba(0,212,255,0.12)'}`,
                  borderRadius: 16, padding: '24px 20px', backdropFilter: 'blur(16px)',
                  cursor: 'default', transition: 'all 0.3s ease',
                  transform: hovered === i ? 'translateY(-5px)' : 'none',
                  boxShadow: hovered === i ? `0 12px 40px rgba(0,0,0,0.35), 0 0 24px ${s.color}15` : 'none',
                }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#e2e8f0', marginBottom: 8, lineHeight: 1.3 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: 'rgba(148,163,184,0.75)', lineHeight: 1.6 }}>{s.desc}</div>
                <div style={{ marginTop: 16, height: 2, borderRadius: 1, background: `linear-gradient(90deg, ${s.color}, transparent)`, opacity: hovered === i ? 1 : 0.3, transition: 'opacity 0.3s' }} />
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}} @media(max-width:500px){.svc-grid{grid-template-columns:1fr!important}} @media(max-width:768px){.vm-grid{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  )
}
