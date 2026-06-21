'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

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

const skills = [
  { name: 'Next.js / React', level: 95, color: '#00d4ff', cat: 'Frontend' },
  { name: 'TypeScript', level: 90, color: '#00d4ff', cat: 'Frontend' },
  { name: 'Frontend Development', level: 93, color: '#0066ff', cat: 'Frontend' },
  { name: 'Node.js / Backend', level: 85, color: '#0066ff', cat: 'Backend' },
  { name: 'Database Design', level: 82, color: '#0066ff', cat: 'Backend' },
  { name: 'System Architecture', level: 80, color: '#7c3aed', cat: 'System' },
  { name: 'Artificial Intelligence', level: 78, color: '#7c3aed', cat: 'System' },
  { name: 'Technical Analysis', level: 92, color: '#ec4899', cat: 'Trading' },
  { name: 'Trading Analysis', level: 88, color: '#ec4899', cat: 'Trading' },
  { name: 'Fundamental Analysis', level: 85, color: '#f59e0b', cat: 'Trading' },
  { name: 'Bandarmologi', level: 80, color: '#f59e0b', cat: 'Trading' },
  { name: 'Crypto Research', level: 85, color: '#10b981', cat: 'Trading' },
]

const services = [
  { title: 'Web Development', icon: '🌐', desc: 'Landing page, company profile, toko online, sistem custom.' },
  { title: 'System Development', icon: '⚙️', desc: 'Backend, API, sistem automasi, dan integrasi layanan.' },
  { title: 'AI Integration', icon: '🤖', desc: 'Integrasi AI/ML ke dalam produk dan sistem yang sudah ada.' },
  { title: 'Dashboard Development', icon: '📊', desc: 'Dashboard monitoring, analitik, dan visualisasi data.' },
  { title: 'Automation System', icon: '🔄', desc: 'Bot, workflow otomatis, dan sistem pemrosesan data.' },
  { title: 'Trading Tools', icon: '📈', desc: 'Tools analisa teknikal, screener, dan sistem sinyal trading.' },
  { title: 'Financial Technology', icon: '💎', desc: 'Platform fintech, membership, dan sistem pembayaran.' },
  { title: 'Consulting', icon: '🎯', desc: 'Konsultasi arsitektur sistem, strategi digital, dan trading.' },
]

function SkillBar({ skill, delay }: { skill: typeof skills[0]; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
        <span className="text-xs font-bold" style={{ color: skill.color, fontFamily: 'JetBrains Mono, monospace' }}>
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22,1,0.36,1] }}
          className="skill-fill"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
            width: `${skill.level}%`,
            transformOrigin: 'left',
            boxShadow: `0 0 10px ${skill.color}60`
          }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-xs text-slate-400 tracking-widest uppercase">Skills & Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Keahlian <span className="gradient-text">& Layanan</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">Kombinasi unik antara development, AI, dan trading</p>
        </FadeIn>

        {/* Skills grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Tech skills */}
          <FadeIn delay={0.1}>
            <div className="glass-strong rounded-3xl p-8 neon-border">
              <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                <span style={{ color: '#00d4ff' }}>{'<'}</span>
                <span>Tech Stack</span>
                <span style={{ color: '#00d4ff' }}>{'/>'}</span>
              </h3>
              {skills.filter(s => ['Frontend', 'Backend', 'System'].includes(s.cat)).map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
              ))}
            </div>
          </FadeIn>

          {/* Trading skills */}
          <FadeIn delay={0.2}>
            <div className="glass-strong rounded-3xl p-8 neon-border">
              <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                <span style={{ color: '#7c3aed' }}>{'<'}</span>
                <span>Trading & Analysis</span>
                <span style={{ color: '#7c3aed' }}>{'/>'}</span>
              </h3>
              {skills.filter(s => s.cat === 'Trading').map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Services */}
        <FadeIn>
          <h3 className="text-3xl font-black text-white text-center mb-10">
            Apa yang Bisa <span className="gradient-text">Saya Bantu</span>
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 neon-border h-full group hover:bg-blue-950/20 transition-all duration-300 hover:scale-[1.03] cursor-default">
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h4 className="font-bold text-white text-sm mb-2">{svc.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{svc.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
