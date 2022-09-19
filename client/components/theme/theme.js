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
    // wet: {
    //   main: '#A3D9FF',
    // },
    // leatherHard: {
    //   main: '#88A4B8',
    // },
    // boneDry: {
    //   main: '#C09F93',
    // },
    // bisqueFiring: {
    //   main: '#b98462',
    // },
    // bisqueFired: {
    //   main: '#BA6D32',
    // },
    // glazed: {
    //   main: '#6BA368',
    // },
    // glazeFiring: {
    //   main: '#AFE07E',
    // },
    // complete: {
    //   main: '#744F44',
    // },
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
