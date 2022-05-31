module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#06beb6",
          "secondary": "#48b1bf",
          "accent": "#cc2b5e",
          "neutral": "#292929",
          "base-100": "#ffffff",
        },
      },
      "cupcake"
    ],
  },
  plugins: [require("daisyui")],
}
