import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0a0e27',
          950: '#020617',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f1f5f9',
            a: {
              color: '#84cc16',
              '&:hover': {
                color: '#a3e635',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: '#f1f5f9',
            },
            code: {
              color: '#84cc16',
            },
            pre: {
              backgroundColor: '#1e293b',
            },
          },
        },
      },
    },
  },
  plugins: [forms],
}
export default config
