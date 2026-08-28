import { Box, Stack, Typography } from '@mui/material'
import { skills } from '../data/skills'
import type { SkillGroup, SkillItem } from '../types'
import { mono, tokens } from '../theme'
import Tag from './Tag'

const nameOf = (item: SkillItem) => (typeof item === 'string' ? item : item.name)
const isPrimary = (item: SkillItem) => typeof item !== 'string' && Boolean(item.primary)

/**
 * Skills borrow the education gutter so the tabs read as one document, but
 * deliberately not its spine: a spine implies sequence, and a skill list has
 * no order to encode. Emphasis is carried by the tag itself rather than by a
 * proficiency bar, which would invent precision that isn't there.
 */
export default function SkillsPanel() {
  if (skills.length === 0) {
    return (
      <Typography variant="body2" sx={{ color: tokens.paperDim }}>
        No skills listed yet. Add a group to <code>src/data/skills.ts</code> and it appears here.
      </Typography>
    )
  }

  return (
    <Stack component="dl" sx={{ m: 0 }} spacing={0}>
      {skills.map((group, i) => (
        <Group key={group.label} group={group} last={i === skills.length - 1} />
      ))}
    </Stack>
  )
}

function Group({ group, last }: { group: SkillGroup; last: boolean }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '7.5rem 1fr' },
        columnGap: { sm: 3 },
        pb: last ? 0 : { xs: 4, sm: 4.5 },
      }}
    >
      <Box
        component="dt"
        sx={{
          fontFamily: mono,
          fontSize: '0.6875rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: tokens.paperDim,
          pt: { sm: 0.75 },
          mb: { xs: 1.25, sm: 0 },
          textAlign: { sm: 'right' },
        }}
      >
        {group.label}
      </Box>

      <Box component="dd" sx={{ m: 0, minWidth: 0 }}>
        <Stack direction="row" flexWrap="wrap" sx={{ gap: 1 }}>
          {group.items.map((item) => (
            <Tag key={nameOf(item)} primary={isPrimary(item)}>
              {nameOf(item)}
            </Tag>
          ))}
        </Stack>
        {group.note && (
          <Typography variant="body2" sx={{ color: tokens.paperDim, mt: 1.5, maxWidth: '58ch' }}>
            {group.note}
          </Typography>
        )}
      </Box>
    </Box>
  )
}
