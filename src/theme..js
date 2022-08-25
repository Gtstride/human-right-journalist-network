import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#fbec8f',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
},

)

// const zIndices = {
//   zIndices: {
//     hide: -1,
//     auto: 'auto',
//     base: 0,
//     docked: 10,
//     dropdown: 1000,
//     sticky: 1100,
//     banner: 1200,
//     overlay: 1300,
//     modal: 1400,
//     popover: 1500,
//     skipLink: 1600,
//     toast: 1700,
//     tooltip: 1800,
//   },
// }
// const theme = extendTheme({ zIndices, ...})

export default theme