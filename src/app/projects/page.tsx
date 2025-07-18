import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from './Components/ProjectComponent'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Kobu",
      description: "A filtering system for Kobu Parels' \"create your own\" service.",
      images: ["/images/parels.png"]
    },
    {
      title: "Prano", 
      description: "Jewellery website design",
      images: ["/images/prano-home.png", "/images/prano-chains.png"]
    },
    {
      title: "@ease",
      description: "Website for Teams at Ease", 
      images: ["/images/@ease-2.png", "/images/@ease-1.png"]
    },
    {
      title: "Tote bag design",
      description: "Tote bag design featuring traditional Lithuanian symbols",
      images: ["/images/tote-bag.png"]
    },
    {
      title: "Adobe advanced: portraits",
      description: "Portraits made using triangular art and pixel drawing techniques",
      images: ["/images/portrait1.png", "/images/portrait2.png"]
    },
    {
      title: "Adobe advanced: gif", 
      description: "Drawn in Adobe Illustrator and brought to life using Photoshop",
      images: ["/images/pizza-gif.gif"],
      isLarge: true
    },
    {
      title: "Alpacalypse",
      description: "Alpaca festival landing page design",
      images: ["/images/alpacalypse.png"],
      isLarge: true
    },
    {
      title: "Typography: poster",
      description: "Poster made using two typefaces and 3 colours", 
      images: ["/images/typography-poster.png"],
      isLarge: true
    }
  ]

  return (
    <div>
    <div 
      className="min-h-screen"
      style={{
        background: 'var(--color-background)'
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#EDEBE5]/80 flex justify-between items-center px-32 py-4 gap-24">
        {/* Logo */}
        <div className="p-2 rounded">
          <Image
            src="/images/signature.svg"
            alt="Signature Logo"
            width={180}
            height={65}
            className="w-auto h-auto"
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg text-accent hover:text-orange-800 flex flex-row gap-2 transition-colors">
              Back to main
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill="currentColor"/>
            </svg>
            </Link>
            
          </div>
        </div>
      </header>

      {/* Center Asset */}
      <div className="flex justify-center pb-16">
        <div className="p-4 rounded">
          <Image
            src="/images/projects.svg"
            alt="Projects"
            width={202}
            height={70}
            className="h-[70px] w-auto"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-24 pb-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            isLarge={project.isLarge}
          />
        ))}
      </div>
    </div>
    </div>
  )

}