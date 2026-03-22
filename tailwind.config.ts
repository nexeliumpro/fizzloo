import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          '50':  '#f0f7ff',
          '100': '#e0f0ff',
          '200': '#b9ddff',
          '300': '#7cc2ff',
          '400': '#36a3f7',
          '500': '#0d87e9',
          '600': '#0069c7',
          '700': '#0054a1',
          '800': '#024785',
          '900': '#063c6e',
        },
        pastel: '#d6eaff',
        sky:    '#e8f4fd',
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card:       '0 4px 24px rgba(13,135,233,0.08)',
        'card-hover':'0 12px 40px rgba(13,135,233,0.18)',
        btn:        '0 4px 16px rgba(13,135,233,0.35)',
        'btn-hover':'0 8px 28px rgba(13,135,233,0.5)',
      }
    }
  },
  plugins: [],
}
export default config
