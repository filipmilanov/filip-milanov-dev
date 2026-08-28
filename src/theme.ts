import { createTheme } from '@mui/material/styles'

/**
 * Six tokens. Every colour on the page derives from one of these — if you want
 * to reskin the site, change them here and nowhere else.
 */
export const tokens = {
  ink900: '#12151C', // page ground
  ink800: '#181C26', // elevated surface: cards, tab bar
  ink700: '#222736', // floating: borders, hairlines
  paper: '#E8E4DB', // primary text, warm off-white
  paperDim: '#9AA0AE', // secondary text, metadata
  brass: '#C9A227', // accent, used sparingly
} as const

/**
 * ink700 is correct for 1px borders sitting on ink800, but it disappears
 * against the darker ink900 ground. Strokes drawn on the page background use
 * this lifted value instead.
 */
export const spine = '#2E3648'

// Layered, ink-tinted shadows. Three elevations, not one flat drop.
export const shadows = {
  base: `0 1px 2px rgba(8, 10, 15, 0.40)`,
  elevated: `0 1px 2px rgba(8, 10, 15, 0.40), 0 8px 24px -8px rgba(8, 10, 15, 0.60)`,
  floating: `0 2px 4px rgba(8, 10, 15, 0.45), 0 16px 40px -12px rgba(8, 10, 15, 0.70)`,
} as const

const spring = 'cubic-bezier(0.2, 0.8, 0.2, 1)'
export const easing = spring

const display = "'Fraunces', 'Iowan Old Style', Georgia, serif"
const body = "'Inter Tight', system-ui, -apple-system, sans-serif"
export const mono = "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace"

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: tokens.ink900, paper: tokens.ink800 },
    text: { primary: tokens.paper, secondary: tokens.paperDim },
    primary: { main: tokens.brass, contrastText: tokens.ink900 },
    divider: tokens.ink700,
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily: body,
    h1: {
      fontFamily: display,
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: display,
      fontWeight: 500,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
    },
    h3: {
      fontFamily: display,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.25,
    },
    body1: { lineHeight: 1.7, letterSpacing: '0.005em' },
    body2: { lineHeight: 1.7 },
    // Utility role: dates, tags, labels.
    overline: {
      fontFamily: mono,
      fontSize: '0.6875rem',
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      lineHeight: 1.4,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            transitionDuration: '0.01ms !important',
          },
        },
        /**
         * Global type scale. Every size in this theme is expressed in rem, so
         * this one value scales the whole system proportionally. It is a
         * percentage rather than a px value so a reader who has raised their
         * browser's default font size still gets it.
         *
         * Note: do NOT also set typography.htmlFontSize — MUI would compensate
         * in pxToRem and cancel this out.
         */
        html: { fontSize: '112.5%' },
        body: {
          backgroundColor: tokens.ink900,
          // Layered radial gradients + grain, applied on a fixed pseudo-element
          // so the texture does not scroll with the content.
          '&::before': {
            content: '""',
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            background: `
              radial-gradient(900px 600px at 12% -8%, rgba(201, 162, 39, 0.07), transparent 60%),
              radial-gradient(700px 500px at 92% 4%, rgba(90, 120, 190, 0.08), transparent 62%),
              radial-gradient(1100px 800px at 50% 110%, rgba(34, 39, 54, 0.55), transparent 70%)
            `,
          },
          '&::after': {
            content: '""',
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.035,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
          },
        },
        '#root': { position: 'relative', zIndex: 1 },
        ':focus-visible': {
          outline: `2px solid ${tokens.brass}`,
          outlineOffset: '3px',
          borderRadius: '3px',
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: 'none' },
      styleOverrides: {
        root: {
          color: tokens.paperDim,
          transition: `color 160ms ${spring}`,
          '&:hover': { color: tokens.brass },
          '&:active': { color: tokens.paper },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
  },
})
