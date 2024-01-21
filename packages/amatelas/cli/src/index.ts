const template = `
  <@tag @props @class={clsx(headingClasses["heading"], headingClasses[@tag])}>
    @children
  </@tag>
`

const rendered = template
  .replaceAll('@class', 'class')
  .replaceAll('@children', '{children}')
  .replaceAll('@tag', 'Element')
  .replaceAll('@props', '{...props}')

const file = /* js */ `
  import clsx from 'clsx'
  import { ComponentPropsWithoutRef, ElementType } from 'react'

  import { headingClasses } from '@okmtyuta/amatelas-theme'

  type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  export type HeadingProps<T extends ElementType> = {
    element?: HeadingType
  } & Omit<ComponentPropsWithoutRef<T>, 'tag'>

  export const Heading = <T extends ElementType = 'h1'>({
    element,
    children,
    ...props
  }: HeadingProps<T>) => {
    const Element = element ?? 'h1'

    return (
      ${rendered}
    )
  }
`

console.log(file)
