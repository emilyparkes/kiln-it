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
    tertiary: {
      // Brown
      light: '#e3c6a4',
      main: '#b98462',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#744F44',
    },
    wet: {
      main: '#A3D9FF',
      contrastText: '#744F44',
    },
    leatherHard: {
      main: '#88A4B8',
      contrastText: '#744F44',
    },
    boneDry: {
      main: '#C09F93',
      contrastText: '#744F44',
    },
    bisqueFiring: {
      main: '#b98462',
      contrastText: '#744F44',
    },
    bisqueFired: {
      main: '#BA6D32',
      contrastText: '#744F44',
    },
    glazed: {
      main: '#6BA368',
      contrastText: '#744F44',
    },
    glazeFiring: {
      main: '#AFE07E',
      contrastText: '#744F44',
    },
    complete: {
      main: '#744F44',
      contrastText: '#e3c6a4',
    },
    shape: {
      main: '#88A4B8',
      contrastText: '#000000',
    },
    clay: {
      main: '#BA6D32',
      contrastText: '#000000',
    },
    glaze: {
      main: '#6BA368',
      contrastText: '#000000',
    },

  },
  components: {
    MuiCard: {
      styleOverrides: {
        // root: {
        //   margin: 'auto',
        //   maxWidth: '90%',
        //   backgroundColor: 'rgba(255, 255, 255, 0.6)',
        // },
      },
    },
  },
})
