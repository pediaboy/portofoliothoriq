'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, TrendingUp, Brain, Rocket } from 'lucide-react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22,1,0.36,1] }} className={className}>
      {children}
    </motion.div>
  )
}

const timeline = [
  { year: '2018', icon: Code2, title: 'Memulai Web Development', desc: 'Mulai belajar HTML, CSS, JavaScript. Membangun fondasi programming yang kuat.', color: '#00d4ff' },
  { year: '2019', icon: Code2, title: 'Project Pertama', desc: 'Membangun project web pertama. Mulai mengeksplorasi framework modern.', color: '#00d4ff' },
  { year: '2020', icon: Rocket, title: 'Freelance & Automation', desc: 'Aktif freelance development dan mulai membangun sistem automasi.', color: '#0066ff' },
  { year: '2021', icon: TrendingUp, title: 'Masuk Dunia Trading', desc: 'Memulai perjalanan sebagai trader saham dan cryptocurrency.', color: '#7c3aed' },
  { year: '2022', icon: TrendingUp, title: 'Sistem Analisa Pasar', desc: 'Membangun berbagai sistem untuk analisa teknikal dan fundamental pasar.', color: '#7c3aed' },
  { year: '2023', icon: Brain, title: 'Fokus AI & Data', desc: 'Mendalami artificial intelligence, machine learning, dan data analysis.', color: '#ec4899' },
  { year: '2024', icon: Rocket, title: 'Komunitas & Platform', desc: 'Membangun komunitas trader dan platform finansial untuk masyarakat.', color: '#10b981' },
  { year: '2025 — Now', icon: Brain, title: 'RITEL COMMUNITY AI', desc: 'Pengembangan AI untuk analisa saham dan platform finansial komunitas.', color: '#ffd700' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <FadeIn className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full" style={{ background: '#00d4ff' }} />
            <span className="text-xs text-slate-400 tracking-widest uppercase">About</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Siapa <span className="gradient-text">Thirafi?</span>
          </h2>
        </FadeIn>

        {/* About cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: Code2,
              title: 'Web Developer',
              color: '#00d4ff',
              desc: 'Sejak 2018, membangun berbagai sistem digital mulai dari landing page, e-commerce, dashboard, hingga platform komunitas kompleks. Spesialis Next.js, React, dan sistem full-stack modern.'
            },
            {
              icon: TrendingUp,
              title: 'Trader & Analis',
              color: '#7c3aed',
              desc: 'Aktif trading saham dan cryptocurrency sejak 2021. Mengembangkan metodologi analisa sendiri yang menggabungkan teknikal, fundamental, dan bandarmologi.'
            },
            {
              icon: Brain,
              title: 'AI Engineer',
              color: '#ec4899',
              desc: 'Membangun sistem AI untuk analisa pasar dan automasi. Fokus pada pengembangan produk yang menggabungkan kecerdasan buatan dengan kebutuhan pengguna nyata.'
            },
          ].map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <div className="glass-strong rounded-3xl p-8 neon-border h-full group hover:scale-[1.02] transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${card.color}15`, border: `1px solid ${card.color}40` }}>
                  <card.icon size={26} style={{ color: card.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Vision Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {[
            {
              label: 'VISI',
              color: '#00d4ff',
              text: 'Membangun teknologi yang mampu membantu masyarakat mengambil keputusan yang lebih cepat, tepat, dan berbasis data.'
            },
            {
              label: 'MISI',
              color: '#7c3aed',
              text: 'Mengembangkan sistem digital yang bermanfaat, mudah digunakan, serta memberikan dampak nyata bagi pengguna.'
            },
          ].map((vm, i) => (
            <FadeIn key={vm.label} delay={i * 0.15}>
              <div className="glass-strong rounded-3xl p-8 neon-border relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, ${vm.color}, transparent)` }} />
                <span className="text-xs font-black tracking-widest mb-4 block"
                  style={{ color: vm.color }}>// {vm.label}</span>
                <p className="text-slate-200 text-lg leading-relaxed font-medium">{vm.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Timeline */}
        <FadeIn>
          <div className="text-center mb-14" id="timeline">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Timeline <span className="gradient-text">Perjalanan</span>
            </h3>
            <p className="text-slate-400">Dari belajar coding hingga membangun komunitas</p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.4), transparent)' }} />

          {timeline.map((item, i) => (
            <FadeIn key={item.year} delay={i * 0.08}>
              <div className={`relative flex gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10"
                  style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }} />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass rounded-2xl p-5 neon-border hover:scale-[1.02] transition-transform duration-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                        <item.icon size={14} style={{ color: item.color }} />
                      </div>
                      <span className="text-xs font-bold tracking-wider" style={{ color: item.color, fontFamily: 'JetBrains Mono, monospace' }}>
                        {item.year}
                      </span>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-5/12" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
