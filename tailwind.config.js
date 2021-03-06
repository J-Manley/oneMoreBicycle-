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

      keyframes: {
        fade: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-5%)" },

          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(5%)" },

          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        slideInBtm: {
          "0%": { opacity: "0", transform: "translateY(5%)" },

          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
      },

      animation: {
        fade: "fade 500ms ease-in-out",
        slideInLeft: "slideInLeft 350ms ease-in-out",
        slideInRight: "slideInRight 350ms ease-in-out",
        slideInBtm: "slideInBtm 200ms ease-in-out",
      },

      fontFamily: {
        notoSansJP: ["'Noto Sans JP'", "helvetica", "sans-serif"],
      },

      backgroundImage: (theme) => ({
        "hero-image-home":
          "url('https://d1yt94yd1gs7u3.cloudfront.net/img/hero-image-home.jpg')",
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
