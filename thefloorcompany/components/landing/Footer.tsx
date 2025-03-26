"use client"
import React, { useState } from 'react';
import Link from 'next/link';

// Define types for expanded sections state
interface ExpandedSections {
  floorCompany: boolean;
  connect: boolean;
  products: boolean;
  support: boolean;
}

// Define props for the Arrow component
interface ArrowProps {
  expanded: boolean;
}

// Define types for the list items
type LinkItem = {
  name: string;
  path: string;
};

const Footer: React.FC = () => {
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    floorCompany: false,
    connect: false,
    products: false,
    support: false
  });

  // Toggle function for expanding/collapsing sections
  const toggleSection = (section: keyof ExpandedSections): void => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Arrow icon component
  const Arrow: React.FC<ArrowProps> = ({ expanded }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={`h-5 w-5 transition-transform ${expanded ? 'transform rotate-90' : ''}`}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  // Define city list
  const cities: string[] = [
    'Arnprior', 'Barrhaven', 'Carleton Place', 'Casselman', 'Cumberland', 
    'Gloucester', 'Kanata', 'Manotick', 'Metcalfe', 'Nepean', 'Orleans', 
    'Osgoode', 'Ottawa', 'Stittsville', 'Vanier', 'Other Cities'
  ];

  // Define link lists
  const connectLinks: LinkItem[] = [
    'FREE quote', 'Schedule a service call', 'Contact us', 'Our blog', 
    'About our company', 'Our community', 'Careers'
  ].map(item => ({
    name: item,
    path: `/${item.toLowerCase().replace(/\s+/g, '-')}`
  }));

  const productLinks: LinkItem[] = [
    'Residential garage doors', 'Contemporary garage doors', 'Carriage house garage doors',
    'Traditional garage doors', 'Townships Collection garage doors', 'Village Collection garage doors',
    'Commercial garage doors', 'Residential garage door openers', 'Commercial garage door openers',
    'Other products', 'Garage door parts', 'Residential image gallery', 'Commercial image gallery',
    'Why we recommend Garaga', 'Why choose Garaga', 'New Products'
  ].map(item => ({
    name: item,
    path: `/products/${item.toLowerCase().replace(/\s+/g, '-')}`
  }));

  const supportLinks: LinkItem[] = [
    'Schedule a service call', 'Architects & builders', 'Installation guide',
    'FAQ', 'Terminology', 'Videos'
  ].map(item => ({
    name: item,
    path: `/support/${item.toLowerCase().replace(/\s+/g, '-')}`
  }));

  return (
    <footer className="bg-black/70 text-white py-8">
      {/* Services Near You Section */}
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 uppercase">Flooring Services Near You</h2>
          <div className="text-sm text-gray-300 flex flex-wrap gap-2">
            <span className="font-medium">Near me:</span>
            {cities.map((city, index) => (
              <React.Fragment key={city}>
                <Link href={`/locations/${city.toLowerCase().replace(' ', '-')}`} className="hover:text-white hover:underline">
                  {city}
                </Link>
                {index < cities.length - 1 && <span className="hidden md:inline">,</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-8">
          {/* Column 1 - The Floor Company */}
          <div className="border-b border-gray-700 pb-2 lg:border-b-0 lg:pb-0">
            <div 
              className="flex justify-between items-center cursor-pointer py-3 lg:cursor-default"
              onClick={() => toggleSection('floorCompany')}
            >
              <h3 className="text-lg font-semibold uppercase">The Floor Company</h3>
              <div className="lg:hidden">
                <Arrow expanded={expandedSections.floorCompany} />
              </div>
            </div>
            
            <div className={`space-y-2 text-gray-300 overflow-hidden transition-all duration-300 ${expandedSections.floorCompany ? 'max-h-96' : 'max-h-0 lg:max-h-96'}`}>
              <p>24 hour emergency service</p>
              <p>1-855-461-5775</p>
              <div className="mt-4">
                <p>1117 Newmarket Street Unit B, Ottawa, ON K1B 4N4</p>
                <p>613-866-7990</p>
              </div>
              <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center">
                GET DIRECTIONS
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 uppercase">Business Hours</h3>
                <div className="space-y-1">
                  <p>Monday to Friday 7 AM to 4 PM</p>
                  <p>Pick up hours: 8 AM to 3:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Connect With Us */}
          <div className="border-b border-gray-700 pb-2 lg:border-b-0 lg:pb-0">
            <div 
              className="flex justify-between items-center cursor-pointer py-3 lg:cursor-default"
              onClick={() => toggleSection('connect')}
            >
              <h3 className="text-lg font-semibold uppercase">Connect With Us</h3>
              <div className="lg:hidden">
                <Arrow expanded={expandedSections.connect} />
              </div>
            </div>
            
            <ul className={`space-y-2 text-gray-300 overflow-hidden transition-all duration-300 ${expandedSections.connect ? 'max-h-96' : 'max-h-0 lg:max-h-96'}`}>
              {connectLinks.map((item) => (
                <li key={item.name} className="py-1">
                  <Link href={item.path} className="hover:text-white hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Products */}
          <div className="border-b border-gray-700 pb-2 lg:border-b-0 lg:pb-0">
            <div 
              className="flex justify-between items-center cursor-pointer py-3 lg:cursor-default"
              onClick={() => toggleSection('products')}
            >
              <h3 className="text-lg font-semibold uppercase">Products</h3>
              <div className="lg:hidden">
                <Arrow expanded={expandedSections.products} />
              </div>
            </div>
            
            <ul className={`space-y-2 text-gray-300 overflow-hidden transition-all duration-300 ${expandedSections.products ? 'max-h-96' : 'max-h-0 lg:max-h-96'}`}>
              {productLinks.map((item) => (
                <li key={item.name} className="py-1">
                  <Link href={item.path} className="hover:text-white hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Service & Support */}
          <div>
            <div 
              className="flex justify-between items-center cursor-pointer py-3 lg:cursor-default"
              onClick={() => toggleSection('support')}
            >
              <h3 className="text-lg font-semibold uppercase">Service & Support</h3>
              <div className="lg:hidden">
                <Arrow expanded={expandedSections.support} />
              </div>
            </div>
            
            <ul className={`space-y-2 text-gray-300 overflow-hidden transition-all duration-300 ${expandedSections.support ? 'max-h-96' : 'max-h-0 lg:max-h-96'}`}>
              {supportLinks.map((item) => (
                <li key={item.name} className="py-1">
                  <Link href={item.path} className="hover:text-white hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>Copyright The Floor Company Inc. | <a href="/privacy-policy" className="hover:text-white hover:underline">Privacy Policy and Conditions of Use</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;