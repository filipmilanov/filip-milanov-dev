import { useState } from 'react'
import { Box, Link, Stack, Typography } from '@mui/material'
import type { Project } from '../types'
import Tag from './Tag'
import { easing, mono, shadows, spine, tokens } from '../theme'

export default function ProjectCard({ project }: { project: Project }) {
  const [active, setActive] = useState(0)
  const image = project.images[active]

  return (
    <Box
      component="article"
      className="project-card"
      sx={{
        bgcolor: tokens.ink800,
        border: `1px solid ${tokens.ink700}`,
        borderRadius: 1.5,
        overflow: 'hidden',
        boxShadow: shadows.elevated,
        transition: `transform 240ms ${easing}, box-shadow 240ms ${easing}`,
        '&:hover': { transform: 'translateY(-3px)', boxShadow: shadows.floating },
        '&:focus-within': { transform: 'translateY(-3px)', boxShadow: shadows.floating },
      }}
    >
      {image && (
        <Box sx={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
          <Box
            component="img"
            src={image.src}
            alt={image.alt}
            loading="lazy"
            sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Colour treatment, then a gradient scrim so the edge meets the card. */}
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: tokens.ink700,
              mixBlendMode: 'multiply',
              opacity: 0.22,
              transition: `opacity 240ms ${easing}`,
              '.project-card:hover &': { opacity: 0 },
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(to top, ${tokens.ink800} 0%, rgba(24, 28, 38, 0.18) 42%, transparent 100%)`,
            }}
          />

          {/* Selector sits on the image, so cards with one snapshot and cards
              with several keep the same vertical rhythm. */}
          {project.images.length > 1 && (
            <Stack
              direction="row"
              sx={{ gap: 1, position: 'absolute', left: 24, bottom: 16 }}
              aria-label="Snapshots"
            >
              {project.images.map((img, i) => (
                <Box
                  key={img.src}
                  component="button"
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show snapshot ${i + 1}`}
                  aria-current={i === active}
                  sx={{
                    width: 28,
                    height: 4,
                    p: 0,
                    border: 'none',
                    borderRadius: 2,
                    cursor: 'pointer',
                    bgcolor: i === active ? tokens.brass : 'rgba(232, 228, 219, 0.32)',
                    transition: `opacity 160ms ${easing}, transform 160ms ${easing}`,
                    '&:hover': { opacity: 0.8 },
                    '&:active': { transform: 'scaleY(0.7)' },
                  }}
                />
              ))}
            </Stack>
          )}
        </Box>
      )}

      <Box sx={{ p: 3 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'baseline', gap: 2, mb: 0.5 }}
        >
          <Typography variant="h3" sx={{ fontSize: '1.25rem' }}>
            {project.name}
          </Typography>
          {project.year && (
            <Box
              component="span"
              sx={{ fontFamily: mono, fontSize: '0.75rem', color: tokens.paperDim, flexShrink: 0 }}
            >
              {project.year}
            </Box>
          )}
        </Stack>

        <Typography sx={{ fontSize: '0.9375rem', mb: 1.5 }}>{project.tagline}</Typography>

        <Typography variant="body2" sx={{ color: tokens.paperDim }}>
          {project.description}
        </Typography>

        {project.highlights && project.highlights.length > 0 && (
          <Box component="ul" sx={{ listStyle: 'none', m: 0, mt: 1.5, p: 0 }}>
            {project.highlights.map((h) => (
              <Box
                component="li"
                key={h}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '10px 1fr',
                  alignItems: 'start',
                  columnGap: 1.5,
                  '& + &': { mt: 0.75 },
                }}
              >
                {/* Hairline marker, echoing the snapshot selector above. The top
                    offset sits it on the optical centre of the first line. */}
                <Box
                  aria-hidden
                  sx={{ height: '1px', bgcolor: tokens.brass, opacity: 0.7, mt: '0.7em' }}
                />
                <Typography variant="body2" sx={{ color: tokens.paperDim }}>
                  {h}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {(project.role || (project.audience && project.audience.length > 0)) && (
          <Box sx={{ display: 'grid', rowGap: 1, mt: 2 }}>
            {project.audience && project.audience.length > 0 && (
              <CardMeta label="For">
                {project.audience.map((a) => (
                  <Box component="span" key={a} sx={{ display: 'block' }}>
                    {a}
                  </Box>
                ))}
              </CardMeta>
            )}
            {project.role && <CardMeta label="Role">{project.role}</CardMeta>}
          </Box>
        )}

        <Stack direction="row" flexWrap="wrap" sx={{ gap: 1, mt: 2.5 }}>
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </Stack>

        {(project.githubUrl || project.liveUrl) && (
          <Stack direction="row" sx={{ gap: 3, mt: 3 }}>
            {project.githubUrl && (
              <CardLink href={project.githubUrl}>View on GitHub ↗</CardLink>
            )}
            {project.liveUrl && <CardLink href={project.liveUrl}>Open the site ↗</CardLink>}
          </Stack>
        )}
      </Box>
    </Box>
  )
}

function CardLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        fontFamily: mono,
        fontSize: '0.75rem',
        letterSpacing: '0.06em',
        color: tokens.brass,
        transition: `opacity 160ms ${easing}`,
        '&:hover': { color: tokens.brass, opacity: 0.72 },
        '&:active': { opacity: 0.5 },
      }}
    >
      {children}
    </Link>
  )
}

/** Label/value row, matching the identity rail's contact grid. */
function CardMeta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '2.75rem 1fr',
        alignItems: 'baseline',
        gap: 1,
        fontSize: '0.75rem',
      }}
    >
      <Box
        component="span"
        sx={{
          fontFamily: mono,
          fontSize: '0.625rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: spine,
        }}
      >
        {label}
      </Box>
      <Box sx={{ fontFamily: mono, color: tokens.paperDim, lineHeight: 1.6 }}>{children}</Box>
    </Box>
  )
}
