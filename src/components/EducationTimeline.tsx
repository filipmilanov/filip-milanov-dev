import { Box, Stack, Typography } from '@mui/material'
import { educationByLang } from '../data/education'
import type { EducationEntry } from '../types'
import { mono } from '../theme'
import { useTokens } from '../context/ThemeModeContext'
import { useLanguage } from '../context/LanguageContext'
import Tag from './Tag'
import ThesisBlock from './ThesisBlock'

/**
 * The signature element: a typographic spine. Mono date ranges sit in a fixed
 * gutter, a hairline rule runs the height of the list, entries hang off it.
 * A timeline earns its place here because a CV genuinely is chronological.
 */
export default function EducationTimeline() {
  const { lang } = useLanguage()
  const education = educationByLang[lang]

  return (
    <Stack component="ol" sx={{ listStyle: 'none', m: 0, p: 0 }} spacing={0}>
      {education.map((entry, i) => (
        <Entry key={`${entry.degree}-${entry.start}`} entry={entry} last={i === education.length - 1} />
      ))}
    </Stack>
  )
}

function Entry({ entry, last }: { entry: EducationEntry; last: boolean }) {
  const { tokens, spine } = useTokens()

  return (
    <Box
      component="li"
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '5.5rem 1px 1fr' },
        columnGap: { sm: 3 },
      }}
    >
      {/* Gutter: the date range, set in mono so the column aligns exactly. */}
      <Box
        sx={{
          fontFamily: mono,
          fontSize: '0.75rem',
          letterSpacing: '0.06em',
          color: tokens.paperDim,
          pt: { sm: 0.75 },
          mb: { xs: 1, sm: 0 },
          pb: last ? 0 : { xs: 0, sm: 6 },
          textAlign: { sm: 'right' },
          whiteSpace: 'nowrap',
        }}
      >
        {entry.start}
        <Box component="span" sx={{ opacity: 0.45, mx: 0.5 }}>
          —
        </Box>
        {entry.end}
      </Box>

      {/* The spine. Hidden on mobile, where dates stack above instead. */}
      <Box
        aria-hidden
        sx={{
          display: { xs: 'none', sm: 'block' },
          position: 'relative',
          bgcolor: spine,
          // A brass node marks each entry's start against the hairline.
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 8,
            left: -2.5,
            width: 6,
            height: 6,
            borderRadius: '50%',
            bgcolor: tokens.brass,
          },
        }}
      />

      <Box sx={{ minWidth: 0, pb: last ? 0 : { xs: 5, sm: 6 } }}>
        <Typography variant="h3" sx={{ fontSize: { xs: '1.25rem', md: '1.4rem' }, mb: 0.5 }}>
          {entry.degree}
        </Typography>

        <Typography sx={{ fontSize: '0.9375rem', mb: 1.5 }}>
          {entry.institution}
          {entry.location && (
            <Box component="span" sx={{ color: tokens.paperDim }}> · {entry.location}</Box>
          )}
        </Typography>

        {entry.summary && (
          <Typography variant="body2" sx={{ color: tokens.paperDim, maxWidth: '62ch' }}>
            {entry.summary}
          </Typography>
        )}

        {entry.highlights && entry.highlights.length > 0 && (
          <Stack direction="row" flexWrap="wrap" sx={{ gap: 1, mt: 2 }}>
            {entry.highlights.map((h) => (
              <Tag key={h}>{h}</Tag>
            ))}
          </Stack>
        )}

        {entry.thesis && <ThesisBlock thesis={entry.thesis} />}
      </Box>
    </Box>
  )
}
