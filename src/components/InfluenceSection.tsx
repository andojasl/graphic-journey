import Image from 'next/image'

export default function InfluenceSection() {
  return (
    <section id="influence" className="px-36 py-16 scroll-mt-32">
      <div className="mb-8">
        <Image
          src="/images/influence.svg"
          alt="Influence"
          width={167}
          height={70}
          className="h-[70px] w-auto"
        />
      </div>

      <div className="mb-8">
        <p className="text-base leading-[1.2em] max-w-[600px]">
          I came into this minor hoping to 'learn color theory and typography.' What I found instead was that true understanding isn't about memorising rules — it's about experimenting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Classes & Learning Section */}
        <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-6 text-[#2E2E2E]">Classes & Learning</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#A4492D] pl-4">
              <h4 className="font-semibold text-[#2E2E2E] mb-2">Workshops & Exercises</h4>
              <p className="text-base leading-[1.2em] text-[#2E2E2E]">
                From workshops like the "Poster with Two Typefaces" to classes on color psychology, I learned to let go of perfectionism. These exercises gave me space to play, to improvise, and to realize that making something imperfect is still moving forward.
              </p>
            </div>

            <div className="border-l-4 border-[#6C7A89] pl-4">
              <h4 className="font-semibold text-[#2E2E2E] mb-2">Adobe Advanced Classes</h4>
              <p className="text-base leading-[1.2em] text-[#2E2E2E]">
                I gained practical experience in Adobe tools during the Advanced Classes. Following the instructors step-by-step allowed me to not only understand the tools but apply them with intent. I created vector-based logos, experimented with layer masks in Photoshop, and even learned how to build layout templates — skills I now use in my own freelance projects.
              </p>
            </div>

            <div className="border-l-4 border-[#CFCBC4] pl-4">
              <h4 className="font-semibold text-[#2E2E2E] mb-2">Analogue Classes</h4>
              <p className="text-base leading-[1.2em] text-[#2E2E2E]">
                Despite my initial discomfort with drawing, the analogue class helped me embrace the value of tactile experimentation. It showed me that even outside of the digital world, design is about attitude, not skill level. This website reflects that realisation: I've always felt a bit insecure about my handwriting and signature, but here, I chose to embrace them—using my signature as the logo and my handwriting for the headings.
              </p>
            </div>
          </div>
        </div>

        {/* Inspiring Designers Section */}
        <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-6 text-[#2E2E2E]">Inspiring Designers</h3>
          
          <div className="space-y-6">
            <div className="border-b border-[#CFCBC4] pb-4">
              <h4 className="font-semibold text-[#A4492D] mb-2">Studio Dumbar</h4>
              <p className="text-sm leading-[1.2em] text-[#2E2E2E] mb-2">
                <span className="font-medium">Netherlands</span> • Brand Identity & Visual Systems
              </p>
              <p className="text-base leading-[1.2em] text-[#2E2E2E]">
                Their impact on Dutch visual culture is everywhere — from emergency vehicles to advertising panels. Their bold identity and unmistakable aesthetic inspired me to think about how design influences public space and creates lasting cultural impact.
              </p>
            </div>

            <div className="border-b border-[#CFCBC4] pb-4">
              <h4 className="font-semibold text-[#A4492D] mb-2">Stefan Sagmeister</h4>
              <p className="text-sm leading-[1.2em] text-[#2E2E2E] mb-2">
                <span className="font-medium">Austria</span> • Experimental Typography & Art Direction
              </p>
              <p className="text-base leading-[1.2em] text-[#2E2E2E]">
                His fearless approach to typography and willingness to push boundaries resonates with my own journey of embracing imperfection. His work shows that design can be both deeply personal and universally compelling, blending art with commercial purpose.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#A4492D] mb-2">Bureau Borsche</h4>
              <p className="text-sm leading-[1.2em] text-[#2E2E2E] mb-2">
                <span className="font-medium">Germany</span> • Contemporary Visual Identity
              </p>
              <p className="text-base leading-[1.2em] text-[#2E2E2E]">
                Their clean, systematic approach to visual identity design demonstrates how contemporary European design can be both minimal and impactful. Their work with cultural institutions and fashion brands shows the versatility of thoughtful design systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom reflection */}
      <div className="mt-8 max-w-[800px]">
        <p className="text-base leading-[1.2em] text-[#2E2E2E]">
          These influences — both from structured learning and inspiring practitioners — have shaped my understanding that design is not just about aesthetics, but about creating meaningful connections between ideas, people, and experiences.
        </p>
      </div>
    </section>
  )
} 