
"use client";
import { useEffect, useRef } from 'react';
import Banner from '../universal/Banner';

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Make sure video autoplays on load
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
        // Handle autoplay policy restrictions if needed
      });
    }
  }, []);

  return (
    <>
    <div className="relative h-screen w-full overflow-hidden">
    
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="absolute top-0 left-0 min-h-full min-w-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/videos/hero/stock.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div>
      
      {/* Hero Content */}
    <div className="hero__container w-full flex items-start mt-24 justify-center">
    <div className="absolute top-0 w-screen"><Banner/></div>

      <div className="relative p-8 rounded-lg bg-[#000]/60 z-10 flex h-2/3 w-fit md:w-1/2 flex-col items-center justify-center px-4 text-center text-white ">
        
        <h1 className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl">
        Garage floor specialists in Ottawa and surrounding areas!
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl">
        Contact us today to give your garage or place of business an incredible concrete floor.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button className="rounded-md bg-primary px-8 py-3 font-medium text-white transition duration-300 hover:bg-primary/90">
            Contact Us
          </button>
          <button className="rounded-md bg-[#e10019] px-8 py-3 font-medium text-white transition duration-300 hover:bg-[#e10019]/10">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
    </div>
        </>
  );
}

export default Hero;