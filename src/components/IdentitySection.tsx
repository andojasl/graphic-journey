import Image from 'next/image'

export default function IdentitySection() {
  return (
    <section id="identity" className="px-36 py-16 scroll-mt-32">
      <div className="mb-6">
        <Image
          src="/images/section-4-icon.svg"
          alt="Section icon"
          width={162}
          height={82}
          className="h-[82px] w-auto"
        />
      </div>

      <div className="mb-8">
        <p className="text-base italic leading-[1.2em] mb-8 max-w-[418px]">
          I believe that good design should feel intuitive and immediately recognisable — but that doesn't mean it must sacrifice beauty. My goal is always to strike a balance between clarity and aesthetics.
        </p>
      </div>

      <div className="flex justify-end mb-8">
        <p className="text-base leading-[1.2em] max-w-[491px]">
          My journey began with an interest in UI/UX — crafting interfaces that are easy to use but still visually engaging. This duality defines my work.
        </p>
      </div>

      <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-4">
        <div className="flex gap-4 mb-14">
          <div className="max-w-[883px]">
            <p className="text-base leading-[1.2em] mb-4">
              My personal branding reflects this. I created a simple logo based on my signature, to symbolize clarity and authenticity. I chose a palette of pastel greens and terracotta: the green connects to my love for nature and running, while the terracotta reminds me of forest floors and tree trunks — both grounding and warm. From a color psychology perspective, green evokes calm and balance; terracotta adds warmth and earthiness.
            </p>

            {/* Color Palette */}
            <div className="flex gap-3 mb-6">
              <div className="space-y-2">
                <span className="text-base text-[#2E2E2E] block w-[107px]">Background</span>
                <div className="flex gap-2">
                  <div className="w-[75px] h-[75px] bg-[#CFCBC4] border border-[#6C7A89] rounded-lg"></div>
                  <div className="w-[75px] h-[75px] bg-[#EDEBE5] border border-[#6C7A89] rounded-lg"></div>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-base text-[#2E2E2E] block w-[107px]">Foreground</span>
                <div className="flex gap-2">
                  <div className="w-[75px] h-[75px] bg-[#F7F6F2] border border-[#6C7A89] rounded-lg"></div>
                  <div className="w-[75px] h-[75px] bg-[#2E2E2E] border border-[#2E2E2E] rounded-lg"></div>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-base text-[#2E2E2E] block w-[107px]">Accent</span>
                <div className="flex gap-2">
                  <div className="w-[75px] h-[75px] bg-[#A4492D] border border-[#6C7A89] rounded-lg"></div>
                  <div className="w-[75px] h-[75px] bg-[#6C7A89] border border-[#6C7A89] rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex items-center gap-4 max-w-[743px]">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded space-y-6">
                <div>
                  <Image
                    src="/images/signature-logo.svg"
                    alt="Signature Logo"
                    width={150}
                    height={55}
                    className="h-[55px] w-auto"
                  />
                  <h3 className="text-2xl font-semibold mt-6">Subheader</h3>
                </div>
              </div>
              <p className="text-base leading-[1.2em]">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm<br />
                Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz<br />
                0 1 2 3 4 5 6 7 8 9
              </p>
            </div>
            <div className="space-y-4 max-w-[400px]">
              <p className="text-base leading-[1.2em]">
                I chose Gilroy as my primary typeface for its geometric simplicity and legibility. It supports my clean, structured aesthetic. As mentioned in the previous chapter, I ended up using my signature as the logo and my handwriting for the headings.
              </p>
              <div className="bg-white p-4 rounded">
                <Image
                  src="/images/signature-logo.svg"
                  alt="Logo"
                  width={150}
                  height={84}
                  className="h-[84px] w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 