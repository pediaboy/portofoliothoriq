'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, TrendingDown, Activity } from 'lucide-react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22,1,0.36,1] }} className={className}>
      {children}
    </motion.div>
  )
}

const TICKERS = [
  { sym: 'BBCA', price: 9550, change: 1.12 },
  { sym: 'TLKM', price: 3180, change: -0.63 },
  { sym: 'BMRI', price: 6450, change: 2.30 },
  { sym: 'ASII', price: 4820, change: -1.05 },
  { sym: 'BBRI', price: 4890, change: 0.82 },
  { sym: 'BTC', price: 68420, change: 3.41 },
  { sym: 'ETH', price: 3620, change: 1.95 },
  { sym: 'GOTO', price: 71, change: -2.08 },
  { sym: 'UNVR', price: 4210, change: 0.24 },
  { sym: 'ICBP', price: 9875, change: 1.54 },
]

function genCandles() {
  const arr: { open: number; close: number; high: number; low: number }[] = []
  let price = 5500
  for (let i = 0; i < 40; i++) {
    const open = price
    const move = (Math.random() - 0.48) * 120
    const close = open + move
    const high = Math.max(open, close) + Math.random() * 40
    const low = Math.min(open, close) - Math.random() * 40
    arr.push({ open, close, high, low })
    price = close
  }
  return arr
}

function CandlestickChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [candles, setCandles] = useState(genCandles)

  useEffect(() => {
    const interval = setInterval(() => {
      setCandles(prev => {
        const last = prev[prev.length - 1]
        const open = last.close
        const move = (Math.random() - 0.48) * 100
        const close = open + move
        const high = Math.max(open, close) + Math.random() * 30
        const low = Math.min(open, close) - Math.random() * 30
        return [...prev.slice(1), { open, close, high, low }]
      })
    }, 800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const W = canvas.width, H = canvas.height
    ctx.clearRect(0, 0, W, H)
    const prices = candles.flatMap(c => [c.high, c.low])
    const min = Math.min(...prices), max = Math.max(...prices)
    const range = max - min || 1
    const cw = W / candles.length, pad = 10
    ctx.strokeStyle = 'rgba(0,212,255,0.05)'
    ctx.lineWidth = 1
    for (let i = 0; i <= 4; i++) {
      const y = pad + (H - pad * 2) * i / 4
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
    }
    candles.forEach((c, i) => {
      const x = i * cw + cw / 2
      const toY = (v: number) => H - pad - ((v - min) / range) * (H - pad * 2)
      const bull = c.close >= c.open
      const color = bull ? '#00ff88' : '#ff4466'
      ctx.strokeStyle = color; ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(x, toY(c.high)); ctx.lineTo(x, toY(c.low)); ctx.stroke()
      ctx.fillStyle = bull ? 'rgba(0,255,136,0.7)' : 'rgba(255,68,102,0.7)'
      ctx.fillRect(x - cw * 0.3, Math.min(toY(c.open), toY(c.close)), cw * 0.6, Math.max(Math.abs(toY(c.close) - toY(c.open)), 2))
    })
  }, [candles])

  return <canvas ref={canvasRef} width={500} height={160} className="w-full" style={{ maxHeight: 160 }} />
}

function LivePrice({ base, change }: { base: number; change: number }) {
  const [val, setVal] = useState(base)
  useEffect(() => {
    const iv = setInterval(() => {
      setVal(p => Math.max(base * 0.95, Math.min(base * 1.05, p + (Math.random() - 0.5) * 20)))
    }, 1500)
    return () => clearInterval(iv)
  }, [base])
  return <span className={change >= 0 ? 'text-green-400' : 'text-red-400'}>{val.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</span>
}

export default function MarketSection() {
  return (
    <section id="market" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Activity size={12} className="text-green-400 animate-pulse" />
            <span className="text-xs text-slate-400 tracking-widest uppercase">Live Simulation</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">Market <span className="gradient-text">Dashboard</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">Visualisasi pasar real-time — data simulasi untuk demonstrasi</p>
        </FadeIn>
        <FadeIn className="mb-6">
          <div className="glass rounded-2xl py-3 overflow-hidden neon-border">
            <div className="ticker-wrapper">
              <div className="ticker-inner animate-ticker">
                {[...TICKERS, ...TICKERS].map((t, i) => (
                  <div key={i} className="inline-flex items-center gap-2 px-6 border-r border-blue-900/30">
                    <span className="font-bold text-sm text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t.sym}</span>
                    <LivePrice base={t.price} change={t.change} />
                    <span className={`text-xs font-bold flex items-center gap-0.5 ${t.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {t.change >= 0 ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                      {t.change >= 0 ? '+' : ''}{t.change}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="market-card p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-500">IHSG Simulation</p>
                  <p className="text-2xl font-black text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>7,285.42</p>
                </div>
                <div className="flex items-center gap-1 text-green-400 font-bold"><TrendingUp size={16} /><span className="text-sm">+1.24%</span></div>
              </div>
              <CandlestickChart />
              <div className="flex gap-4 mt-4 pt-4 border-t border-blue-900/20">
                <div><p className="text-xs text-slate-500">Volume</p><p className="text-sm font-bold text-white">24.8B</p></div>
                <div><p className="text-xs text-slate-500">High</p><p className="text-sm font-bold text-green-400">7,312</p></div>
                <div><p className="text-xs text-slate-500">Low</p><p className="text-sm font-bold text-red-400">7,198</p></div>
              </div>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-4">
            <FadeIn delay={0.2}>
              <div className="market-card p-5">
                <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Top Movers</p>
                {TICKERS.slice(0, 5).map(t => (
                  <div key={t.sym} className="flex items-center justify-between py-2 border-b border-blue-900/10 last:border-0">
                    <div>
                      <p className="text-sm font-bold text-white">{t.sym}</p>
                      <p className="text-xs text-slate-500">{t.price.toLocaleString()}</p>
                    </div>
                    <span className={`text-sm font-bold px-2 py-0.5 rounded-lg ${t.change >= 0 ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                      {t.change >= 0 ? '+' : ''}{t.change}%
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="market-card p-5">
                <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Market Heatmap</p>
                <div className="grid grid-cols-4 gap-1">
                  {TICKERS.map(t => (
                    <div key={t.sym} className="aspect-square rounded-lg flex flex-col items-center justify-center"
                      style={{ background: t.change >= 0 ? `rgba(0,255,136,${Math.min(0.3,Math.abs(t.change)*0.08)})` : `rgba(255,68,102,${Math.min(0.3,Math.abs(t.change)*0.08)})`, border: `1px solid ${t.change >= 0 ? 'rgba(0,255,136,0.2)' : 'rgba(255,68,102,0.2)'}` }}>
                      <p className="text-white font-bold" style={{ fontSize: '9px' }}>{t.sym}</p>
                      <p className={`font-bold ${t.change >= 0 ? 'text-green-400' : 'text-red-400'}`} style={{ fontSize: '8px' }}>{t.change >= 0 ? '+' : ''}{t.change}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
