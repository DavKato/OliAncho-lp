const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      noto: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
      gothic: [
        '"游ゴシック体"',
        'YuGothic',
        '"Yu Gothic"',
        ...defaultTheme.fontFamily.sans,
      ],
      times: ['"Times New Roman"', 'Times', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        cream: '#F5F4EE',
        wine: '#842612',
        ocher: '#D4CA6E',
      },
    },
  },
  variants: {},
  plugins: [],
}
