/** A thesis attached to a degree. Leave a degree's `thesis` undefined until you have one. */
export interface Thesis {
  title: string
  abstract: string
  /** Optional link to the PDF. Put the file in `public/` and use e.g. '/thesis.pdf'. */
  pdfUrl?: string
  /** Optional supervisor credit, e.g. 'Supervised by Prof. A. Example'. */
  supervisor?: string
  /** Optional grade or distinction. */
  grade?: string
}

export interface EducationEntry {
  /** Shown in the mono gutter, e.g. '2021' and '2024'. Use `end: 'Present'` if ongoing. */
  start: string
  end: string
  degree: string
  institution: string
  location?: string
  summary?: string
  /** Coursework, focus areas, honours — rendered as mono tags. */
  highlights?: string[]
  thesis?: Thesis
}

export interface Project {
  /** Stable id, used as the React key. */
  id: string
  name: string
  /** One line under the title. Keep it to a sentence. */
  tagline: string
  description: string
  /** Snapshots. Put real files in `public/projects/` and reference '/projects/name.png'. */
  images: { src: string; alt: string }[]
  /** What it lets someone do. Rendered as a hairline-marked list under the description. */
  highlights?: string[]
  /** Who it is for. Rendered as one compact mono line, not a second list. */
  audience?: string[]
  /** Rendered as mono tags. */
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  /** Your part in it — shown when the project was a team effort. */
  role?: string
  year?: string
}

export interface Profile {
  name: string
  role: string
  location: string
  /** Two or three sentences. This is the only prose on the identity rail. */
  bio: string
  email: string
  links: { label: string; href: string }[]
}

/**
 * A skill. Use a plain string for most, or the object form to mark the few you
 * want to stand out: `{ name: 'TypeScript', primary: true }`.
 */
export type SkillItem = string | { name: string; primary?: boolean }

export interface SkillGroup {
  /** Shown in the mono gutter, e.g. 'Languages'. */
  label: string
  items: SkillItem[]
  /** Optional one-line context for the group. */
  note?: string
}
