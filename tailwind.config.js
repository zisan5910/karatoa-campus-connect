
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        finance: {
          purple: '#9b87f5',
          'deep-purple': '#7E69AB',
          'light-purple': '#E5DEFF',
          'bright-blue': '#33C3F0',
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
        },
        section: {
          profile: 'hsl(220 91% 60%)',
          education: 'hsl(142 76% 40%)',
          courses: 'hsl(262 83% 58%)',
          experience: 'hsl(25 95% 53%)',
          certificates: 'hsl(188 94% 42%)',
          skills: 'hsl(340 82% 52%)',
          family: 'hsl(0 84% 60%)',
          contact: 'hsl(220 91% 60%)',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    }
  },
  plugins: [],
};
