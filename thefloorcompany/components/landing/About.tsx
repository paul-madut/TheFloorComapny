import React from 'react'
import Card from "../about/Card"
import { aboutData } from '@/utils/data/aboutData'
function About() {



  
  return (
    <div className='w-full min-h-fit p-4 bg-[#3e3e3e]'>
     <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Services and Products</h2>
        <p className="mt-4 text-xl text-white">
          Here's what we can do for you!
        </p>
      </div>
    <div className="cards__container flex flex-col justify-center items-center">

     <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-evenly">
      {aboutData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
     </div>
      </div>
    </div>
  )
}

export default About