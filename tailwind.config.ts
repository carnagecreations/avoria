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
          DEFAULT: '#F7F4ED',
          deep: '#EFEAE0',
        },
        ink: {
          DEFAULT: '#1B1813',
          soft: '#57534A',
          faint: '#8A857A',
        },
        viper: '#3F6212',
        venom: '#D4F70F',
        clay: '#B4531F',
        line: '#DDD6C8',
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
