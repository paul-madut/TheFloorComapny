import React from 'react';

const Card = ({ 
  image, 
  tag, 
  title, 
  description, 
  buttonText,
  buttonLink = "#",
  alt = "Featured image"
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image container with tag overlay */}
      <div className="relative">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-64 object-cover"
        />
        {tag && (
          <div className="absolute top-4 left-4 bg-white px-4 py-1 text-sm font-medium text-gray-700 rounded">
            {tag}
          </div>
        )}
      </div>
      
      {/* Content section */}
      <div className="p-6">
        <div className="uppercase text-xs tracking-wider text-gray-500 font-medium mb-2">
          BUILT FOR YOUR HOME
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        <a 
          href={buttonLink} 
          className="inline-block bg-red-600 text-white text-sm px-6 py-3 rounded font-medium"
        >
          {buttonText} &rsaquo;
        </a>
      </div>
    </div>
  );
};

export default Card;