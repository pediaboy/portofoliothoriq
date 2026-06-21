'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Code2, TrendingUp } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'vision', label: 'Vision' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navItems.map(n => document.getElementById(n.id)).filter(Boolean)
      let current = 'hero'
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 120) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '10px 0' : '18px 0',
        background: scrolled ? 'rgba(2,8,24,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div onClick={() => scrollTo('hero')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: 16, color: '#fff',
              boxShadow: '0 0 20px rgba(0,212,255,0.4)',
            }}>T</div>
            <span style={{ fontWeight: 700, fontSize: 15, color: '#fff', letterSpacing: 0.5 }}>THIRAFI</span>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden md:flex">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} style={{
                padding: '8px 14px',
                background: active === item.id ? 'rgba(0,212,255,0.1)' : 'transparent',
                border: active === item.id ? '1px solid rgba(0,212,255,0.3)' : '1px solid transparent',
                borderRadius: 8,
                color: active === item.id ? '#00d4ff' : 'rgba(226,232,240,0.75)',
                fontSize: 13, fontWeight: 500, cursor: 'pointer',
                transition: 'all 0.25s ease',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => { if (active !== item.id) { (e.target as HTMLElement).style.color = '#00d4ff'; (e.target as HTMLElement).style.background = 'rgba(0,212,255,0.06)' } }}
              onMouseLeave={e => { if (active !== item.id) { (e.target as HTMLElement).style.color = 'rgba(226,232,240,0.75)'; (e.target as HTMLElement).style.background = 'transparent' } }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button onClick={() => scrollTo('contact')} style={{
              padding: '9px 20px',
              background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
              border: 'none', borderRadius: 9,
              color: '#fff', fontSize: 13, fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.3s ease',
              fontFamily: 'inherit',
              boxShadow: '0 0 20px rgba(0,102,255,0.35)',
            }}>
              Let's Talk ✦
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{
              background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: 8, width: 38, height: 38, display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer', color: '#00d4ff',
            }} className="md:hidden">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: 'rgba(2,8,24,0.97)', backdropFilter: 'blur(32px)',
          borderBottom: '1px solid rgba(0,212,255,0.1)',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} style={{
              padding: '12px 16px', textAlign: 'left',
              background: active === item.id ? 'rgba(0,212,255,0.1)' : 'transparent',
              border: active === item.id ? '1px solid rgba(0,212,255,0.2)' : '1px solid transparent',
              borderRadius: 8, color: active === item.id ? '#00d4ff' : '#cbd5e1',
              fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
