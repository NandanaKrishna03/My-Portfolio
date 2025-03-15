import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.displayPicture} alt='user' className='w-full rounded-3xl'/>
        </div>

        <div className='flex-1'>
          <p>Hi, I am a Graduate Student who loves to work in Web Development. I specialize in the MERN stack and enjoy building dynamic, user-friendly applications. Passionate about learning and innovation, I thrive in collaborative environments. Let’s create something amazing together!</p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
  {infoList.map(({ icon, iconDark, title, description }, index) => (
    <li key={index} className="p-6 border border-gray-400 rounded-xl cursor-pointer hover:bg-[var(--light-hover)] hover:-translate-y-1 hover:shadow-black duration-500">
      <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
      <p className='text-gray-600 text-sm'>{description}</p>
    </li>
  ))}
</ul>
      <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
      <ul className='flex items-center gap-3 sm:gap-5'>
        {toolsData.map((tool,index)=>(
          <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg hover:shadow-[0px_4px_10px_rgba(0,0,0,0.5)] cursor-pointer hover:-translate-y-1 duration-500' >
            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
          </li>
        ))}
      </ul>

        </div>
      </div>
    </div>
  )
}

export default About
