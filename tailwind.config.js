/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          blue: '#163A6B',
          accent: '#1F6FEB',
          gray: '#F3F4F6'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11, 31, 58, 0.08)'
      }
    }
  },
  plugins: []
};
