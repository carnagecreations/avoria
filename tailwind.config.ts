import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF9F5',
          deep: '#F1EFE8',
        },
        ink: {
          DEFAULT: '#161510',
          soft: '#6F695D',
          faint: '#A29B8C',
        },
        viper: '#2F3B24',
        venom: '#C0A869',
        clay: '#96552F',
        line: '#E6E2D8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
