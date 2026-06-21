'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react'

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

const projects = [
  {
    id: 1, title: 'RITEL COMMUNITY.ID', cat: 'Community Platform',
    desc: 'Platform komunitas trader dan investor Indonesia. Menyediakan analisa pasar, sinyal trading, dan forum diskusi eksklusif untuk anggota.',
    long: 'Platform komunitas trader dan investor Indonesia yang dibangun dengan arsitektur modern. Menggabungkan fitur diskusi, analisa pasar real-time, sistem sinyal trading otomatis, dan manajemen membership premium. Digunakan oleh ratusan trader aktif.',
    tech: ['Next.js', 'Supabase', 'Tailwind', 'FastAPI'],
    color: '#00d4ff', icon: '🌐', featured: true,
    link: 'https://ritelcommunity.id',
  },
  {
    id: 2, title: 'RITEL COMMUNITY AI', cat: 'Artificial Intelligence',
    desc: 'Sistem kecerdasan buatan untuk analisa saham Indonesia. Menggunakan data real-time untuk mengidentifikasi peluang trading.',
    long: 'Sistem AI yang dibangun khusus untuk menganalisa kondisi saham Indonesia secara otomatis. Menggunakan machine learning untuk mengidentifikasi pola, sinyal beli/jual, dan potensi movement berdasarkan data historis dan real-time.',
    tech: ['Python', 'FastAPI', 'AI/ML', 'Supabase'],
    color: '#7c3aed', icon: '🤖', featured: true,
    link: '#',
  },
  {
    id: 3, title: 'AI MARKET ANALYSIS', cat: 'Analytics System',
    desc: 'Sistem analisa pasar berbasis AI dengan kalkulasi teknikal otomatis, screening saham, dan visualisasi data premium.',
    long: 'Platform screener dan analitik pasar yang melakukan kalkulasi teknikal otomatis (MA, MACD, RSI, Bollinger Bands) menggunakan Python pandas. Dilengkapi visualisasi chart interaktif dan sistem alert otomatis.',
    tech: ['Python', 'Pandas', 'Next.js', 'Chart.js'],
    color: '#ec4899', icon: '📊', featured: false,
    link: '#',
  },
  {
    id: 4, title: 'MEMBERSHIP PLATFORM', cat: 'SaaS Platform',
    desc: 'Platform membership premium dengan sistem akses berlapis, manajemen subscriber, dan konten eksklusif terintegrasi.',
    long: 'Sistem membership lengkap dengan berbagai tier akses, pembayaran otomatis, manajemen konten eksklusif, dan dashboard admin. Terintegrasi dengan WhatsApp untuk notifikasi otomatis kepada member.',
    tech: ['Next.js', 'Supabase', 'Stripe', 'WhatsApp API'],
    color: '#10b981', icon: '💎', featured: false,
    link: '#',
  },
  {
    id: 5, title: 'TRADING DASHBOARD', cat: 'Dashboard System',
    desc: 'Dashboard monitoring saham dan market real-time dengan chart interaktif, portfolio tracker, dan analisa otomatis.',
    long: 'Dashboard komprehensif untuk monitoring portfolio dan kondisi pasar. Menampilkan data real-time, chart candlestick interaktif, kalkulasi P&L otomatis, dan laporan performance. Didesain untuk trader aktif.',
    tech: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
    color: '#f59e0b', icon: '📈', featured: false,
    link: '#',
  },
]

export default function PortfolioSection() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)

  return (
    <section id="portfolio" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs text-slate-400 tracking-widest uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Project yang <span className="gradient-text">Sudah Dibuat</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">Setiap project dibangun dengan standar produksi tinggi</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, i) => (
            <FadeIn key={proj.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setSelected(proj)}
                className={`glass-strong rounded-3xl p-6 neon-border cursor-pointer group relative overflow-hidden ${proj.featured ? 'ring-1' : ''}`}
                style={{ borderColor: proj.featured ? `${proj.color}30` : undefined }}
              >
                {proj.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-2 py-1 rounded-full font-bold"
                      style={{ background: `${proj.color}20`, color: proj.color, border: `1px solid ${proj.color}40` }}>
                      Featured
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${proj.color}08, transparent 70%)` }} />

                <div className="text-4xl mb-4">{proj.icon}</div>
                <span className="text-xs font-medium tracking-wider" style={{ color: proj.color }}>{proj.cat}</span>
                <h3 className="text-xl font-black text-white mt-1 mb-3">{proj.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-lg font-medium"
                      style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: proj.color }}>
                  <span>Lihat Detail</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(2,8,24,0.9)', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
              onClick={e => e.stopPropagation()}
              className="glass-strong rounded-3xl p-8 max-w-lg w-full neon-border"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{selected.icon}</div>
                  <div>
                    <span className="text-xs font-medium" style={{ color: selected.color }}>{selected.cat}</span>
                    <h3 className="text-2xl font-black text-white">{selected.title}</h3>
                  </div>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 glass rounded-xl hover:bg-white/10 transition-colors">
                  <X size={16} className="text-slate-400" />
                </button>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">{selected.long}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tech.map(t => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-lg font-medium"
                    style={{ background: `${selected.color}15`, color: selected.color, border: `1px solid ${selected.color}30` }}>
                    {t}
                  </span>
                ))}
              </div>
              {selected.link !== '#' && (
                <a href={selected.link} target="_blank" rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white">
                  <ExternalLink size={14} />
                  Kunjungi Website
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
