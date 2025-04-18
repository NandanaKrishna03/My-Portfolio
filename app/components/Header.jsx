import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen
    flex flex-col items-center justify-center gap-4 mt-16'>
      <div>
       
        <Image src={assets.displayPicture} alt='' className='rounded-full w-32'/> 
        
      </div>
     
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 fon-Ovo '>Hi I'm Nandana <Image src={assets.hand_icon} alt='' className='w-6 mb-1'/></h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>frontEnd web developer based in Kerala.</h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
        I am a MERN stack developer from Kerala,India I am a 22 year old Fresher with Good skill in web developing. 
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact"
         className='px-10 py-3 border border-white rounded-full
          bg-black text-white flex items-center gap-2'>
            Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>

            <a href="/sample-resume.pdf" download
         className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
            my Resume<Image src={assets.download_icon} alt='' className='w-4'/></a>
      </div>
    </div>
  )
}

export default Header
