import dynamic from 'next/dynamic'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import PortfolioSection from './sections/PortfolioSection'
import MarketSection from './sections/MarketSection'
import StatsSection from './sections/StatsSection'
import ContactSection from './sections/ContactSection'

const GalaxyCanvas = dynamic(() => import('./components/GalaxyCanvas'), { ssr: false })
const LoadingScreen = dynamic(() => import('./components/LoadingScreen'), { ssr: false })
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false })
const CursorGlow = dynamic(() => import('./components/CursorGlow'), { ssr: false })

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
