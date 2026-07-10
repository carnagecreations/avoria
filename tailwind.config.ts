import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0e27',
          900: '#0f1629',
          800: '#1a202c',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        magenta: {
          500: '#ec4899',
          600: '#db2777',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #1a202c 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
        'gradient-magenta': 'linear-gradient(135deg, #db2777 0%, #ec4899 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(34, 211, 238, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
