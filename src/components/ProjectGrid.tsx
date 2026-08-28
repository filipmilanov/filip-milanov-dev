import { Box, Typography } from '@mui/material'
import { projects } from '../data/projects'
import { tokens } from '../theme'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  if (projects.length === 0) {
    return (
      <Typography variant="body2" sx={{ color: tokens.paperDim }}>
        No projects listed yet. Add one to <code>src/data/projects.ts</code> and it appears here.
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
