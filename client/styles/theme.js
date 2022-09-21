import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Alegreya Sans SC, sans-serif"
    },
    h2: {
      fontFamily: "Alegreya Sans SC, sans-serif"
    },
    h3: {
      fontFamily: "Alegreya Sans SC, sans-serif;"
    },
    h4: {
      fontFamily: "Alegreya Sans, sans-serif;"
    },
    h5: {
      fontFamily: "Alegreya Sans, sans-serif;"
    },
    h6: {
      fontFamily: "Alegreya Sans, sans-serif;"
    },
    button: {
      fontFamily: "Alegreya Sans, sans-serif;"
    },
    subtitle1: {
      fontFamily: "Alegreya Sans SC, sans-serif"
    },
    subtitle2: {
      fontFamily: "Alegreya Sans, sans-serif;"
    },
    body1: {
      fontFamily: "Alegreya Sans, sans-serif;"
    },
    body2: {
      fontFamily: "Alegreya Sans, sans-serif;"
    },
  },
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
      main: '#B66148',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#744F44',
    },
    quartarnary: {
      main: '#b98462',
      contrastText: '#e3c6a4',
    },
    white: {
      main: '#ffffff',
      contrastText: '#744F44',
    },
    wet: {
      main: '#A3D9FF',
      contrastText: '#000000',
    },
    leatherHard: {
      main: '#88A4B8',
      contrastText: '#000000',
    },
    boneDry: {
      main: '#C09F93',
      contrastText: '#000000',
    },
    bisqueFiring: {
      main: '#b98462',
      contrastText: '#000000',
    },
    bisqueFired: {
      main: '#BA6D32',
      contrastText: '#000000',
    },
    glazed: {
      main: '#6BA368',
      contrastText: '#000000',
    },
    glazeFiring: {
      main: '#AFE07E',
      contrastText: '#000000',
    },
    complete: {
      main: '#744F44',
      contrastText: '#FFFFFF',
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
