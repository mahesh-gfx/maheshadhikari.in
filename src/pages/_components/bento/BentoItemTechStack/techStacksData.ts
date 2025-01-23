import { Docker } from '@icons/Docker'
import { Jest } from '@icons/Jest'
import { Puppeteer } from '@icons/Puppeteer'
import { TypeScript } from '@icons/TypeScript'
import { Vuejs } from '@icons/VueJs'
import type { JSX, SVGProps } from 'react'

type TechStack = {
  name: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  description: string
}

const techStacks: TechStack[] = [
  {
    name: 'TypeScript',
    icon: TypeScript,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Jest',
    icon: Jest,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Vue',
    icon: Vuejs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Docker',
    icon: Docker,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  }
]

export default techStacks
