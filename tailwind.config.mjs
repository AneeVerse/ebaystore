import { Rock_Salt } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'display-2xl': ['3.75rem', { lineHeight: '1.1' }], // Desktop size
        'display-xl': ['3rem', { lineHeight: '1.15' }],
        'display-lg': ['2.25rem', { lineHeight: '1.25' }],
        // Mobile-first sizes
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.5rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'xs': ['0.75rem', { lineHeight: '1rem' }]
      },
      fontFamily: {
       Rock_Salt: ['Rock Salt', 'cursive'],
        'sans': ['Inter', 'sans-serif'], // Primary font
        'accent': ['Rock Salt', 'cursive'] // Accent font
      },
      spacing: {
        'type-lg': '1rem md:2rem', // Responsive spacing
        'type-md': '0.75rem md:1.5rem',
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px'
      },
      maxWidth: {
        container: '1536px',
        card: '300px'
      },
      colors: {
        primary:{
          100: "#E0F7FA",
          500: "#EBFAFE",
          900: "#073742",
        },
        secondary: {
          100: "#073742",
          500: "#073742",
          900: "#FF6F00",
        },

      
        orange: {
          100: "#ffe3d3",
          900: "#ff6f00",
        },
      },
    },
  },
  plugins: [],
};
