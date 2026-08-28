import { Box, Container, Tab, Tabs } from '@mui/material'
import { Link as RouterLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import IdentityRail from './components/IdentityRail'
import EducationTimeline from './components/EducationTimeline'
import SkillsPanel from './components/SkillsPanel'
import ProjectGrid from './components/ProjectGrid'
import { easing, tokens } from './theme'

const sections = [
  { path: '/education', label: 'Education' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
]

export default function App() {
  const { pathname } = useLocation()
  const current = sections.find((s) => s.path === pathname)?.path ?? false

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '19rem 1fr' },
          columnGap: { md: 8 },
          rowGap: { xs: 6, md: 0 },
          alignItems: 'start',
        }}
      >
        <IdentityRail />

        <Box component="main">
          <Tabs
            value={current}
            aria-label="CV sections"
            sx={{
              minHeight: 0,
              mb: { xs: 4, md: 5 },
              borderBottom: `1px solid ${tokens.ink700}`,
              '& .MuiTabs-indicator': { height: 2, bgcolor: tokens.brass },
            }}
          >
            {sections.map((s) => (
              <Tab
                key={s.path}
                component={RouterLink}
                to={s.path}
                value={s.path}
                label={s.label}
                disableRipple
                sx={{
                  minHeight: 0,
                  px: 0,
                  mr: 4,
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  textTransform: 'none',
                  color: tokens.paperDim,
                  transition: `color 160ms ${easing}`,
                  '&:hover': { color: tokens.paper },
                  '&.Mui-selected': { color: tokens.paper },
                  '&:active': { opacity: 0.7 },
                }}
              />
            ))}
          </Tabs>

          <Routes>
            <Route path="/" element={<Navigate to="/education" replace />} />
            <Route path="/education" element={<EducationTimeline />} />
            <Route path="/skills" element={<SkillsPanel />} />
            <Route path="/projects" element={<ProjectGrid />} />
            {/* Any unknown path falls back to the first section. */}
            <Route path="*" element={<Navigate to="/education" replace />} />
          </Routes>
        </Box>
      </Box>
    </Container>
  )
}
