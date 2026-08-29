import { Box, Typography } from '@mui/material'
import { getProjects } from '../data/projects'
import { useTokens } from '../context/ThemeModeContext'
import { useLanguage } from '../context/LanguageContext'
import { strings } from '../i18n/strings'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  const { tokens } = useTokens()
  const { lang } = useLanguage()
  const projects = getProjects(lang)

  if (projects.length === 0) {
    return (
      <Typography variant="body2" sx={{ color: tokens.paperDim }}>
        {strings[lang].projects.empty}
      </Typography>
    )
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
        gap: 3,
      }}
    >
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </Box>
  )
}
