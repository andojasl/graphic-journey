import Image from 'next/image'

export default function GrowthSection() {
  return (
    <section id="growth" className="px-36 py-16 scroll-mt-32">
      <div className="mb-8">
        <Image
          src="/images/section-5-icon.svg"
          alt="Section icon"
          width={127}
          height={51}
          className="h-[51px] w-auto"
        />
      </div>

      <div className="space-y-6">
        <p className="text-base leading-[1.2em]">
          At the start of this minor, I didn't feel like a designer. I was uncertain, even uncomfortable calling myself one. Visual creativity was something I admired in others — not something I felt confident in. But I was determined to change that.
        </p>

        <p className="text-base leading-[1.2em]">
          As the weeks passed, I realized that creativity isn't a fixed trait — it's a process. I gave myself permission to try, to fail, to experiment. The more I did, the more confident I became.
        </p>

        <p className="text-base leading-[1.2em]">
          A major breakthrough came when I was working with my group on client assignments and our own visual identity. That's when I realised that being a designer isn't about being perfect — it's about being curious and responsive.
        </p>

        <p className="text-base leading-[1.2em]">
          During my conversation with Vienna, I reflected on my challenges — especially balancing this minor with a heavy personal schedule: commuting, freelancing, major classes, part-time work, and training for an ultramarathon. Despite all of this, I committed to showing up and engaging in class. That talk helped me recognize that presence and intention matter as much as output.
        </p>
      </div>
    </section>
  )
} 