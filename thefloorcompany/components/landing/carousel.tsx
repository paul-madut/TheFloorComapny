"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the testimonial type
export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  image?: string;
  rating?: number;
}[];

type TestimonialCarouselProps = {
  testimonials: Testimonial;
  autoplay?: boolean;
  autoplaySpeed?: number;
  showDots?: boolean;
  showArrows?: boolean;
};

const TestimonialCarousel = ({
  testimonials = [],
  autoplay = true,
  autoplaySpeed = 5000,
  showDots = true,
  showArrows = true,
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Guard against empty testimonials array
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-center text-gray-500">No testimonials available</p>
      </div>
    );
  }

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, testimonials.length]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-500' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        ))}
      </div>
    );
  };

  // Ensure current index is valid
  const safeIndex = Math.min(currentIndex, testimonials.length - 1);
  const currentTestimonial = testimonials[safeIndex];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={safeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                {/* Testimonial content */}
                <div className="md:flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      {currentTestimonial.rating && 
                        renderStars(currentTestimonial.rating)}
                    </div>
                    <p className="text-gray-600 italic text-lg mb-6">
                      "{currentTestimonial.testimonial}"
                    </p>
                  </div>
                  <div className="flex items-center">
                    {currentTestimonial.image && (
                      <div className="mr-4">
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-800">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {currentTestimonial.role}
                        {currentTestimonial.company && 
                          `, ${currentTestimonial.company}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      {testimonials.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
          {showArrows && (
            <>
              <button
                onClick={handlePrevious}
                className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 ml-4 shadow pointer-events-auto focus:outline-none transition-all"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 mr-4 shadow pointer-events-auto focus:outline-none transition-all"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      )}

      {/* Dots */}
      {showDots && testimonials.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full focus:outline-none transition-all ${
                  index === safeIndex
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default TestimonialCarousel;