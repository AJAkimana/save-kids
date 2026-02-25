import type { Palette, TypographyVariantsOptions } from '@mui/material'

type TypographyOptions =
  | TypographyVariantsOptions
  | ((palette: Palette) => TypographyVariantsOptions)

export const typography: TypographyOptions = {
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
}
