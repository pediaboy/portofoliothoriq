'use client'
import { useEffect, useRef, useState } from 'react'
import { Mail, MessageCircle, Instagram, Send, MapPin, Code2, ChevronRight } from 'lucide-react'

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

const contacts = [
  {
    icon: <Mail size={22} />, label: 'Email', val: 'thoriqpedia@gmail.com',
    href: 'mailto:thoriqpedia@gmail.com', color: '#00d4ff',
    bg: 'rgba(0,212,255,0.07)', border: 'rgba(0,212,255,0.2)',
  },
  {
    icon: <MessageCircle size={22} />, label: 'WhatsApp', val: '082218723401',
    href: 'https://wa.me/6282218723401', color: '#22c55e',
    bg: 'rgba(34,197,94,0.07)', border: 'rgba(34,197,94,0.2)',
  },
  {
    icon: <Instagram size={22} />, label: 'Instagram', val: '@elthoriqqqq_',
    href: 'https://instagram.com/elthoriqqqq_', color: '#e879f9',
    bg: 'rgba(232,121,249,0.07)', border: 'rgba(232,121,249,0.2)',
  },
]

const builtWith = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']

export default function ContactSection() {
  const { ref, visible } = useReveal()

  return (
    <>
      <section id="contact" ref={ref} style={{ padding: '100px 24px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(0,102,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.7s ease' }}>
            <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              <Send size={12} /> Get In Touch
            </div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
              Mari <span className="gradient-text">Berkolaborasi</span>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(148,163,184,0.8)', marginTop: 12, maxWidth: 480, margin: '12px auto 0' }}>
              Punya project menarik? Mari diskusikan dan wujudkan ide Anda menjadi kenyataan.
            </p>
          </div>

          {/* CTA Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,102,255,0.12), rgba(124,58,237,0.10))',
            border: '1px solid rgba(0,102,255,0.22)',
            borderRadius: 20, padding: '40px',
            backdropFilter: 'blur(24px)',
            marginBottom: 28, textAlign: 'center',
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.1s',
          }}>
            <div style={{ width: 64, height: 64, borderRadius: 18, background: 'linear-gradient(135deg, rgba(0,102,255,0.2), rgba(0,212,255,0.15))', border: '1px solid rgba(0,212,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#00d4ff' }}>
              <Send size={26} />
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Punya Project Menarik?</h3>
            <p style={{ fontSize: 14, color: 'rgba(203,213,225,0.8)', marginBottom: 28 }}>Mari wujudkan ide dan project Anda menjadi nyata.</p>
            <a href="https://wa.me/6282218723401" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 32px', borderRadius: 10,
              background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
              border: 'none', color: '#fff', fontSize: 15, fontWeight: 700,
              cursor: 'pointer', textDecoration: 'none',
              boxShadow: '0 0 30px rgba(0,102,255,0.45)',
              transition: 'all 0.3s ease',
            }}>
              <MessageCircle size={17} /> Let's Work Together <ChevronRight size={16} />
            </a>
          </div>

          {/* Contact cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.3s' }} className="contact-grid">
            {contacts.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{
                background: c.bg, border: `1px solid ${c.border}`,
                borderRadius: 16, padding: '24px 20px', textDecoration: 'none',
                backdropFilter: 'blur(16px)', display: 'block',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px rgba(0,0,0,0.3)` }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${c.color}18`, border: `1px solid ${c.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color, marginBottom: 14 }}>{c.icon}</div>
                <div style={{ fontSize: 11, color: 'rgba(148,163,184,0.6)', fontWeight: 600, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#e2e8f0' }}>{c.val}</div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: 'rgba(148,163,184,0.5)', fontSize: 13 }}>
            <MapPin size={13} /> Indonesia — Available for Remote Collaboration
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid rgba(0,212,255,0.08)',
        background: 'rgba(2,8,24,0.95)', backdropFilter: 'blur(24px)',
        padding: '48px 24px 32px', position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.35), transparent)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 40, alignItems: 'start', marginBottom: 32 }} className="footer-grid">
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #0066ff, #00d4ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 15, color: '#fff', boxShadow: '0 0 16px rgba(0,102,255,0.4)' }}>T</div>
                <span style={{ fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: 0.3 }}>THIRAFI THARIQ AL IDRIS</span>
              </div>
              <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.8 }}>
                Web Developer Since 2018<br />
                Trading Saham & Crypto Since 2021
              </div>
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontSize: 12, color: 'rgba(148,163,184,0.5)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="mailto:thoriqpedia@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}>
                  <Mail size={13} /> thoriqpedia@gmail.com
                </a>
                <a href="https://instagram.com/elthoriqqqq_" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}>
                  <Instagram size={13} /> @elthoriqqqq_
                </a>
                <a href="https://wa.me/6282218723401" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}>
                  <MessageCircle size={13} /> 082218723401
                </a>
              </div>
            </div>

            {/* Built with */}
            <div>
              <div style={{ fontSize: 12, color: 'rgba(148,163,184,0.5)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Built With</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {builtWith.map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#64748b' }}>
                    <Code2 size={11} color="#334155" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
            <div style={{ fontSize: 13, color: 'rgba(148,163,184,0.4)' }}>
              © 2026 THIRAFI THARIQ AL IDRIS. All Rights Reserved.
            </div>
            <div style={{ fontSize: 13, color: 'rgba(0,212,255,0.5)' }}>
              Development by THIRAFI THARIQ AL IDRIS
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:768px){
            .footer-grid{grid-template-columns:1fr!important}
            .contact-grid{grid-template-columns:1fr!important}
          }
        `}</style>
      </footer>
    </>
  )
}
