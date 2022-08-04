import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      // Sand
      light: '#e3c6a4',
      main: '#e3c6a4',
      contrastText: '#744F44',
    },
    secondary: {
      // Brown
      light: '#e3c6a4',
      main: '#744F44',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#e3c6a4',
    },
    shape: {
      // blue
      light: '#88A4B8',
      main: '#88A4B8',
      dark: '#88A4B8',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    clay: {
      // clay
      light: '#BA6D32',
      main: '#BA6D32',
      dark: '#BA6D32',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    glazes: {
      // green
      light: '#6BA368',
      main: '#6BA368',
      dark: '#6BA368',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
  components: {
    // Name of the component
  },
})
