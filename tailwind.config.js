module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      // backgroundImage: {
      //   "hero-bg": "url('/images/hero-bg.jpg)",
      // },
      backgroundImage: {
        "hero-pattern": "url('./images/hero-bg.jpg')",
        "leader-pattern": "url('./images/leader-bg.jpg')",
      },
    },
    plugins: [],
  },
};
