import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Work() {
  return (
    <div id="work" className="w-full max-w-[1200px] mx-auto px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a Graduate Student who loves to work in Web Development.
      </p>

      <div className='grid grid-cols-auto my-10 gap-5'>
        {workData.map((project, index) => {
          const isExternal = project.link?.startsWith('http')
          return (
            <div
              key={index}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  {isExternal ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <h2 className='font-semibold hover:underline'>{project.title}</h2>
                    </a>
                  ) : (
                    <Link href={project.link}>
                      <h2 className='font-semibold hover:underline'>{project.title}</h2>
                    </Link>
                  )}
                  <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <Image src={assets.send_icon} alt='send-icon' className='w-5' />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work
