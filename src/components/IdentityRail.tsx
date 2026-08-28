import { Box, Link, Stack, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { profile } from '../data/profile'
import logoUrl from '../../assets/logo.svg'
import { easing, mono, tokens } from '../theme'

/** Icon shown instead of the raw URL for known social links. */
const socialIcons: Record<string, typeof GitHubIcon> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
}

/** The masthead of the CV: fixed identity beside changing content. */
export default function IdentityRail() {
  return (
    <Box
      component="header"
      sx={{
        position: 'static',
        alignSelf: 'start',
      }}
    >
      {/* Decorative: the name sits directly below, so the mark is hidden from
          screen readers rather than announced twice. */}
      <Box
        component="img"
        src={logoUrl}
        alt=""
        aria-hidden
        sx={{ width: 40, height: 40, display: 'block', mb: 2.5 }}
      />

      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '2.5rem', md: '3rem' },
          // Break the name across two lines on desktop, as a masthead would.
          maxWidth: { md: '7ch' },
          mb: 2.5,
        }}
      >
        {profile.name}
      </Typography>

      {/* The one brass rule on the rail — it separates identity from detail. */}
      <Box
        sx={{ width: 56, height: 2, bgcolor: tokens.brass, mb: 2.5, opacity: 0.9 }}
      />

      <Typography sx={{ fontWeight: 500, mb: 0.5 }}>{profile.role}</Typography>
      <Typography
        sx={{ fontFamily: mono, fontSize: '0.8125rem', color: tokens.paperDim, mb: 3 }}
      >
        {profile.location}
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: tokens.paperDim, maxWidth: '34ch', mb: 4 }}
      >
        {profile.bio}
      </Typography>

      <Stack component="nav" spacing={1.25} aria-label="Contact links">
        <ContactLink label="Email" href={`mailto:${profile.email}`} value={profile.email} />
        {profile.links.map((link) => {
          const Icon = socialIcons[link.label]
          return (
            <ContactLink
              key={link.href}
              label={link.label}
              href={link.href}
              value={profile.name}
              icon={Icon ? <Icon sx={{ fontSize: '1rem' }} /> : undefined}
              external
            />
          )
        })}
      </Stack>
    </Box>
  )
}

function ContactLink({
  label,
  href,
  value,
  icon,
  external,
}: {
  label: string
  href: string
  value?: string
  icon?: React.ReactNode
  external?: boolean
}) {
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      sx={{
        display: 'grid',
        gridTemplateColumns: '4.25rem 1fr',
        alignItems: 'baseline',
        gap: 1,
        fontSize: '0.75rem',
        // Only transform and opacity animate; the nudge reads as a hover affordance.
        '& .value': { transition: `transform 180ms ${easing}` },
        '&:hover .value': { transform: 'translateX(2px)' },
      }}
    >
      <Box
        component="span"
        sx={{
          fontFamily: mono,
          fontSize: '0.625rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: tokens.brass,
        }}
      >
        {label}
      </Box>
      <Box
        component="span"
        className="value"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.75,
          fontFamily: mono,
          overflowWrap: 'anywhere',
          color: 'inherit',
        }}
      >
        {value}
        {icon}
      </Box>
    </Link>
  )
}
