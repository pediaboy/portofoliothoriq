'use client'

import dynamic from 'next/dynamic'

const GalaxyCanvas = dynamic(() => import('./components/GalaxyCanvas'), { ssr: false })
const LoadingScreen = dynamic(() => import('./components/LoadingScreen'), { ssr: false })
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false })
const CursorGlow = dynamic(() => import('./components/CursorGlow'), { ssr: false })
const HeroSection = dynamic(() => import('./sections/HeroSection'), { ssr: false })
const AboutSection = dynamic(() => import('./sections/AboutSection'), { ssr: false })
const SkillsSection = dynamic(() => import('./sections/SkillsSection'), { ssr: false })
const PortfolioSection = dynamic(() => import('./sections/PortfolioSection'), { ssr: false })
const MarketSection = dynamic(() => import('./sections/MarketSection'), { ssr: false })
const StatsSection = dynamic(() => import('./sections/StatsSection'), { ssr: false })
const ContactSection = dynamic(() => import('./sections/ContactSection'), { ssr: false })

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <GalaxyCanvas />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <MarketSection />
        <StatsSection />
        <ContactSection />
      </main>
    </>
  )
}
