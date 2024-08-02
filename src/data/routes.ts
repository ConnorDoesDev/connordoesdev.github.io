import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Route {
  name: string
  href: string
  type?: string
  icon?: IconProp
}

export const RouteData: Route[] = [
  {
    name: '\t',
    href: '/',
    icon: ['fas', 'home'],
  },
  {
    name: 'projects',
    href: '/projects',
  },
  {
    name: 'blog',
    href: '/blog',
  },
  {
    name: 'specs',
    href: '/setup',
    type: 'dropdown',
  },
]
