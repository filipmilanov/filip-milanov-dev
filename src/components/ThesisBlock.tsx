import { useState } from 'react'
import { Box, Button, Collapse, Link, Stack, Typography } from '@mui/material'
import type { Thesis } from '../types'
import { easing, mono } from '../theme'
import { useTokens } from '../context/ThemeModeContext'
import { useLanguage } from '../context/LanguageContext'
import { strings } from '../i18n/strings'

/**
 * The attached-document slot. Renders only when a degree has a thesis, so the
 * structure is ready before the content is.
 */
export default function ThesisBlock({ thesis }: { thesis: Thesis }) {
  const [open, setOpen] = useState(false)
  const { tokens, shadows } = useTokens()
  const { lang } = useLanguage()
  const t = strings[lang].thesis

  return (
    <Box sx={{ mt: 2.5 }}>
      <Button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        disableRipple
        sx={{
          p: 0,
          minWidth: 0,
          fontFamily: mono,
          fontSize: '0.6875rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: tokens.brass,
          transition: `opacity 160ms ${easing}`,
          '&:hover': { bgcolor: 'transparent', opacity: 0.75 },
          '&:active': { opacity: 0.55 },
        }}
      >
        <Box
          component="span"
          aria-hidden
          sx={{
            display: 'inline-block',
            mr: 1,
            transition: `transform 220ms ${easing}`,
            transform: open ? 'rotate(90deg)' : 'none',
          }}
        >
          ▸
        </Box>
        {t.toggle}
      </Button>

      <Collapse in={open} timeout={260}>
        <Box
          sx={{
            mt: 1.5,
            p: 2.5,
            bgcolor: tokens.ink800,
            border: `1px solid ${tokens.ink700}`,
            borderLeft: `2px solid ${tokens.brass}`,
            borderRadius: 1,
            boxShadow: shadows.elevated,
          }}
        >
          <Typography variant="h3" sx={{ fontSize: '1.125rem', mb: 1.25 }}>
            {thesis.title}
          </Typography>
          <Typography variant="body2" sx={{ color: tokens.paperDim, mb: 2 }}>
            {thesis.abstract}
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            sx={{ gap: 2, fontFamily: mono, fontSize: '0.75rem', color: tokens.paperDim }}
          >
            {thesis.supervisor && <span>{thesis.supervisor}</span>}
            {thesis.grade && <span>{thesis.grade}</span>}
            {thesis.pdfUrl && (
              <Link
                href={thesis.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontFamily: mono, color: tokens.brass, '&:hover': { opacity: 0.75 } }}
              >
                {t.readPdf}
              </Link>
            )}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  )
}
