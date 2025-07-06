// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'

// interface HeaderProps {
//   activeSection: string
// }

// export default function Header({ activeSection }: HeaderProps) {
//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-md bg-[#EDEBE5]/80 border-b border-[#CFCBC4]/30 flex justify-between items-center px-32 py-8 gap-24">
//       <div className="p-4 rounded">
//         <Image
//           src="/images/signature-logo.svg"
//           alt="Andojas Signature Logo"
//           width={232}
//           height={84}
//           className="h-[84px] w-auto"
//         />
//       </div>
//       <div className='flex flex-col gap-4'>
//                 <section>
//           <div className="flex justify-end">
//             <div className="bg-[#CFCBC4] border border-[#F7F6F2] rounded-xl p-3 flex gap-4">
//               <a 
//                 href="#inspiration" 
//                 className={`px-4 py-3 rounded-lg transition-colors ${
//                   activeSection === 'inspiration' 
//                     ? 'bg-[#6C7A89] text-[#F7F6F2]' 
//                     : 'bg-[#EDEBE5] text-[#2E2E2E] hover:bg-[#6C7A89] hover:text-[#F7F6F2]'
//                 }`}
//               >
//                 <span className="text-xl font-regular">Inspiration</span>
//               </a>
//               <a 
//                 href="#influence" 
//                 className={`px-4 py-3 rounded-lg transition-colors ${
//                   activeSection === 'influence' 
//                     ? 'bg-[#6C7A89] text-[#F7F6F2]' 
//                     : 'bg-[#EDEBE5] text-[#2E2E2E] hover:bg-[#6C7A89] hover:text-[#F7F6F2]'
//                 }`}
//               >
//                 <span className="text-xl font-regular">Influence</span>
//               </a>
//               <a 
//                 href="#identity" 
//                 className={`px-4 py-3 rounded-lg transition-colors ${
//                   activeSection === 'identity' 
//                     ? 'bg-[#6C7A89] text-[#F7F6F2]' 
//                     : 'bg-[#EDEBE5] text-[#2E2E2E] hover:bg-[#6C7A89] hover:text-[#F7F6F2]'
//                 }`}
//               >
//                 <span className="text-xl font-regular">Identity</span>
//               </a>
//               <a 
//                 href="#growth" 
//                 className={`px-4 py-3 rounded-lg transition-colors ${
//                   activeSection === 'growth' 
//                     ? 'bg-[#6C7A89] text-[#F7F6F2]' 
//                     : 'bg-[#EDEBE5] text-[#2E2E2E] hover:bg-[#6C7A89] hover:text-[#F7F6F2]'
//                 }`}
//               >
//                 <span className="text-xl font-regular">Growth</span>
//               </a>
//               <a 
//                 href="#vision" 
//                 className={`px-4 py-3 rounded-lg transition-colors ${
//                   activeSection === 'vision' 
//                     ? 'bg-[#6C7A89] text-[#F7F6F2]' 
//                     : 'bg-[#EDEBE5] text-[#2E2E2E] hover:bg-[#6C7A89] hover:text-[#F7F6F2]'
//                 }`}
//               >
//                 <span className="text-xl font-regular">Vision</span>
//               </a>
//             </div>
//           </div>
//         </section>
//         <div className="flex items-center justify-end gap-3">
//           <Link href="/projects" className="flex items-center gap-3 group">
//             <span className="text-[#A4491D] text-xl">My projects</span>
//             <Image
//               src="/images/arrow-forward.svg"
//               alt="Arrow"
//               width={23}
//               height={23}
//               className="text-[#A4491D]"
//             />
//           </Link>
//         </div>

//       </div>
//     </header>
//   )
// } 