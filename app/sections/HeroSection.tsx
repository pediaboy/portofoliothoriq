'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Instagram, Send, MessageCircle } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/pediaboy', label: 'GitHub' },
  { icon: Send, href: 'https://t.me/thirafi_thariq', label: 'Telegram' },
  { icon: MessageCircle, href: 'https://wa.me/6282218723401', label: 'WhatsApp' },
  { icon: Instagram, href: 'https://instagram.com/thirafi_thariq', label: 'Instagram' },
]

const roles = ['Web Developer', 'Trader Saham & Crypto', 'AI Enthusiast', 'System Builder']

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[400, 600, 800, 1000].map((size, i) => (
          <motion.div key={size}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 30 + i * 10, repeat: Infinity, ease: 'linear' }}
            className="absolute rounded-full border border-blue-500/5"
            style={{ width: size, height: size }}
          />
        ))}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-slate-300 tracking-widest uppercase font-medium">Available for Projects</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7, ease: [0.22,1,0.36,1] }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mb-3">
              <span className="text-white">THIRAFI</span>
              <br />
              <span className="gradient-text neon-text">THARIQ</span>
              <br />
              <span className="text-slate-400 text-3xl sm:text-4xl lg:text-5xl font-bold">AL IDRIS</span>
            </h1>
          </motion.div>

          {/* Roles ticker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2.9 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-0.5" style={{ background: 'linear-gradient(90deg, #00d4ff, transparent)' }} />
            <div className="flex gap-2 flex-wrap">
              {['WEB DEVELOPER', 'SEJAK 2018'].map((tag, i) => (
                <span key={i} className="text-xs font-bold tracking-widest px-3 py-1 rounded-full"
                  style={{ color: '#00d4ff', border: '1px solid rgba(0,212,255,0.3)', background: 'rgba(0,212,255,0.05)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 3.0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-0.5" style={{ background: 'linear-gradient(90deg, #7c3aed, transparent)' }} />
            <div className="flex gap-2 flex-wrap">
              {['TRADER SAHAM & CRYPTO', 'SEJAK 2021'].map((tag, i) => (
                <span key={i} className="text-xs font-bold tracking-widest px-3 py-1 rounded-full"
                  style={{ color: '#7c3aed', border: '1px solid rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.05)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Desc */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.1 }}
            className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg"
          >
            Berfokus pada <span className="text-white font-medium">pengembangan website, sistem digital, automasi, dan AI</span>, serta riset pasar saham dan cryptocurrency. Membangun berbagai platform, dashboard, sistem membership, dan analisa pasar.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.2 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {[
              { label: 'Tentang Saya', id: 'about', primary: true },
              { label: 'Portofolio', id: 'portfolio', primary: false },
              { label: 'Pengalaman', id: 'timeline', primary: false },
              { label: 'Kontak', id: 'contact', primary: false },
            ].map(btn => (
              <motion.button key={btn.id}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo(btn.id)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold ${btn.primary ? 'btn-primary text-white' : 'btn-outline'}`}
              >
                {btn.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 3.3 }}
            className="flex items-center gap-3"
          >
            {socials.map(s => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center neon-border transition-all"
                style={{ color: '#00d4ff' }}
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — Profile */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.0, ease: [0.22,1,0.36,1] }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Orbit rings */}
            {[140, 180, 220].map((size, i) => (
              <motion.div key={size}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 8 + i * 4, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full"
                style={{
                  width: size * 2, height: size * 2,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: `1px solid rgba(0,212,255,${0.15 - i * 0.03})`,
                }}
              >
                <div className="absolute w-3 h-3 rounded-full"
                  style={{
                    top: '-6px', left: '50%', transform: 'translateX(-50%)',
                    background: '#00d4ff',
                    boxShadow: '0 0 10px rgba(0,212,255,0.8)'
                  }} />
              </motion.div>
            ))}

            {/* Profile picture */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 rounded-full profile-glow"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.2) 0%, rgba(0,102,255,0.2) 50%, rgba(124,58,237,0.2) 100%)',
                border: '2px solid rgba(0,212,255,0.4)',
              }}
            >
              <div className="w-full h-full rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.1))' }}>
                <span className="text-8xl sm:text-9xl font-black gradient-text"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>T</span>
              </div>

              {/* Floating badges */}
              {[
                { label: '7+ Yrs Dev', x: '-right-4', y: 'top-6', color: '#00d4ff' },
                { label: '4+ Yrs Trade', x: '-left-4', y: 'bottom-6', color: '#7c3aed' },
                { label: '50+ Projects', x: '-right-2', y: 'bottom-10', color: '#00ff88' },
              ].map((badge, i) => (
                <motion.div key={badge.label}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
                  className={`absolute ${badge.x} ${badge.y} glass px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap`}
                  style={{ color: badge.color, border: `1px solid ${badge.color}40` }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => scrollTo('about')}
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={18} className="text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
