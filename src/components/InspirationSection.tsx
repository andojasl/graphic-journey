import Image from 'next/image'

export default function InspirationSection() {
  return (
    <section id="inspiration" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-8 sm:py-12 md:py-16 scroll-mt-32">
     <div className="mb-6 sm:mb-8">
        <Image
          src="/images/inspiration.svg"
          alt="Inspiration"
          width={167}
          height={70}
          className="h-[50px] sm:h-[60px] md:h-[70px] w-auto"
        />
      </div>

     
      <div className="bg-[#F7F6F2] border border-[#CFCBC4] rounded-lg p-3 sm:p-4 md:p-6">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 h-full">
          {/* Left Column */}
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-sm sm:text-base leading-[1.2em] w-full lg:w-[495px] mb-2">
              In the beginning of this minor, getting started was one of my biggest challenges. I used to think that great ideas would come with enough theoretical knowledge — that there&apos;d always be a &lsquo;right&rsquo; solution. But I&apos;ve come to realize something far more practical: you just have to start. Once I begin sketching or typing or designing, ideas follow.
            </p>
            
            <div className="w-full h-[200px] sm:h-[280px] md:h-[360px] mb-2">
              <Image
                src="/images/studio-dumbar-new.jpg"
                alt="Studio Dumbar design reference"
                width={545}
                height={360}
                className="rounded object-cover w-full h-full"
              />
            </div>
            
            <div className="flex flex-row justify-between items-center gap-2 sm:gap-4">
              <p className="text-sm sm:text-base leading-[1.2em] flex-1 sm:w-[285px]">
                When I&apos;m stuck, I often go for a run. While it doesn&apos;t always generate a solution, it helps clear my head and reset my thought process — and occasionally, the best ideas appear while I&apos;m moving.
              </p>
              
              <div className="w-[120px] sm:w-[213px] h-[150px] sm:h-[280px] md:h-[369px] flex-shrink-0">
                <Image
                  src="/images/journal-image.jpg"
                  alt="Journal and reflection"
                  width={213}
                  height={369}
                  className="rounded-lg object-contain w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3 sm:gap-4 flex-1">
            {/* Inspiration Section */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 mb-2">
                <div className="w-full sm:w-[269px] h-[200px] sm:h-[269px]">
                  <Image
                    src="/images/running-new.jpg"
                    alt="Running inspiration"
                    width={269}
                    height={269}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 h-[200px] sm:h-[269px]">
                  <Image
                    src="/images/design-ref-new.jpg"
                    alt="Design reference"
                    width={269}
                    height={269}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <p className="text-sm sm:text-base leading-[1.2em]">
                My inspiration comes from everything around me. Since starting this minor, I&apos;ve become more visually aware — logos on shops, street signs, even license plates now feel like part of a design conversation. Music, books, nature — I catch myself visualising their energy in colours and compositions: vibrant and bold, or soft and minimal. Design is truly everywhere.
              </p>
            </div>

            {/* Jazz Section */}
            <div className="flex gap-2 sm:gap-4">
              <div className="flex justify-between items-center gap-2 flex-1">
                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <div className="w-[100px] sm:w-[126px] h-[120px] sm:h-[157px]">
                      <Image
                        src="/images/charlie-parker-new.jpg"
                        alt="Charlie Parker"
                        width={126}
                        height={157}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="w-[100px] sm:w-[126px] h-[120px] sm:h-[160px]">
                      <Image
                        src="/images/art-blakey-new.jpg"
                        alt="Art Blakey, 1951"
                        width={126}
                        height={160}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base leading-[1.2em] flex-1">
                    I&apos;m generally a very active person, and I find it challenging to sit still and focus for long periods.
                    <br /><br />
                    However, I&apos;ve noticed that listening to jazz helps me concentrate and actually enjoy the process.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-[100px] sm:h-[131px]">
              <Image
                src="/images/nature-image.jpg"
                alt="Nature inspiration"
                width={200}
                height={131}
                className="rounded object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
        </section>
  )
} 