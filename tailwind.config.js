/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Doran', 'sans-serif'],
			display: ['Playfair Display', 'serif'],
  			mono: ['JetBrains Mono', 'monospace']
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
        paper: '#F4F1EA',
        ink: '#2E2E2E',
        sketch: {
          red: '#FF6B6B',
          blue: '#4D96FF',
          green: '#6BCB77',
          yellow: '#FFD93D',
          purple: '#9B59B6',
          orange: '#FF9F43'
        },
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			}
  		},
  		boxShadow: {
  			sketch: '4px 4px 0px 0px #2E2E2E',
        'sketch-hover': '2px 2px 0px 0px #2E2E2E',
        'sketch-lg': '8px 8px 0px 0px #2E2E2E',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}