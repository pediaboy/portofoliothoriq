'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = ['INITIALIZING...', 'LOADING ASSETS...', 'CALIBRATING...', 'READY']

  useEffect(() => {
    let prog = 0
    const interval = setInterval(() => {
      prog += Math.random() * 15
      if (prog >= 100) { prog = 100; clearInterval(interval) }
      setProgress(Math.min(prog, 100))
      setPhase(Math.floor(prog / 25))
    }, 120)

    const timer = setTimeout(() => setLoading(false), 2200)
    return () => { clearInterval(interval); clearTimeout(timer) }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#020818' }}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} />

          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-96 h-96 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)' }}
            />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center mb-12"
          >
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,102,255,0.2))',
                border: '2px solid rgba(0,212,255,0.5)',
                boxShadow: '0 0 40px rgba(0,212,255,0.4)'
              }}
            >
              <span className="text-3xl font-black" style={{ color: '#00d4ff', fontFamily: 'JetBrains Mono, monospace' }}>T</span>
            </motion.div>
            <div className="text-2xl font-black tracking-widest text-white mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              THIRAFI
            </div>
            <div className="text-xs tracking-[0.4em] text-slate-400">THARIQ AL IDRIS</div>
          </motion.div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 w-64"
          >
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-500 font-mono">{phases[Math.min(phase, 3)]}</span>
              <span style={{ color: '#00d4ff', fontFamily: 'monospace' }}>{Math.round(progress)}%</span>
            </div>
            <div className="h-0.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                style={{ width: `${progress}%` }}
                className="h-full rounded-full"
                transition={{ duration: 0.1 }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
              >
                <div className="h-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #0066ff)', boxShadow: '0 0 10px rgba(0,212,255,0.8)' }} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
