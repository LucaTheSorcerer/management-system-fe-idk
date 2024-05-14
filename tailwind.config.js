/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
      extend: {
          colors: {
              customColor: '#ff0000',
              turquoise: {
                  '50': '#eef8f8',
                  '100': '#d4f0f0',
                  '200': '#aeeeee',
                  '300': '#7ee4e4',
                  '400': '#3ed6d6',
                  '500': '#00cccc',
                  '600': '#00b3b3',
                  '700': '#009999',
                  '800': '#007f7f',
                  '900': '#005c5c',
              },
          },
      },
  },
  plugins: [],
}
