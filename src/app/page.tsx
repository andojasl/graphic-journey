'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IntroductionSection from '@/components/IntroductionSection'
import InspirationSection from '@/components/InspirationSection'
import InfluenceSection from '@/components/InfluenceSection'
import IdentitySection from '@/components/IdentitySection'
import GrowthSection from '@/components/GrowthSection'
import VisionSection from '@/components/VisionSection'

export default function HomePage() {
  console.log('HomePage component loaded!')
  
  const [activeSection, setActiveSection] = useState('')
  
  console.log('Current activeSection:', activeSection)

  useEffect(() => {
    console.log('useEffect started - setting up scroll detection')
    
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -50% 0px', // Trigger when section is 150px from top
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      console.log('Intersection Observer triggered')
      
      entries.forEach((entry) => {
        console.log(`Section ${entry.target.id}: isIntersecting=${entry.isIntersecting}`)
        
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          console.log(`Setting active section to: ${sectionId}`)
          setActiveSection(sectionId)
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = ['inspiration', 'influence', 'identity', 'growth', 'vision']
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        console.log(`Observing section: ${sectionId}`)
        observer.observe(element)
      } else {
        console.log(`ERROR: Could not find element with id: ${sectionId}`)
      }
    })

    // Also add scroll listener to clear active section when at top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        console.log('At top - clearing active section')
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => {
      console.log('Cleaning up observers')
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#EDEBE5] text-[#2E2E2E]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#EDEBE5]/80 border-b border-[#CFCBC4]/30 flex justify-between items-center px-32 py-8 gap-24">
        <div className="p-4 rounded">
          <Image
            src="/images/signature-logo.svg"
            alt="Andojas Signature Logo"
            width={232}
            height={84}
            className="h-[84px] w-auto"
          />
        </div>
        <div className='flex flex-col gap-4'>
          <section>
            <div className="flex justify-end">
              <div className="bg-[#CFCBC4] border border-[#F7F6F2] rounded-xl p-3 flex gap-4">
                <a 
                  href="#inspiration" 
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'inspiration' 
                      ? 'bg-[#6C7A89] text-[#F7F6F2]' 
                      : 'bg-[#EDEBE5] text-[#2E2E2E] hover:bg-[#6C7A89] hover:text-[#F7F6F2]'
                  }`}
                >
                  <span className="text-xl font-regular">Inspiration</span>
                </a>
                <a 
                  href="#influence" 
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'influence' 
                      ? 'bg-[#6C7A89] text-[#F7F6F2]' 
                      : 'bg-[#EDEBE5] text-[#2E2E2E] hover:bg-[#6C7A89] hover:text-[#F7F6F2]'
                  }`}
                >
                  <span className="text-xl font-regular">Influence</span>
                </a>
                <a 
                  href="#identity" 
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'identity' 
                      ? 'bg-[#6C7A89] text-[#F7F6F2]' 
                      : 'bg-[#EDEBE5] text-[#2E2E2E] hover:bg-[#6C7A89] hover:text-[#F7F6F2]'
                  }`}
                >
                  <span className="text-xl font-regular">Identity</span>
                </a>
                <a 
                  href="#growth" 
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'growth' 
                      ? 'bg-[#6C7A89] text-[#F7F6F2]' 
                      : 'bg-[#EDEBE5] text-[#2E2E2E] hover:bg-[#6C7A89] hover:text-[#F7F6F2]'
                  }`}
                >
                  <span className="text-xl font-regular">Growth</span>
                </a>
                <a 
                  href="#vision" 
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'vision' 
                      ? 'bg-[#6C7A89] text-[#F7F6F2]' 
                      : 'bg-[#EDEBE5] text-[#2E2E2E] hover:bg-[#6C7A89] hover:text-[#F7F6F2]'
                  }`}
                >
                  <span className="text-xl font-regular">Vision</span>
                </a>
              </div>
            </div>
          </section>
          <div className="flex items-center justify-end gap-3">
            <Link href="/projects" className="flex items-center gap-3 group">
              <span className="text-[#A4491D] text-xl">My projects</span>
              <Image
                src="/images/arrow-forward.svg"
                alt="Arrow"
                width={23}
                height={23}
                className="text-[#A4491D]"
              />
            </Link>
          </div>
        </div>
      </header>
      
      <IntroductionSection />
      <InspirationSection />
      <InfluenceSection />
      <IdentitySection />
      <GrowthSection />
      <VisionSection />
    </div>
  )
}
