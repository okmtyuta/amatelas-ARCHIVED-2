import { PositionalPosition, positionalClasses } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { ElementType, ComponentPropsWithoutRef } from 'react'

export type PositionalProps<T extends ElementType> = {
  as?: T
  position?: PositionalPosition
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const classes = positionalClasses

export const Positional = <T extends ElementType = 'div'>({
  as,
  position,
  ...props
}: PositionalProps<T>) => {
  const _Element = as ?? 'div'

  if (!position || position === 'static') {
    return <_Element {...props} className={clsx(classes.positional)} />
  }

  return (
    <_Element
      {...props}
      className={clsx(classes.positional, classes[position])}
    />
  )
}
