import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows ALL https domains
      },
      
      {
        protocol: 'http',
        hostname: '**',
      }
    ]
  }
};

export default nextConfig;
