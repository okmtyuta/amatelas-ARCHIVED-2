import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { headingPrefixed } from '@okmtyuta/amatelas-theme/prefixed'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps<T extends ElementType> = {
  as?: HeadingType
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

export const Heading = <T extends ElementType = 'h1'>({
  as,
  ...props
}: HeadingProps<T>) => {
  const _H = as ?? 'h1'
  const prefixed = headingPrefixed

  return <_H {...props} className={clsx(prefixed(), prefixed(_H))} />
}
