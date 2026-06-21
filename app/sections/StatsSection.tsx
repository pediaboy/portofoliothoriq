'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 7, suffix: '+', label: 'Tahun Web Dev', desc: 'Sejak 2018', color: '#00d4ff' },
  { value: 4, suffix: '+', label: 'Tahun Trading', desc: 'Saham & Crypto', color: '#7c3aed' },
  { value: 50, suffix: '+', label: 'Total Project', desc: 'Delivered', color: '#10b981' },
  { value: 1000, suffix: '+', label: 'Jam Development', desc: 'Dedication', color: '#f59e0b' },
]

const testimonials = [
  {
    name: 'Ahmad Fauzi', role: 'Trader Saham', avatar: 'AF',
    text: 'Sistem analisa yang dibangun benar-benar membantu keputusan trading saya. Sangat profesional dan detail.',
    color: '#00d4ff'
  },
  {
    name: 'Rina Wulandari', role: 'Business Owner', avatar: 'RW',
    text: 'Website yang dibuat melampaui ekspektasi. Desainnya premium dan performa loading sangat cepat.',
    color: '#7c3aed'
  },
  {
    name: 'Dimas Prasetyo', role: 'Startup Founder', avatar: 'DP',
    text: 'Thirafi sangat paham kebutuhan bisnis. Dashboard yang dibuat sangat membantu monitoring operasional kami.',
    color: '#10b981'
  },
]

export default function StatsSection() {
  return (
    <>
      {/* Stats */}
      <section className="relative py-20 overflow-hidden">
        {/* Background stripe */}
        <div className="absolute inset-0 opacity-30"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(0,102,255,0.05), transparent)' }} />

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-strong rounded-3xl p-6 sm:p-8 text-center neon-border hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: stat.color, fontFamily: 'JetBrains Mono, monospace' }}>
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-bold text-white text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Apa Kata <span className="gradient-text">Mereka</span>
            </h2>
            <p className="text-slate-400">Feedback dari klien dan kolaborator</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-strong rounded-3xl p-6 neon-border relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5"
                  style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }} />
                <div className="text-4xl mb-4 opacity-30" style={{ color: t.color }}>"</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black"
                    style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}40` }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
