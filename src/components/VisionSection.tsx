import Image from 'next/image'

export default function VisionSection() {
  return (
    <section id="vision" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-8 sm:py-12 md:py-16 scroll-mt-32">
      <div className="mb-6 sm:mb-8">
        <Image
          src="/images/vision.svg"
          alt="Vision"
          width={162}
          height={70}
          className="h-[50px] sm:h-[60px] md:h-[70px] w-auto"
        />
      </div>

      {/* Hero Statement */}
      <div className="mb-12 sm:mb-16">
        <div className="max-w-[800px] mx-auto text-center">
          <blockquote className="text-lg sm:text-xl md:text-2xl italic leading-[1.3em] text-[#2E2E2E] mb-4 sm:mb-6">
            &ldquo;I see myself as a designer-developer hybrid — someone who can take a product from concept to code.&rdquo;
          </blockquote>
          <div className="w-16 h-px bg-[#A4492D] mx-auto"></div>
        </div>
      </div>

      {/* Vision Overview */}
      <div className="mb-12 sm:mb-16">
        <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-4 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#2E2E2E] text-center">The Vision</h3>
          <p className="text-sm sm:text-base leading-[1.2em] text-center max-w-[600px] mx-auto">
            What excites me is the ability to build something entirely on my own: from brand identity and UX to fully functioning software. This minor gave me the confidence to believe that this hybrid identity is not only possible — it&apos;s powerful.
          </p>
        </div>
      </div>

      {/* Goals & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
        
        {/* Immediate Goals */}
        <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-3 h-3 bg-[#A4492D] rounded-full"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#2E2E2E]">Immediate Goals</h3>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <h4 className="text-base font-semibold text-[#2E2E2E] mb-2 sm:mb-3">Skill Development</h4>
              <p className="text-sm sm:text-base leading-[1.2em] text-[#6C7A89] mb-3 sm:mb-4">
                My immediate goal is to sharpen my skills in both design and development.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EDEBE5] rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <span className="text-base sm:text-lg">🎨</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#2E2E2E]">Design</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EDEBE5] rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <span className="text-base sm:text-lg">💻</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#2E2E2E]">Development</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#EDEBE5] rounded-lg p-4 sm:p-6">
              <h4 className="text-base font-semibold text-[#2E2E2E] mb-2 sm:mb-3">Build Portfolio</h4>
              <p className="text-sm sm:text-base leading-[1.2em] text-[#6C7A89]">
                I plan to build several tools and digital products — each one fully designed and coded by me.
              </p>
            </div>
          </div>
        </div>

        {/* Long-term Vision */}
        <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-3 h-3 bg-[#6C7A89] rounded-full"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#2E2E2E]">Long-term Vision</h3>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <h4 className="text-base font-semibold text-[#2E2E2E] mb-2 sm:mb-3">Career Paths</h4>
              <p className="text-sm sm:text-base leading-[1.2em] text-[#6C7A89] mb-3 sm:mb-4">
                Long-term, I hope to either build a product of my own or join a startup where I can have impact across multiple disciplines.
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#A4492D] rounded-full"></div>
                  <span className="text-xs sm:text-sm text-[#2E2E2E]">Design Leadership</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#A4492D] rounded-full"></div>
                  <span className="text-xs sm:text-sm text-[#2E2E2E]">Code Implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#A4492D] rounded-full"></div>
                  <span className="text-xs sm:text-sm text-[#2E2E2E]">Brand Strategy</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#EDEBE5] rounded-lg p-4 sm:p-6">
              <h4 className="text-base font-semibold text-[#2E2E2E] mb-2 sm:mb-3">Hybrid Identity</h4>
              <p className="text-sm sm:text-base leading-[1.2em] text-[#6C7A89]">
                This minor gave me the confidence to believe that this hybrid identity is not only possible — it&apos;s powerful.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#F7F6F2] to-[#EDEBE5] border border-[#CFCBC4] rounded-lg p-4 sm:p-6 md:p-8 text-center">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#2E2E2E]">Ready to Build</h3>
        <p className="text-sm sm:text-base leading-[1.2em] text-[#6C7A89] max-w-[500px] mx-auto mb-4 sm:mb-6">
          The journey from uncertain beginner to confident designer-developer has just begun. Every project is an opportunity to bridge the gap between beautiful design and functional code.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <div className="px-3 sm:px-4 py-2 bg-[#A4492D] text-white rounded-lg text-xs sm:text-sm font-medium">
            Design
          </div>
          <div className="px-3 sm:px-4 py-2 bg-[#6C7A89] text-white rounded-lg text-xs sm:text-sm font-medium">
            Build
          </div>
          <div className="px-3 sm:px-4 py-2 bg-[#2E2E2E] text-white rounded-lg text-xs sm:text-sm font-medium">
            Deploy
          </div>
        </div>
      </div>
    </section>
  )
} 