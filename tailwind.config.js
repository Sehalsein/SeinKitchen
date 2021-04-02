module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        default: {
          css: {
            a: {
              color: theme('colors.pink.600'),
              '&:hover': {
                color: theme('colors.pink.500')
              }
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.pink.600'),
              '&:hover': {
                color: theme('colors.pink.500')
              }
            },

            h1: {
              color: theme('colors.white')
            },
            h2: {
              color: theme('colors.white')
            },
            h3: {
              color: theme('colors.white')
            },
            h4: {
              color: theme('colors.white')
            },
            h5: {
              color: theme('colors.white')
            },
            h6: {
              color: theme('colors.white')
            },

            strong: {
              color: theme('colors.white')
            },

            code: {
              color: theme('colors.white')
            }
          }
        }
      })
    }
  },
  variants: {
    extend: { typography: ['dark'] }
  },
  plugins: [require('@tailwindcss/typography')]
}
