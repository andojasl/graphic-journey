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
                width={isLarge ? 370 : 600}
                height={isLarge ? 492 : 400}
                quality={95}
                className="w-full h-auto object-contain rounded"
                priority={index === 0}
                unoptimized={image.endsWith('.gif')}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <p className="text-xl font-normal text-gray-800 leading-tight">
            {title === "Kobu" && "Custom-built components were used to simulate the final version's states. The prototype is fully functional in Figma, with each row operating as a slider.\n\nThe design also includes self made icons for pearls and stones with default and active states.\n\nProcess: Started with user research to understand the filtering needs, then created wireframes focusing on intuitive navigation. The main challenge was balancing functionality with visual elegance.\n\nLearning Outcome: Gained expertise in interactive prototyping and learned how to design for complex filtering systems while maintaining user-friendly interfaces."}
            {title === "Prano" && "As part of an ongoing collaboration with a friend to develop an e-commerce jewelry website, I designed a website layout for inclusion in the commercial book project.\n\nProcess: Conducted competitive analysis of luxury jewelry brands, focusing on how they balance product showcase with brand storytelling. Created multiple layout variations testing different approaches to product presentation.\n\nTechnical Challenge: Designing for high-quality product photography while ensuring fast loading times and mobile responsiveness.\n\nLearning Outcome: Developed skills in e-commerce UX design and learned how to create layouts that convert browsers into buyers through strategic visual hierarchy."}
            {title === "@ease" && "This was a personal project for Teams at Ease, which included both design and implementation of a website.\n\nProcess: Worked directly with the client to understand their brand values and target audience. Created wireframes, high-fidelity mockups, and then coded the entire website using modern web technologies.\n\nTechnical Challenge: Implementing responsive design that works seamlessly across all devices while maintaining the brand's professional aesthetic.\n\nLearning Outcome: This project strengthened my designer-developer hybrid identity, proving I can take a project from concept to live deployment. Gained experience in client communication and project management."}
            {title === "Tote bag design" && "Tote bag design featuring traditional Lithuanian symbols, created as part of cultural heritage exploration.\n\nProcess: Researched traditional Lithuanian folk art and symbols, studying their historical significance and visual characteristics. Adapted these elements for modern application while respecting their cultural meaning.\n\nDesign Challenge: Balancing authenticity with contemporary aesthetic appeal, ensuring the design honors tradition while being visually engaging for modern audiences.\n\nLearning Outcome: Developed skills in cultural design research and learned how to adapt traditional elements for contemporary applications."}
            {title === "Adobe advanced: portraits" && "Portraits made using triangular art and pixel drawing techniques, exploring geometric abstraction in digital art.\n\nProcess: Experimented with different geometric approaches to portrait representation, starting with basic triangular shapes and gradually building complexity. Used both vector and raster techniques to achieve different textures.\n\nTechnical Challenge: Learning to balance geometric precision with organic human features, finding the right level of abstraction that maintains recognizability.\n\nLearning Outcome: Mastered advanced Adobe techniques and developed an appreciation for geometric art styles. This project pushed me to think beyond traditional portrait approaches."}
            {title === "Adobe advanced: gif" && "Drawn in Adobe Illustrator and brought to life using Photoshop, combining vector illustration with animation principles.\n\nProcess: Started with concept sketches, then created vector illustrations in Illustrator focusing on clean, animation-friendly shapes. Imported to Photoshop for frame-by-frame animation, paying attention to timing and easing.\n\nTechnical Challenge: Ensuring smooth animation while keeping file size manageable. Learning to think in terms of motion and timing rather than static design.\n\nLearning Outcome: Gained proficiency in animation principles and learned how to create engaging motion graphics that enhance storytelling."}
            {title === "Alpacalypse" && "Alpaca festival landing page design, focusing on playful branding and event promotion.\n\nProcess: Developed a complete brand identity starting with the playful 'Alpacalypse' concept. Created custom illustrations, chose typography that balances fun with readability, and designed a layout optimized for event information hierarchy.\n\nDesign Challenge: Creating a design that feels fun and approachable while still providing clear, actionable information for festival attendees.\n\nLearning Outcome: Developed skills in event branding and learned how to create designs that capture the spirit of an event while serving practical communication needs."}
            {title === "Typography: poster" && "Poster made using two typefaces and 3 colours, exploring the fundamentals of typographic hierarchy and color theory.\n\nProcess: Started with extensive typeface research, testing different combinations for contrast and harmony. Applied color theory principles to create visual hierarchy and emotional impact with minimal elements.\n\nDesign Challenge: Creating visual interest and clear communication using only two typefaces and three colors. Every decision had to be intentional and purposeful.\n\nLearning Outcome: Mastered fundamental design principles and learned that effective design often comes from constraint rather than unlimited options. This project taught me the power of simplicity and intentional design choices."}
          </p>
        </div>
      </div>
    </div>
  )
}

