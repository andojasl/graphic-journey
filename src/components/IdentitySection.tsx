import Image from 'next/image'

export default function IdentitySection() {
  return (
    <section id="identity" className="px-36 py-16 scroll-mt-32">
      <div className="mb-8">
        <Image
          src="/images/identity.svg"
          alt="Identity"
          width={167}
          height={70}
          className="h-[70px] w-auto"
        />
      </div>

      {/* Hero Quote */}
      <div className="mb-16">
        <div className="max-w-[800px] mx-auto text-center">
          <blockquote className="text-2xl italic leading-[1.3em] text-[#2E2E2E] mb-6">
            &ldquo;I believe that good design should feel intuitive and immediately recognisable — but that doesn&apos;t mean it must sacrifice beauty. My goal is always to strike a balance between clarity and aesthetics.&rdquo;
          </blockquote>
          <div className="w-16 h-px bg-[#A4492D] mx-auto"></div>
        </div>
      </div>

      {/* Journey Context */}
      {/* <div className="mb-12">
        <div className="flex justify-center">
          <p className="text-base leading-[1.2em] max-w-[600px] text-center">
            My journey began with an interest in UI/UX — crafting interfaces that are easy to use but still visually engaging. This duality defines my work and personal brand.
          </p>
        </div>
      </div> */}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
        
        {/* Personal Branding Story */}
        <div className="xl:col-span-2 bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-6 text-[#2E2E2E]">Personal Branding Philosophy</h3>
          <p className="text-base leading-[1.2em] text-[#2E2E2E] mb-8">
            My journey began with an interest in UI/UX — crafting interfaces that are easy to use but still visually engaging. This duality defines my work and personal brand.
            My personal branding reflects this balance. I created a simple logo based on my signature, to symbolize clarity and authenticity. I chose a palette of warm beige and terracotta: the beige creates a calm, neutral foundation that feels approachable, while the terracotta adds warmth and earthiness — both grounding and inviting.
          </p>
          
          {/* Color Palette */}
          <div className="mb-8">
            <h4 className="font-semibold text-[#2E2E2E] mb-4">Colors</h4>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex flex-col gap-2 mb-3">
                  <div className="w-full h-20 bg-[#CFCBC4] border-2 border-[#6C7A89] rounded-lg"></div>
                  <div className="w-full h-20 bg-[#EDEBE5] border-2 border-[#6C7A89] rounded-lg"></div>
                </div>
                <p className="text-sm font-medium text-[#2E2E2E]">Background</p>
                <p className="text-xs text-[#6C7A89]">Calm & Neutral</p>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col gap-2 mb-3">
                  <div className="w-full h-20 bg-[#F7F6F2] border-2 border-[#6C7A89] rounded-lg"></div>
                  <div className="w-full h-20 bg-[#2E2E2E] border-2 border-[#2E2E2E] rounded-lg"></div>
                </div>
                <p className="text-sm font-medium text-[#2E2E2E]">Foreground</p>
                <p className="text-xs text-[#6C7A89]">Clean & Readable</p>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col gap-2 mb-3">
                  <div className="w-full h-20 bg-[#A4492D] border-2 border-[#6C7A89] rounded-lg"></div>
                  <div className="w-full h-20 bg-[#6C7A89] border-2 border-[#6C7A89] rounded-lg"></div>
                </div>
                <p className="text-sm font-medium text-[#2E2E2E]">Accent</p>
                <p className="text-xs text-[#6C7A89]">Warm & Balanced</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm leading-[1.2em] text-[#6C7A89] italic">
            From a color psychology perspective, warm beige tones evoke calm and reliability; terracotta adds warmth and earthiness — creating a palette that feels both professional and approachable.
          </p>
        </div>

        {/* Logo Showcase */}
        <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-8 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-6 text-[#2E2E2E] text-center">Visual Identity</h3>
          
          <div className="bg-white rounded-lg p-8 mb-6 text-center">
            <Image
              src="/images/signature-logo.svg"
              alt="Signature Logo"
              width={200}
              height={72}
              className="h-[72px] w-auto mx-auto mb-4"
            />
            <p className="text-sm text-[#6C7A89]">Primary Logo</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#2E2E2E]">Concept</span>
              <span className="text-sm text-[#6C7A89]">Personal Signature</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#2E2E2E]">Style</span>
              <span className="text-sm text-[#6C7A89]">Handwritten</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#2E2E2E]">Purpose</span>
              <span className="text-sm text-[#6C7A89]">Authenticity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Section */}
      <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Typography Sample */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#2E2E2E]">Typography System</h3>
            
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="mb-6">
                <Image
                  src="/images/heading.svg"
                  alt="Heading"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto mb-4"
                />
                <h1 className="text-4xl font-bold text-[#2E2E2E] mb-3">Main Title</h1>
                <h3 className="text-xl font-semibold text-[#2E2E2E] mb-3">Section Heading</h3>
                <h4 className="font-semibold text-[#2E2E2E] mb-3">Subsection</h4>
                <blockquote className="text-2xl italic text-[#2E2E2E] mb-3">&ldquo;Hero Quote&rdquo;</blockquote>
                <p className="text-base text-[#2E2E2E] mb-2">Body text paragraph</p>
                <p className="text-sm text-[#6C7A89]">Caption text</p>
              </div>
              
              <div className="border-t border-[#CFCBC4] pt-4">
                <p className="text-sm text-[#2E2E2E]">
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm<br />
                  Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz<br />
                  0 1 2 3 4 5 6 7 8 9
                </p>
              </div>
            </div>
          </div>
          
          {/* Typography Description */}
          <div>
            <h4 className="font-semibold text-[#2E2E2E] mb-4">Gilroy Font Family</h4>
            <p className="text-base leading-[1.2em] text-[#2E2E2E] mb-6">
              I chose Gilroy as my primary typeface for its geometric simplicity and legibility. It supports my clean, structured aesthetic while maintaining excellent readability across all sizes.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2E2E2E]">Main Title (H1)</span>
                <span className="text-sm text-[#6C7A89]">Gilroy Bold</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2E2E2E]">Section Headings (H3)</span>
                <span className="text-sm text-[#6C7A89]">Gilroy SemiBold</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2E2E2E]">Subsections (H4)</span>
                <span className="text-sm text-[#6C7A89]">Gilroy SemiBold</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2E2E2E]">Body Text</span>
                <span className="text-sm text-[#6C7A89]">Gilroy Regular</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2E2E2E]">Hero Quotes</span>
                <span className="text-sm text-[#6C7A89]">Gilroy Italic</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-[#EDEBE5] rounded-lg">
              <p className="text-sm leading-[1.2em] text-[#2E2E2E]">
                <strong>Personal Touch:</strong> The section headings you see in the images are handwritten by me, embracing the authenticity of imperfection. This personal element adds character while maintaining the clean Gilroy system for body text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 