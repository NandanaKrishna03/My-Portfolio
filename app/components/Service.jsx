import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

function Service() {
  return (
    <div id="services" className="w-full max-w-[1200px] mx-auto px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a Graduate Student who loves to work in Web Development.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10" >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div key={index} className=" border border-gray-400 rounded-lg px-8 py-12  cursor-pointer hover:bg-lightHover  hover:-translate-y-1 hover:shadow-[var(--shadow-black)] duration-500">
            <Image src={icon} alt="" width={40} height={40} />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 text-center">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5 text-blue-500">
              Read More <Image src={assets.right_arrow} alt="" width={16} height={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
