import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e4a4a',
      light: '#2e6362',
      dark: '#123233',
      contrastText: '#f8f5ef',
    },
    secondary: {
      main: '#c57d56',
      light: '#d79a7b',
      dark: '#9f5e3d',
      contrastText: '#1f2421',
    },
    background: {
      default: '#f5f1ea',
      paper: '#ffffff',
    },
    text: {
      primary: '#1f2421',
      secondary: '#59635f',
    },
    divider: '#e3ddd3',
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    h1: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600,
      fontSize: '3.1rem',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600,
      fontSize: '2.4rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600,
      fontSize: '1.9rem',
      lineHeight: 1.25,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    overline: {
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(46, 99, 98, 0.08), transparent 45%), radial-gradient(circle at 90% 0%, rgba(197, 125, 86, 0.08), transparent 40%)',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e3ddd3',
          backdropFilter: 'blur(8px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 22,
          paddingRight: 22,
          paddingTop: 10,
          paddingBottom: 10,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: '1px solid #efe8dd',
          boxShadow: '0 12px 30px rgba(20, 27, 24, 0.08)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#e3ddd3',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
})

const theme = responsiveFontSizes(baseTheme)

export default theme
