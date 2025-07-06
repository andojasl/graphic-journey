import Image from 'next/image'

export default function IntroductionSection() {
  return (
    <section id="introduction" className="px-8 md:px-16 lg:px-36 pt-16 pb-20 scroll-mt-32">
      {/* Logo */}
      <div className="mb-12">
        <Image
          src="/images/graphic-journey.svg"
          alt="Graphic Journey"
          width={280}
          height={65}
          className="h-[65px] w-auto"
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] leading-tight mb-8">
          From uncertainty to
          <span className="text-[#A4491D]"> confidence</span>,
          one design at a time
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-base text-[#6C7A89] leading-relaxed">
              This website chronicles my transformation throughout the graphic design minor — exploring what it means to think, see, and create like a designer.
            </p>

            <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-4">
              <blockquote className="text-base text-[#2E2E2E] leading-relaxed italic">
                Every element of this journey is visual, personal, and honest. The website itself reflects my design identity — from typography to colors, layout, and structure.
              </blockquote>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-4">
              <blockquote className="text-base text-[#2E2E2E] leading-relaxed italic">
                What started as uncertainty has gradually evolved into confidence. I've learned how to draw inspiration from the world around me, how to translate ideas into visuals.
              </blockquote>
            </div>

            <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-4">
              <blockquote className="text-base text-[#2E2E2E] leading-relaxed italic">
                I've discovered what kind of designer I want to be — one who values clarity, intuition, and thoughtful aesthetics.
              </blockquote>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-[#CFCBC4]">
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-sm text-[#A4491D] font-medium">Visual Storytelling</div>
            <div className="w-1 h-1 bg-[#CFCBC4] rounded-full"></div>
            <div className="text-sm text-[#6C7A89] font-medium">Creative Process</div>
            <div className="w-1 h-1 bg-[#CFCBC4] rounded-full"></div>
            <div className="text-sm text-[#2E2E2E] font-medium">Design Identity</div>
          </div>
        </div>
      </div>
    </section>
  )
} 