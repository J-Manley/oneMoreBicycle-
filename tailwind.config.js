const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./dist/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        grey: colors.gray,
        trueGrey: colors.trueGray,
        warmGrey: colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        blue: colors.lightBlue,
        indigo: colors.indigo,
        yellow: colors.amber,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      },
      fontFamily: {
        notoSansJP: ["'Noto Sans JP'", "helvetica", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "hero-image-home": "url('.dist/img/hero-image-home.jpg')",
        "hero-image-about": "url('.dist/img/hero-image-about.webp')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
