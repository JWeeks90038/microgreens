import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Greens - Rich, sophisticated forest tones
        primary: {
          50: '#f4f8f5',
          100: '#e6f2e8',
          200: '#c8e4cc',
          300: '#9dd0a3',
          400: '#6bb473',
          500: '#4a9652',
          600: '#3d7a43',
          700: '#335f37',
          800: '#2b4f2f',
          900: '#1f3b22',
        },
        
        // Soft Sage - Muted, calming earth tones
        sage: {
          50: '#f8f9f8',
          100: '#f0f2f0',
          200: '#e1e6e1',
          300: '#c8d1c8',
          400: '#a8b5a8',
          500: '#8a9a8a',
          600: '#6d7d6d',
          700: '#566256',
          800: '#444c44',
          900: '#2d332d',
        },
        
        // Cream/Off-White - Warm, organic backgrounds
        cream: {
          50: '#fefefe',
          100: '#fdfcfa',
          200: '#faf8f4',
          300: '#f6f3ed',
          400: '#f0ebe2',
          500: '#e8e1d5',
          600: '#d9d0c1',
          700: '#c2b5a3',
          800: '#9d8f7d',
          900: '#7a6b58',
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'soft-md': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 3s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config