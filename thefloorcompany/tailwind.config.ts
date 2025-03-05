import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll var(--animation-duration, 40s) linear infinite',
      },
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      
      // Custom colors
      colors: {
        primary: {
          DEFAULT: '#000000',
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          // Add more color variations as needed
        },
        secondary: {
          DEFAULT: '#ffffff',
          // Add variations if needed
        },
      },
      
      // Custom spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      
      // Custom border radius
      borderRadius: {
        'custom': '0.625rem', // 10px
      },
      
      // Custom box shadow
      boxShadow: {
        'custom-light': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      
      // Custom transitions
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      
      // Custom background patterns or gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      // Screen sizes
      screens: {
        'xs': '475px',  // Extra small screens
        '3xl': '1920px', // Extra large screens
      }
    }
  },
  plugins: [
    // Uncomment or add plugins as needed
    require("tailwindcss-animate"),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
} satisfies Config;