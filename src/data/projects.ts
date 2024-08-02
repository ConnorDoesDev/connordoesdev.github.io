import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'connor.is-a.dev',
    description:
      "ur here",
    href: '/projects',
    icon: ['fas', 'home'],
  },
  {
    title: 'VALORANT',
    description:
      "A 5v5 character-based tactical shooter",
    href: 'https://vlr.gg',
    icon: ['fas', 'robot'],
  },
  {
    title: 'EZflip',
    description:
      "next era of cryptocurrency gambling",
    href: 'https://ezflip.gg',
    icon: ['fas', 'pen'],
  },
  {
    title: 'placeholder',
    description:
      "same as above",
    href: 'https://placeholder.com',
    icon: ['fas', 'pen'],
  },
]
