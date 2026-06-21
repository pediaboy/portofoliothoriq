'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Send, Mail, Instagram, Github, ArrowRight } from 'lucide-react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22,1,0.36,1] }} className={className}>
      {children}
    </motion.div>
  )
}

const contacts = [
  {
    icon: MessageCircle, label: 'WhatsApp',
    value: '082218723401', href: 'https://wa.me/6282218723401',
    desc: 'Chat langsung, respons cepat', color: '#00ff88',
  },
  {
    icon: Send, label: 'Telegram',
    value: '@thirafi_thariq', href: 'https://t.me/thirafi_thariq',
    desc: 'Diskusi project lebih detail', color: '#00d4ff',
  },
  {
    icon: Mail, label: 'Email',
    value: 'thirafi.thariq@gmail.com', href: 'mailto:thirafi.thariq@gmail.com',
    desc: 'Brief, proposal, atau inquiry', color: '#7c3aed',
  },
  {
    icon: Instagram, label: 'Instagram',
    value: '@thirafi_thariq', href: 'https://instagram.com/thirafi_thariq',
    desc: 'Update project dan konten', color: '#ec4899',
  },
  {
    icon: Github, label: 'GitHub',
    value: 'pediaboy', href: 'https://github.com/pediaboy',
    desc: 'Source code dan project open source', color: '#94a3b8',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative section-padding">
      <div className="max-w-5xl mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-slate-400 tracking-widest uppercase">Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Mulai <span className="gradient-text">Percakapan</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Punya project menarik atau sekadar ingin diskusi? Gua selalu terbuka untuk kolaborasi.
          </p>
        </FadeIn>

        {/* CTA Banner */}
        <FadeIn delay={0.1} className="mb-10">
          <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center neon-border relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.08) 0%, transparent 70%)' }} />
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 relative z-10">
              Siap Membangun Sesuatu yang <span className="gradient-text">Luar Biasa?</span>
            </h3>
            <p className="text-slate-400 mb-8 relative z-10">Dari ide ke produk nyata. Let&apos;s build together.</p>
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href="https://wa.me/6282218723401?text=Halo%20Thirafi%2C%20saya%20ingin%20berdiskusi%20tentang%20project"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-base relative z-10"
            >
              <MessageCircle size={20} />
              Mulai Diskusi Sekarang
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </FadeIn>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.08}>
              <motion.a
                href={c.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="glass-strong rounded-2xl p-5 neon-border flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}40` }}>
                  <c.icon size={20} style={{ color: c.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold mb-0.5" style={{ color: c.color }}>{c.label}</p>
                  <p className="text-white font-medium text-sm truncate">{c.value}</p>
                  <p className="text-slate-500 text-xs">{c.desc}</p>
                </div>
                <ArrowRight size={14} className="text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </motion.a>
            </FadeIn>
          ))}
        </div>

        {/* Footer */}
        <FadeIn delay={0.5} className="mt-20 pt-10 border-t border-blue-900/20 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)' }}>
              <span className="text-sm font-black" style={{ color: '#00d4ff', fontFamily: 'JetBrains Mono, monospace' }}>T</span>
            </div>
            <span className="font-black text-white tracking-widest text-sm">THIRAFI THARIQ AL IDRIS</span>
          </div>
          <p className="text-slate-600 text-xs mb-1">
            Copyright © {new Date().getFullYear()} Thirafi Thariq Al Idris. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built with{' '}
            <span style={{ color: '#00d4ff' }}>Next.js</span>,{' '}
            <span style={{ color: '#7c3aed' }}>TypeScript</span>,{' '}
            <span style={{ color: '#38bdf8' }}>Tailwind CSS</span> &{' '}
            <span style={{ color: '#ec4899' }}>Framer Motion</span>
          </p>
          <p className="text-slate-700 text-xs mt-1">
            Development by <span style={{ color: '#00d4ff' }} className="font-semibold">THIRAFI THARIQ AL IDRIS</span>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
