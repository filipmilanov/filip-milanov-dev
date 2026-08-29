import { useId, useState } from 'react'
import { alpha, Box, IconButton, Popover, Stack, Typography } from '@mui/material'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { useThemeMode, useTokens } from '../context/ThemeModeContext'
import { useLanguage } from '../context/LanguageContext'
import { strings } from '../i18n/strings'
import { easing, mono } from '../theme'
import type { Lang, ThemeMode } from '../types'

const LANGS: Lang[] = ['en', 'de', 'bg']
const LANG_LABEL: Record<Lang, string> = { en: 'EN', de: 'DE', bg: 'BG' }

/**
 * Gear icon fixed in the top-right corner — reachable from any section and
 * any scroll position — opening a popover with the theme and language
 * switches. Styled after the site's own cards (ink surface, brass accent,
 * mono labels) rather than MUI's stock menu look.
 */
export default function SettingsMenu() {
  const { mode, setMode } = useThemeMode()
  const { lang, setLang } = useLanguage()
  const { tokens, shadows } = useTokens()
  const t = strings[lang]
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const popoverId = useId()
  const open = Boolean(anchorEl)

  return (
    <>
      <IconButton
        aria-label={t.settings.button}
        aria-describedby={open ? popoverId : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        disableRipple
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          zIndex: 20,
          width: 40,
          height: 40,
          bgcolor: tokens.ink800,
          border: `1px solid ${tokens.ink700}`,
          boxShadow: shadows.base,
          color: tokens.paperDim,
          transition: `color 160ms ${easing}, border-color 160ms ${easing}, transform 160ms ${easing}`,
          '&:hover': { color: tokens.brass, borderColor: tokens.brass, bgcolor: tokens.ink800 },
          '&:active': { transform: 'scale(0.94)' },
        }}
      >
        <SettingsOutlinedIcon sx={{ fontSize: '1.25rem' }} />
      </IconButton>

      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        marginThreshold={16}
        slotProps={{
          paper: {
            sx: {
              mt: 1.25,
              minWidth: 220,
              bgcolor: tokens.ink800,
              border: `1px solid ${tokens.ink700}`,
              borderRadius: 1.5,
              boxShadow: shadows.floating,
              p: 2.25,
            },
          },
        }}
      >
        <SettingGroup label={t.settings.theme} tokens={tokens}>
          <SegmentedToggle
            options={[
              { value: 'light' as ThemeMode, label: t.settings.light },
              { value: 'dark' as ThemeMode, label: t.settings.dark },
            ]}
            value={mode}
            onChange={setMode}
            tokens={tokens}
          />
        </SettingGroup>

        <Box sx={{ height: '1px', bgcolor: tokens.ink700, my: 2 }} />

        <SettingGroup label={t.settings.language} tokens={tokens}>
          <SegmentedToggle
            options={LANGS.map((l) => ({ value: l, label: LANG_LABEL[l], title: t.settings.langNames[l] }))}
            value={lang}
            onChange={setLang}
            tokens={tokens}
          />
        </SettingGroup>
      </Popover>
    </>
  )
}

function SettingGroup({
  label,
  tokens,
  children,
}: {
  label: string
  tokens: ReturnType<typeof useTokens>['tokens']
  children: React.ReactNode
}) {
  return (
    <Box>
      <Typography
        component="div"
        sx={{
          fontFamily: mono,
          fontSize: '0.6875rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: tokens.paperDim,
          mb: 1,
        }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  )
}

function SegmentedToggle<T extends string>({
  options,
  value,
  onChange,
  tokens,
}: {
  options: { value: T; label: string; title?: string }[]
  value: T
  onChange: (v: T) => void
  tokens: ReturnType<typeof useTokens>['tokens']
}) {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ gap: 0.75 }}>
      {options.map((opt) => {
        const selected = opt.value === value
        return (
          <Box
            key={opt.value}
            component="button"
            type="button"
            title={opt.title}
            aria-pressed={selected}
            onClick={() => onChange(opt.value)}
            sx={{
              fontFamily: mono,
              fontSize: '0.75rem',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              px: 1.25,
              py: 0.625,
              borderRadius: 0.75,
              border: `1px solid ${selected ? alpha(tokens.brass, 0.45) : tokens.ink700}`,
              bgcolor: selected ? alpha(tokens.brass, 0.1) : 'transparent',
              color: selected ? tokens.paper : tokens.paperDim,
              transition: `color 160ms ${easing}, border-color 160ms ${easing}, background-color 160ms ${easing}`,
              '&:hover': { color: tokens.paper, borderColor: tokens.brass },
              '&:active': { opacity: 0.7 },
            }}
          >
            {opt.label}
          </Box>
        )
      })}
    </Stack>
  )
}
