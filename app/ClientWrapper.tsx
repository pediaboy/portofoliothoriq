'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const GalaxyCanvas = dynamic(() => import('./components/GalaxyCanvas'), { ssr: false })
const LoadingScreen = dynamic(() => import('./components/LoadingScreen'), { ssr: false })
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false })
const CursorGlow = dynamic(() => import('./components/CursorGlow'), { ssr: false })
const HeroSection = dynamic(() => import('./sections/HeroSection'), { ssr: false })
const AboutSection = dynamic(() => import('./sections/AboutSection'), { ssr: false })
const SkillsSection = dynamic(() => import('./sections/SkillsSection'), { ssr: false })
const PortfolioSection = dynamic(() => import('./sections/PortfolioSection'), { ssr: false })
const StatsSection = dynamic(() => import('./sections/StatsSection'), { ssr: false })
const MarketSection = dynamic(() => import('./sections/MarketSection'), { ssr: false })
const ContactSection = dynamic(() => import('./sections/ContactSection'), { ssr: false })

export default function ClientWrapper() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#020818',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ 
          width: 60, height: 60, borderRadius: 16,
          background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, fontWeight: 900, color: '#fff',
          boxShadow: '0 0 30px rgba(0,102,255,0.5)',
        }}>T</div>
      </div>
    )
  }

  return (
    <>
      <LoadingScreen />
      <GalaxyCanvas />
      <CursorGlow />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <PortfolioSection />
        <MarketSection />
        <ContactSection />
      </main>
    </>
  )
}
