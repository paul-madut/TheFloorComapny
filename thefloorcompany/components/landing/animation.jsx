import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const LogoScroller = ({ logos }) => {
  const scrollerRef = useRef(null);
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current || !primaryRef.current || !secondaryRef.current) return;
    
    let animationFrame;
    let scrollPosition = 0;
    const speed = 0.5; // Adjust speed as needed
    
    const scroll = () => {
      scrollPosition += speed;
      
      // Reset when the first set of logos scrolls out of view
      if (scrollPosition >= primaryRef.current.offsetWidth) {
        scrollPosition = 0;
      }
      
      // Apply the transform to both containers
      primaryRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      secondaryRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      
      animationFrame = requestAnimationFrame(scroll);
    };
    
    // Start the animation
    animationFrame = requestAnimationFrame(scroll);
    
    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrame);
    };
    
    const handleMouseLeave = () => {
      animationFrame = requestAnimationFrame(scroll);
    };
    
    scrollerRef.current.addEventListener('mouseenter', handleMouseEnter);
    scrollerRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrame);
      if (scrollerRef.current) {
        scrollerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        scrollerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full py-4 bg-transparent text-white">
      <div 
        ref={scrollerRef}
        className="w-full overflow-hidden"
      >
        <div className="flex whitespace-nowrap">
          {/* Primary set of logos */}
          <div ref={primaryRef} className="flex items-center">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="mx-8 flex items-center">
                <Image src={logo.src} className="mx-8" alt={logo.alt} width={100} height={100} />
              </div>
            ))}
          </div>
          
          {/* Duplicate set of logos to create the infinite effect */}
          <div ref={secondaryRef} className="flex items-center">
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="mx-8 flex items-center">
                <Image src={logo.src} alt={logo.alt} width={100} height={100} />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScroller;