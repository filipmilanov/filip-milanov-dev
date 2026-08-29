import { createTheme, type Theme } from '@mui/material/styles'
import type { ThemeMode } from './types'

/**
 * Six tokens per mode. Every colour on the page derives from one of these —
 * if you want to reskin the site, change them here and nowhere else. Both
 * palettes share the same role keys (ink900 = page ground, ink800 = elevated
 * surface, ink700 = floating/border, paper = primary text, paperDim =
 * secondary text, brass = accent) so components never need to know which
 * mode is active.
 */
interface TokenSet {
  ink900: string
  ink800: string
  ink700: string
  paper: string
  paperDim: string
  brass: string
}

const darkTokens: TokenSet = {
  ink900: '#12151C', // page ground
  ink800: '#181C26', // elevated surface: cards, tab bar
  ink700: '#222736', // floating: borders, hairlines
  paper: '#E8E4DB', // primary text, warm off-white
  paperDim: '#9AA0AE', // secondary text, metadata
  brass: '#C9A227', // accent, used sparingly
}

const lightTokens: TokenSet = {
  ink900: '#F3EFE6', // page ground: warm paper
  ink800: '#FBF9F3', // elevated surface: cards, tab bar
  ink700: '#DED7C4', // floating: borders, hairlines
  paper: '#1B1D24', // primary text, near-ink
  paperDim: '#6E7280', // secondary text, metadata
  brass: '#8A6A12', // accent — darkened from the dark-mode brass so small text clears AA on a light ground
}

export const tokensByMode: Record<ThemeMode, TokenSet> = {
  dark: darkTokens,
  light: lightTokens,
}

/**
 * ink700 is correct for 1px borders sitting on ink800, but it disappears
 * against the page ground. Strokes drawn on the page background use this
 * lifted value instead.
 */
export const spineByMode: Record<ThemeMode, string> = {
  dark: '#2E3648',
  light: '#A39B82',
}

// Layered, ink-tinted shadows. Three elevations, not one flat drop. The
// light-mode set uses the same warm-brown tint at lower opacity, so depth
// still reads as "ink" rather than a generic grey drop shadow.
export const shadowsByMode: Record<ThemeMode, { base: string; elevated: string; floating: string }> = {
  dark: {
    base: `0 1px 2px rgba(8, 10, 15, 0.40)`,
    elevated: `0 1px 2px rgba(8, 10, 15, 0.40), 0 8px 24px -8px rgba(8, 10, 15, 0.60)`,
    floating: `0 2px 4px rgba(8, 10, 15, 0.45), 0 16px 40px -12px rgba(8, 10, 15, 0.70)`,
  },
  light: {
    base: `0 1px 2px rgba(28, 22, 10, 0.08)`,
    elevated: `0 1px 2px rgba(28, 22, 10, 0.07), 0 8px 24px -8px rgba(28, 22, 10, 0.16)`,
    floating: `0 2px 4px rgba(28, 22, 10, 0.09), 0 16px 40px -12px rgba(28, 22, 10, 0.22)`,
  },
}

const spring = 'cubic-bezier(0.2, 0.8, 0.2, 1)'
export const easing = spring

/**
 * Fixed ink tint used to darken project screenshots for legibility. Photo
 * treatment is about the photography, not the surrounding chrome, so it does
 * not switch with light/dark mode — a light-mode card would otherwise barely
 * tint its images at all.
 */
export const photoTint = darkTokens.ink700

const display = "'Fraunces', 'Iowan Old Style', Georgia, serif"
const body = "'Inter Tight', system-ui, -apple-system, sans-serif"
export const mono = "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace"

export function getTheme(mode: ThemeMode): Theme {
  const t = tokensByMode[mode]

  return createTheme({
    palette: {
      mode,
      background: { default: t.ink900, paper: t.ink800 },
      text: { primary: t.paper, secondary: t.paperDim },
      primary: { main: t.brass, contrastText: t.ink900 },
      divider: t.ink700,
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
            backgroundColor: t.ink900,
            transition: `background-color 200ms ${spring}`,
            // Layered radial gradients + grain, applied on a fixed pseudo-element
            // so the texture does not scroll with the content.
            '&::before': {
              content: '""',
              position: 'fixed',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 0,
              background:
                mode === 'dark'
                  ? `
                radial-gradient(900px 600px at 12% -8%, rgba(201, 162, 39, 0.07), transparent 60%),
                radial-gradient(700px 500px at 92% 4%, rgba(90, 120, 190, 0.08), transparent 62%),
                radial-gradient(1100px 800px at 50% 110%, rgba(34, 39, 54, 0.55), transparent 70%)
              `
                  : `
                radial-gradient(900px 600px at 12% -8%, rgba(138, 106, 18, 0.08), transparent 60%),
                radial-gradient(700px 500px at 92% 4%, rgba(90, 120, 190, 0.05), transparent 62%),
                radial-gradient(1100px 800px at 50% 110%, rgba(222, 215, 196, 0.65), transparent 70%)
              `,
            },
            '&::after': {
              content: '""',
              position: 'fixed',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 0,
              opacity: mode === 'dark' ? 0.035 : 0.025,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
            },
          },
          '#root': { position: 'relative', zIndex: 1 },
          ':focus-visible': {
            outline: `2px solid ${t.brass}`,
            outlineOffset: '3px',
            borderRadius: '3px',
          },
        },
      },
      MuiLink: {
        defaultProps: { underline: 'none' },
        styleOverrides: {
          root: {
            color: t.paperDim,
            transition: `color 160ms ${spring}`,
            '&:hover': { color: t.brass },
            '&:active': { color: t.paper },
          },
        },
      },
      MuiButtonBase: {
        defaultProps: { disableRipple: true },
      },
    },
  })
}
