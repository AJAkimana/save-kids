import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { customColors, palette } from './palette'
import { typography } from './typography'

const baseTheme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `radial-gradient(circle at 10% 20%, ${customColors.tealGlow}, transparent 45%), radial-gradient(circle at 90% 0%, ${customColors.clayGlow}, transparent 40%)`,
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
          borderBottom: `1px solid ${customColors.border}`,
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
          border: `1px solid ${customColors.border}`,
          boxShadow: '0 12px 30px rgba(20, 27, 24, 0.08)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: customColors.border,
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
