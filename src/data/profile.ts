import type { Lang, Profile } from '../types'

// Name, email, and social links are proper nouns/identifiers — identical across
// languages. Role, location, and bio are prose, so each language gets its own copy.
export const profileByLang: Record<Lang, Profile> = {
  en: {
    name: 'Filip Milanov',
    role: 'Software Engineer',
    location: 'Vienna, Austria',
    bio: 'Software engineering student in Vienna, working on web applications. What I work with is on the skills tab. What I have built is on the projects tab.',
    email: 'filip.milanov.dev@gmail.com',
    links: [
      { label: 'GitHub', href: 'https://github.com/filipmilanov' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/filip-milanov-239591232/' },
    ],
  },
  de: {
    name: 'Filip Milanov',
    role: 'Softwareentwickler',
    location: 'Wien, Österreich',
    bio: 'Softwaretechnik-Student in Wien mit Fokus auf Webanwendungen. Womit ich arbeite, steht im Tab „Kenntnisse“. Was ich gebaut habe, steht im Tab „Projekte“.',
    email: 'filip.milanov.dev@gmail.com',
    links: [
      { label: 'GitHub', href: 'https://github.com/filipmilanov' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/filip-milanov-239591232/' },
    ],
  },
  bg: {
    name: 'Filip Milanov',
    role: 'Софтуерен инженер',
    location: 'Виена, Австрия',
    bio: 'Студент по софтуерно инженерство във Виена, работещ по уеб приложения. С какво работя — в раздел „Умения“. Kакво съм изградил — в раздел „Проекти“.',
    email: 'filip.milanov.dev@gmail.com',
    links: [
      { label: 'GitHub', href: 'https://github.com/filipmilanov' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/filip-milanov-239591232/' },
    ],
  },
}
