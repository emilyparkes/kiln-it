import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#e3c6a4',
      contrastText: '#744F44',
    },
    secondary: {
      main: '#744f44',
      contrastText: '#e3c6a4',
    },
    tertiary: {
      light: '#e3c6a4',
      main: '#B66148',
      contrastText: '#744F44',
    },
    quartarnary: {
      main: '#b98462',
      contrastText: '#e3c6a4',
    },
    background: {
      default: '#e3c6a4',
      paper: '#ffffff',
    },
    text: {
      primary: '#744F44',
      secondary: '#ffffff',
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
    glazes: {
      main: '#6BA368',
      contrastText: '#000000',
    },
    divider: '#744F44',
  },
  typography: {
    fontFamily: 'Alegreya Sans SC',
    h4: {
      fontFamily: 'Alegreya Sans',
    },
    h5: {
      fontFamily: 'Alegreya Sans',
    },
    h6: {
      fontFamily: 'Alegreya Sans ',
    },
    subtitle2: {
      fontFamily: 'Alegreya Sans',
    },
    body2: {
      fontFamily: 'Alegreya Sans',
    },
    caption: {
      fontFamily: 'Alegreya Sans',
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root:{
          width: 42,
          height: 26,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + $track': {
              opacity: 1,
              border: 'none',
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
  // props: {
  //   MuiTooltip: {
  //     arrow: true,
  //   },
  },
})

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    tertiary: PaletteOptions['primary']
    quartarnary: PaletteOptions['primary']
    white: PaletteOptions['primary']
    wet: Palette['primary']
    leatherHard: Palette['primary']
    boneDry: Palette['primary']
    bisqueFiring: Palette['primary']
    bisqueFired: Palette['primary']
    glazed: Palette['primary']
    glazeFiring: Palette['primary']
    complete: Palette['primary']
    clay: Palette['primary']
    shape: Palette['primary']
    glaze: Palette['primary']
    glazes: Palette['primary']
      
      
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary']  
    quartarnary: PaletteOptions['primary']  
    white: PaletteOptions['primary']          
    wet: PaletteOptions['primary']
    leatherHard: PaletteOptions['primary']
    boneDry: PaletteOptions['primary']
    bisqueFiring: PaletteOptions['primary']
    bisqueFired: PaletteOptions['primary']
    glazed: PaletteOptions['primary']
    glazeFiring: PaletteOptions['primary']
    complete: PaletteOptions['primary']
    clay: PaletteOptions['primary']
    shape: PaletteOptions['primary']
    glaze: PaletteOptions['primary']
    glazes: PaletteOptions['primary']    
  }
}
