import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  images: string[]
  isLarge?: boolean
}

export default function ProjectCard({ title, description, images, isLarge = false }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="px-36 py-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-gray-800 w-40">{title}</h3>
          <p className="text-xl italic text-gray-800 h-13 leading-tight">{description}</p>
        </div>
      </div>
      
      <div className="px-36">
        <div className={`bg-gray-100 border border-gray-300 rounded-lg p-4 ${
          isLarge ? 'flex justify-center' : 'flex gap-4'
        }`}>
          {images.map((image, index) => (
            <div key={index} className={`${isLarge ? 'w-96' : 'flex-1'} relative`}>
              <Image
                src={image}
                alt={`${title} preview ${index + 1}`}
                width={isLarge ? 370 : 400}
                height={isLarge ? 492 : 800}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <p className="text-xl font-normal text-gray-800 leading-tight">
            {title === "Kobu" && "Custom-built components were used to simulate the final version's states. The prototype is fully functional in Figma, with each row operating as a slider.\n\nThe design also includes self made icons for pearls and stones with default and active states."}
            {title === "Prano" && "As part of an ongoing collaboration with a friend to develop an e-commerce jewelry website, I designed a website layout for inclusion in the commercial book project."}
            {title === "@ease" && "This was a personal project for Teams at Ease, which included both design and implementation of a website."}
            {title === "Tote bag design" && "Tote bag design featuring traditional Lithuanian symbols"}
            {title === "Adobe advanced: portraits" && "Portraits made using triangular art and pixel drawing techniques"}
            {title === "Adobe advanced: gif" && "Drawn in Adobe Illustrator and brought to life using Photoshop"}
            {title === "Alpacalypse" && "Alpaca festival landing page design"}
            {title === "Typography: poster" && "Poster made using two typefaces and 3 colours"}
          </p>
        </div>
      </div>
    </div>
  )
}

