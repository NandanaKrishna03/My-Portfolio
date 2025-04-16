import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
  <div className='mt-20'>
    <div className='text-center'>
    <video src="/logo-nandana.mp4" autoPlay loop muted className="w-30 cursor-pointer mx-auto mb-2"></video>

    <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={assets.mail_icon} alt='' className='w-6' />
        nandanakrishna75@gmail.com
    </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Nandana Krishna. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
        <li><a  target='_blank'href='https://github.com/NandanaKrishna03'>Github</a></li>
        <li><a  target='_blank'href='https://www.linkedin.com/in/nandana-krishna03/'>LinkedIn</a></li>
        </ul>
    </div>
    </div>
    </div>
  )
}

export default Footer
