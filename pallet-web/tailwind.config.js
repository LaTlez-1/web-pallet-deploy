// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust this path based on your project structure
  theme: {
    extend: {
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'], // Add "Prompt" font here
      },
    },
  },
  plugins: [],
};
