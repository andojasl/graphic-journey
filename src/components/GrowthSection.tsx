import Image from 'next/image'

export default function GrowthSection() {
  return (
    <section id="growth" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-8 sm:py-12 md:py-16 scroll-mt-32">
      <div className="mb-6 sm:mb-8">
        <Image
          src="/images/growth.svg"
          alt="Growth"
          width={167}
          height={70}
          className="h-[50px] sm:h-[60px] md:h-[70px] w-auto"
        />
      </div>

      {/* Hero Quote */}
      <div className="mb-12 sm:mb-16">
        <div className="max-w-[700px] mx-auto text-center">
          <blockquote className="text-lg sm:text-xl md:text-2xl italic leading-[1.3em] text-[#2E2E2E] mb-4 sm:mb-6">
            &ldquo;Creativity isn&apos;t a fixed trait — it&apos;s a process. I gave myself permission to try, to fail, to experiment.&rdquo;
          </blockquote>
          <div className="w-16 h-px bg-[#A4492D] mx-auto"></div>
        </div>
      </div>

      {/* Growth Journey */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
        
        {/* Before & After */}
        <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-4 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#2E2E2E]">The Transformation</h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-[#EDEBE5] rounded-lg p-4 sm:p-6">
              <h4 className="text-base font-semibold text-[#A4492D] mb-2 sm:mb-3">Before</h4>
              <p className="text-sm sm:text-base leading-[1.2em] text-[#2E2E2E]">
                At the start of this minor, I didn&apos;t feel like a designer. I was uncertain, even uncomfortable calling myself one. Visual creativity was something I admired in others — not something I felt confident in.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-[#6C7A89]">
              <h4 className="text-base font-semibold text-[#6C7A89] mb-2 sm:mb-3">After</h4>
              <p className="text-sm sm:text-base leading-[1.2em] text-[#2E2E2E]">
                But I was determined to change that. As the weeks passed, I realized that creativity isn&apos;t a fixed trait — it&apos;s a process. The more I experimented, the more confident I became.
              </p>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold text-[#2E2E2E]">Key Realizations</h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-2 h-2 bg-[#A4492D] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-base font-semibold text-[#2E2E2E] mb-1 sm:mb-2">Permission to Experiment</h4>
                <p className="text-sm sm:text-base leading-[1.2em] text-[#6C7A89]">
                  I gave myself permission to try, to fail, to experiment. Each attempt built confidence.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 sm:gap-4">
              <div className="w-2 h-2 bg-[#A4492D] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-base font-semibold text-[#2E2E2E] mb-1 sm:mb-2">Collaborative Growth</h4>
                <p className="text-sm sm:text-base leading-[1.2em] text-[#6C7A89]">
                  Working with my group on client assignments and visual identity showed me that design is collaborative.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 sm:gap-4">
              <div className="w-2 h-2 bg-[#A4492D] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-base font-semibold text-[#2E2E2E] mb-1 sm:mb-2">Curiosity Over Perfection</h4>
                <p className="text-sm sm:text-base leading-[1.2em] text-[#6C7A89]">
                  Being a designer isn&apos;t about being perfect — it&apos;s about being curious and responsive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Reflection */}
      <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-4 sm:p-6 md:p-8 mb-12 sm:mb-16">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#2E2E2E]">Personal Challenges & Growth</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h4 className="text-base font-semibold text-[#A4492D] mb-3 sm:mb-4">The Challenge</h4>
            <p className="text-sm sm:text-base leading-[1.2em] text-[#2E2E2E] mb-3 sm:mb-4">
              Balancing this minor with my demanding personal schedule presented significant challenges that required careful time management and priority setting:
            </p>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-[#6C7A89]">
              <li>• Daily commuting to university</li>
              <li>• Managing freelancing projects</li>
              <li>• Keeping up with major classes</li>
              <li>• Part-time work commitments</li>
              <li>• Training for an ultramarathon</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold text-[#6C7A89] mb-3 sm:mb-4">The Learning</h4>
            <p className="text-sm sm:text-base leading-[1.2em] text-[#2E2E2E]">
              Despite these challenges, I remained committed to showing up and engaging authentically in class. This experience taught me that <strong>presence and intention matter as much as output</strong>.
            </p>
            
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#EDEBE5] rounded-lg">
              <p className="text-xs sm:text-sm leading-[1.2em] text-[#2E2E2E] italic">
                &ldquo;Sometimes the most important growth happens not in what you create, but in how you show up.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interim Conversation with Vienna */}
      <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-4 sm:p-6 md:p-8 mb-12 sm:mb-16">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#2E2E2E]">Interim Conversation & Reflection</h3>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white rounded-lg p-4 sm:p-6">
            <h4 className="text-base font-semibold text-[#A4492D] mb-3 sm:mb-4">Conversation Summary</h4>
            <p className="text-sm sm:text-base leading-[1.2em] text-[#2E2E2E] mb-3 sm:mb-4">
              During my interim conversation with Vienna, we discussed my role and contribution to the group work dynamics. She provided valuable feedback about my collaborative skills and team integration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-[#EDEBE5] rounded-lg p-3 sm:p-4">
                <h5 className="text-sm font-semibold text-[#2E2E2E] mb-2">Positive Feedback</h5>
                <ul className="text-xs sm:text-sm text-[#6C7A89] space-y-1">
                  <li>• Strong performance in group work</li>
                  <li>• Excellent team connection and collaboration</li>
                  <li>• Recognition of ambitious nature</li>
                  <li>• Encouragement to maintain high standards</li>
                </ul>
              </div>
              
              <div className="bg-[#EDEBE5] rounded-lg p-3 sm:p-4">
                <h5 className="text-sm font-semibold text-[#2E2E2E] mb-2">Areas for Growth</h5>
                <ul className="text-xs sm:text-sm text-[#6C7A89] space-y-1">
                  <li>• Balancing multiple commitments</li>
                  <li>• Prioritizing university studies</li>
                  <li>• Managing time more effectively</li>
                  <li>• Increasing classroom presence</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 sm:p-6">
            <h4 className="text-base font-semibold text-[#6C7A89] mb-3 sm:mb-4">Key Takeaways</h4>
            <p className="text-sm sm:text-base leading-[1.2em] text-[#2E2E2E] mb-3 sm:mb-4">
              The conversation reinforced that while I excel in collaborative settings, finding balance remains an ongoing challenge. Vienna&apos;s feedback highlighted both my strengths and areas where I can continue to grow.
            </p>
            
            <div className="bg-[#EDEBE5] rounded-lg p-3 sm:p-4">
              <p className="text-xs sm:text-sm leading-[1.2em] text-[#2E2E2E] italic">
                &ldquo;The goal isn&apos;t to be perfect at everything, but to be intentional about where you invest your energy.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills & Learning Outcomes */}
      <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-4 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#2E2E2E]">Technical Skills & Learning Outcomes</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h4 className="text-base font-semibold text-[#A4492D] mb-3 sm:mb-4">Workshop Applications</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <h5 className="text-sm font-semibold text-[#2E2E2E] mb-1 sm:mb-2">Typography Workshop</h5>
                <p className="text-xs sm:text-sm text-[#6C7A89] mb-1 sm:mb-2">
                  &ldquo;Poster with Two Typefaces&rdquo; challenged me to understand font pairing and hierarchy. I learned that effective typography isn&apos;t about using the most fonts, but about creating clear visual relationships.
                </p>
                <span className="text-xs text-[#A4492D] font-medium">Applied in: Personal branding, website typography system</span>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <h5 className="text-sm font-semibold text-[#2E2E2E] mb-1 sm:mb-2">Color Psychology</h5>
                <p className="text-xs sm:text-sm text-[#6C7A89] mb-1 sm:mb-2">
                  Understanding how colors evoke emotions transformed my approach to palette selection. Green for calm, terracotta for warmth — these aren&apos;t just aesthetic choices but strategic decisions.
                </p>
                <span className="text-xs text-[#A4492D] font-medium">Applied in: Personal color palette, client project decisions</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-semibold text-[#6C7A89] mb-3 sm:mb-4">Technical Mastery</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <h5 className="text-sm font-semibold text-[#2E2E2E] mb-1 sm:mb-2">Adobe Advanced Classes</h5>
                <p className="text-xs sm:text-sm text-[#6C7A89] mb-1 sm:mb-2">
                  Gained proficiency in vector-based logo creation, advanced layer masking in Photoshop, and layout template development. These skills directly enhanced my freelance capabilities.
                </p>
                <span className="text-xs text-[#6C7A89] font-medium">Outcome: Improved client deliverables, faster workflow</span>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <h5 className="text-sm font-semibold text-[#2E2E2E] mb-1 sm:mb-2">Analogue Experimentation</h5>
                <p className="text-xs sm:text-sm text-[#6C7A89] mb-1 sm:mb-2">
                  Despite initial discomfort with hand-drawing, I learned that tactile experimentation builds creative confidence. This experience influenced my decision to embrace handwritten elements in my digital work.
                </p>
                <span className="text-xs text-[#6C7A89] font-medium">Outcome: Authentic personal branding, reduced perfectionism</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 