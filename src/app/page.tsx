'use client'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import IntroductionSection from '@/components/IntroductionSection'
import InspirationSection from '@/components/InspirationSection'
import InfluenceSection from '@/components/InfluenceSection'
import IdentitySection from '@/components/IdentitySection'
import GrowthSection from '@/components/GrowthSection'
import VisionSection from '@/components/VisionSection'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'inspiration', 'influence', 'identity', 'growth', 'vision']
      const scrollPosition = window.scrollY + 200
      let foundActiveSection = false

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            // If we're in the introduction section, keep all tags inactive
            if (section === 'introduction') {
              setActiveSection('')
            } else {
              setActiveSection(section)
            }
            foundActiveSection = true
            break
          }
        }
      }

      if (!foundActiveSection) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#EDEBE5] text-[#2E2E2E]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <Header activeSection={activeSection} />
      <IntroductionSection />
      <InspirationSection />
      <InfluenceSection />
      <IdentitySection />
      <GrowthSection />
      <VisionSection />
    </div>
  )
}
