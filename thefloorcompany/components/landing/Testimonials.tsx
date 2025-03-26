import React from 'react'
import { testimonialData } from '@/utils/data/testimonialData'
import TestimonialCarousel from './carousel'

function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        <p className="mt-4 text-xl text-gray-600">
          Don't just take our word for it - hear from some of our satisfied clients
        </p>
      </div>
      
      <TestimonialCarousel 
        testimonials={testimonialData} 
        autoplay={true} 
        autoplaySpeed={6000}
        showDots={true}
        showArrows={true}
      />
    </div>
  </section>
  )
}

export default Testimonials