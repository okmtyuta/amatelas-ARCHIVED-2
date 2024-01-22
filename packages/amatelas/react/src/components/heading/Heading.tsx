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
  className,
  ...props
}: HeadingProps<T>) => {
  const Element = element ?? 'h1'

  return (
    <Element
      {...props}
      className={clsx(
        headingClasses['heading'],
        headingClasses[Element],
        className
      )}
    >
      {children}
    </Element>
  )
}
