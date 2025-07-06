import Image from 'next/image'

export default function GrowthSection() {
  return (
    <section id="growth" className="px-36 py-16 scroll-mt-32">
      <div className="mb-8">
        <Image
          src="/images/growth.svg"
          alt="Growth"
          width={167}
          height={70}
          className="h-[70px] w-auto"
        />
      </div>

      {/* Hero Quote */}
      <div className="mb-16">
        <div className="max-w-[700px] mx-auto text-center">
          <blockquote className="text-2xl italic leading-[1.3em] text-[#2E2E2E] mb-6">
            &ldquo;Creativity isn&apos;t a fixed trait — it&apos;s a process. I gave myself permission to try, to fail, to experiment.&rdquo;
          </blockquote>
          <div className="w-16 h-px bg-[#A4492D] mx-auto"></div>
        </div>
      </div>

      {/* Growth Journey */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        
        {/* Before & After */}
        <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-6 text-[#2E2E2E]">The Transformation</h3>
          
          <div className="space-y-6">
            <div className="bg-[#EDEBE5] rounded-lg p-6">
              <h4 className="font-semibold text-[#A4492D] mb-3">Before</h4>
              <p className="text-base leading-[1.2em] text-[#2E2E2E]">
                At the start of this minor, I didn&apos;t feel like a designer. I was uncertain, even uncomfortable calling myself one. Visual creativity was something I admired in others — not something I felt confident in.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-[#6C7A89]">
              <h4 className="font-semibold text-[#6C7A89] mb-3">After</h4>
              <p className="text-base leading-[1.2em] text-[#2E2E2E]">
                But I was determined to change that. As the weeks passed, I realized that creativity isn&apos;t a fixed trait — it&apos;s a process. The more I experimented, the more confident I became.
              </p>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#2E2E2E]">Key Realizations</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#A4492D] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-[#2E2E2E] mb-2">Permission to Experiment</h4>
                <p className="text-base leading-[1.2em] text-[#6C7A89]">
                  I gave myself permission to try, to fail, to experiment. Each attempt built confidence.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#A4492D] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-[#2E2E2E] mb-2">Collaborative Growth</h4>
                <p className="text-base leading-[1.2em] text-[#6C7A89]">
                  Working with my group on client assignments and visual identity showed me that design is collaborative.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#A4492D] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-[#2E2E2E] mb-2">Curiosity Over Perfection</h4>
                <p className="text-base leading-[1.2em] text-[#6C7A89]">
                  Being a designer isn&apos;t about being perfect — it&apos;s about being curious and responsive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Reflection */}
      <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-8">
        <h3 className="text-xl font-semibold mb-6 text-[#2E2E2E]">Personal Challenges & Growth</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-[#A4492D] mb-4">The Challenge</h4>
            <p className="text-base leading-[1.2em] text-[#2E2E2E] mb-4">
              During my conversation with Vienna, I reflected on my challenges — especially balancing this minor with a heavy personal schedule:
            </p>
            <ul className="space-y-2 text-sm text-[#6C7A89]">
              <li>• Daily commuting</li>
              <li>• Freelancing projects</li>
              <li>• Major classes</li>
              <li>• Part-time work</li>
              <li>• Training for an ultramarathon</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#6C7A89] mb-4">The Learning</h4>
            <p className="text-base leading-[1.2em] text-[#2E2E2E]">
              Despite all of this, I committed to showing up and engaging in class. That conversation helped me recognize that <strong>presence and intention matter as much as output</strong>.
            </p>
            
            <div className="mt-6 p-4 bg-[#EDEBE5] rounded-lg">
              <p className="text-sm leading-[1.2em] text-[#2E2E2E] italic">
                &ldquo;Sometimes the most important growth happens not in what you create, but in how you show up.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 