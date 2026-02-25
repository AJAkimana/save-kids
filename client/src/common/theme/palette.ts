import type { PaletteOptions } from '@mui/material'
import { deepOrange, teal } from '@mui/material/colors'

export const customColors = {
  mist: '#f5f1ea',
  paper: '#ffffff',
  ink: '#1f2421',
  muted: '#59635f',
  border: '#e3ddd3',
  tealGlow: 'rgba(46, 99, 98, 0.08)',
  clayGlow: 'rgba(197, 125, 86, 0.08)',
}

declare module '@mui/material/styles' {
  interface Palette {
    custom: typeof customColors
  }

  interface PaletteOptions {
    custom?: typeof customColors
  }
}

export const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: teal[900],
    light: teal[700],
    dark: teal[800],
    contrastText: customColors.mist,
  },
  secondary: {
    main: deepOrange[300],
    light: deepOrange[200],
    dark: deepOrange[500],
    contrastText: customColors.ink,
  },
  background: {
    default: customColors.mist,
    paper: customColors.paper,
  },
  text: {
    primary: customColors.ink,
    secondary: customColors.muted,
  },
  divider: customColors.border,
  custom: customColors,
}
