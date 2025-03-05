import React from 'react'
import Image from 'next/image'

import Instagram from '../../public/icons/Instagram.svg'
import LinkedIn from '../../public/icons/LinkedIn.svg'
import Twitter from '../../public/icons/Twitter.svg'

function Banner() {
  return (
    <div className='banner h-12 w-full bg-[#000]/40 flex justify-center items-center'>
        <div className="banner_container flex items-center space-x-4">
            <h2 className='text-white opacity-100 text-center text-sm'>ETHAN@THEFLOORCOMPANY.CA TEL: 613-866-7990</h2>
            
            <div className="social-icons flex items-center space-x-3">
                <a 
                  href="https://instagram.com/thefloorcompany" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                    <Image src={Instagram} alt="logo" width={20} height={20} />
                </a>
                <a 
                  href="https://linkedin.com/company/thefloorcompany" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                    <Image src={LinkedIn} alt="logo" width={20} height={20} />
                </a>
                <a 
                  href="https://twitter.com/thefloorcompany" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                    <Image src={Twitter} alt="logo" width={20} height={20} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Banner