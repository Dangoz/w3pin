module.exports = {
  mode: 'jit',
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d1117',
        foreground: '#161b22',
        bgBlue: '#111827',
        bgGrey: '#374151',
        primary: '#2563eb',
        secondary: 'rgba(192, 132, 252, 0.5)',
        gradientOne: '#BBF7D0',
        gradientTwo: '#7DD3FC',
        gradientThree: '#C084FC',
      },
      boxShadow: "0 0 10px #29d, 0 0 5px #29d"
    },
  },
}