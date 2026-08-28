import { Box } from '@mui/material'
import { mono, tokens } from '../theme'

/**
 * The shared utility chip: coursework, tech, skills. `primary` lifts an item
 * out of the list without resorting to a proficiency bar or a percentage.
 */
export default function Tag({
  children,
  primary,
}: {
  children: React.ReactNode
  primary?: boolean
}) {
  return (
    <Box
      component="span"
      sx={{
        fontFamily: mono,
        fontSize: '0.6875rem',
        letterSpacing: '0.04em',
        color: primary ? tokens.paper : tokens.paperDim,
        border: `1px solid ${primary ? 'rgba(201, 162, 39, 0.45)' : tokens.ink700}`,
        bgcolor: primary ? 'rgba(201, 162, 39, 0.07)' : 'transparent',
        borderRadius: 0.75,
        px: 1,
        py: 0.375,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </Box>
  )
}
