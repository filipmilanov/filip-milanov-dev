import { useState } from 'react'
import { Box, Link, Stack, Typography } from '@mui/material'
import type { Project } from '../types'
import Tag from './Tag'
import { easing, mono } from '../theme'
import { useTokens } from '../context/ThemeModeContext'
import { useLanguage } from '../context/LanguageContext'
import { strings } from '../i18n/strings'

export default function ProjectCard({ project }: { project: Project }) {
  const [active, setActive] = useState(0)
  const image = project.images[active]
  const { tokens, spine, shadows } = useTokens()
  const { lang } = useLanguage()
  const t = strings[lang].projects

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
        <Box sx={{ overflow: 'hidden' }}>
          {/* Sized by the image's own aspect ratio — cover-cropping was slicing
              off the edges of these wider-than-16:10 screenshots. */}
          <Box
            component="img"
            src={image.src}
            alt={image.alt}
            loading="lazy"
            sx={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Box>
      )}

      {/* Selector sits below the image on the card's own surface, so it
          reads with consistent contrast no matter what the screenshot looks
          like. Each button is a full 44px touch target for phones, with a
          smaller bar drawn inside it. */}
      {project.images.length > 1 && (
        <Stack
          direction="row"
          sx={{
            gap: 0.5,
            justifyContent: 'center',
            bgcolor: tokens.ink800,
            borderBottom: `1px solid ${tokens.ink700}`,
          }}
          aria-label={t.snapshotsLabel}
        >
          {project.images.map((img, i) => (
            <Box
              key={img.src}
              component="button"
              type="button"
              onClick={() => setActive(i)}
              aria-label={t.showSnapshot(i + 1)}
              aria-current={i === active}
              sx={{
                width: 44,
                height: 36,
                p: 0,
                border: 'none',
                background: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:active .dot': { transform: 'scaleY(0.6)' },
              }}
            >
              <Box
                className="dot"
                sx={{
                  width: 24,
                  height: 6,
                  borderRadius: 3,
                  bgcolor: i === active ? tokens.brass : tokens.paperDim,
                  transition: `opacity 160ms ${easing}, transform 160ms ${easing}`,
                  opacity: i === active ? 1 : 0.75,
                  '.project-card button:hover &': { opacity: 1 },
                }}
              />
            </Box>
          ))}
        </Stack>
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
              <CardMeta label={t.for} spine={spine} tokens={tokens}>
                {project.audience.map((a) => (
                  <Box component="span" key={a} sx={{ display: 'block' }}>
                    {a}
                  </Box>
                ))}
              </CardMeta>
            )}
            {project.role && (
              <CardMeta label={t.role} spine={spine} tokens={tokens}>
                {project.role}
              </CardMeta>
            )}
          </Box>
        )}

        <Stack direction="row" flexWrap="wrap" sx={{ gap: 1, mt: 2.5 }}>
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </Stack>

        {(project.githubUrl || project.liveUrl) && (
          <Stack direction="row" sx={{ gap: 3, mt: 3 }}>
            {project.githubUrl && (
              <CardLink href={project.githubUrl} tokens={tokens}>
                {t.viewGithub}
              </CardLink>
            )}
            {project.liveUrl && (
              <CardLink href={project.liveUrl} tokens={tokens}>
                {t.openSite}
              </CardLink>
            )}
          </Stack>
        )}
      </Box>
    </Box>
  )
}

function CardLink({
  href,
  children,
  tokens,
}: {
  href: string
  children: React.ReactNode
  tokens: ReturnType<typeof useTokens>['tokens']
}) {
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
function CardMeta({
  label,
  children,
  spine,
  tokens,
}: {
  label: string
  children: React.ReactNode
  spine: string
  tokens: ReturnType<typeof useTokens>['tokens']
}) {
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
