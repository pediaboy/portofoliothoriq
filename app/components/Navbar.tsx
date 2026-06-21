'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Market', href: '#market' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5, ease: [0.22,1,0.36,1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
      >
        <div className={`mx-4 sm:mx-auto sm:max-w-6xl rounded-2xl px-6 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-lg shadow-black/50 py-3' : 'py-4'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('#hero')}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.25), rgba(0,102,255,0.25))', border: '1px solid rgba(0,212,255,0.4)' }}>
                <span className="text-sm font-black" style={{ color: '#00d4ff', fontFamily: 'JetBrains Mono, monospace' }}>T</span>
              </div>
              <span className="font-bold text-white text-sm hidden sm:block tracking-wide">THIRAFI</span>
            </motion.button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map(link => (
                <button key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-xl transition-all duration-200 hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('#contact')}
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              >
                Hubungi Saya
              </motion.button>
            </div>

            {/* Mobile menu */}
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl" style={{ color: '#00d4ff' }}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 glass-strong rounded-2xl p-4"
          >
            {links.map((link, i) => (
              <motion.button key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-white rounded-xl hover:bg-white/5 transition-all text-sm font-medium"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              onClick={() => scrollTo('#contact')}
              className="w-full mt-2 btn-primary py-3 rounded-xl text-sm font-semibold text-white"
            >
              Hubungi Saya
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
