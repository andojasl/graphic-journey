import Image from 'next/image'

export default function VisionSection() {
  return (
    <section id="vision" className="px-36 py-16 scroll-mt-32">
      <div className="mb-8">
        <Image
          src="/images/section-6-icon.svg"
          alt="Section icon"
          width={101}
          height={70}
          className="h-[70px] w-auto"
        />
      </div>

      <div className="space-y-6">
        <p className="text-base leading-[1.2em]">
          I see myself as a designer-developer hybrid — someone who can take a product from concept to code. What excites me is the ability to build something entirely on my own: from brand identity and UX to fully functioning software.
        </p>

        <p className="text-base leading-[1.2em]">
          My immediate goal is to sharpen my skills in both design and development. I plan to build several tools and digital products — each one fully designed and coded by me.
        </p>

        <p className="text-base leading-[1.2em]">
          Long-term, I hope to either build a product of my own or join a startup where I can have impact across design, code, and brand. This minor gave me the confidence to believe that this hybrid identity is not only possible — it's powerful.
        </p>
      </div>
    </section>
  )
} 