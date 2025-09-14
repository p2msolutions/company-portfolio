/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        // xAI-inspired dark mode colors
        'dark-bg': '#000000',        // Pure black like xAI
        'dark-surface': '#111111',   // Slightly lighter for cards
        'dark-border': '#333333',    // Subtle borders
        'dark-text': '#ffffff',      // Pure white text
        'dark-text-secondary': '#888888', // Gray text
        
        // Enhanced light mode colors
        'light-bg': '#ffffff',       // Pure white
        'light-surface': '#f8f9fa',  // Slightly warmer light gray
        'light-border': '#dee2e6',   // Better contrast borders
        'light-text': '#212529',     // Softer black for better readability
        'light-text-secondary': '#6c757d', // Improved gray text
        
        // Monochrome accent colors for both modes
        'accent-primary': '#000000',   // Pure black
        'accent-primary-light': '#ffffff', // Pure white
        'accent-secondary': '#6c757d', // Neutral gray
        'accent-hover': '#333333',     // Dark gray for hover
        'accent-hover-light': '#666666', // Gray for light mode hover
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'spotlight': "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
