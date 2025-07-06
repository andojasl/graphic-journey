import Image from 'next/image'

export default function IntroductionSection() {
  return (
    <section id="introduction" className="px-36 pt-16 pb-4 scroll-mt-32">
      <div className="flex items-center justify-center mb-12">
        <Image
          src="/images/graphic-journey.svg"
          alt="Graphic Journey"
          width={290}
          height={70}
          className="h-[70px] w-auto"
        />
      </div>

      <div className="flex gap-12">
        <div className="flex-1 space-y-4">
          <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-2">
            <p className="text-base leading-[1.2em]">
              This website is a reflection of my personal and professional growth throughout the graphic design minor. Over the course of these months, I've explored what it means to think, see, and create like a designer — not just through tools and techniques, but through mindset, intuition, and exploration
            </p>
          </div>
          <div className="h-24"></div>
          <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-2">
            <p className="text-base leading-[1.2em]">
              Every part of this journey is visual, personal, and honest. The website itself is also a reflection of my design identity — from the typography to the colors, layout, and structure.
            </p>
          </div>
        </div>

        <div className="w-px bg-[#2E2E2E] mx-12"></div>

        <div className="flex-1 flex items-center">
          <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-2">
            <p className="text-base leading-[1.2em]">
              What started as uncertainty has gradually evolved into confidence. I've learned how to draw inspiration from the world around me, how to translate ideas into visuals, and how to embrace both structure and play in the creative process. I've also discovered what kind of designer I want to be — one who values clarity, intuition, and thoughtful aesthetics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 