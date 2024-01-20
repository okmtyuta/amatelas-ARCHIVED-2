import { PositionalPosition, positionalClasses } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { ElementType, ComponentPropsWithoutRef } from 'react'

type Position = PositionalPosition

export type PositionalProps<T extends ElementType> = {
  as?: T
  position?: Position
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const classes = positionalClasses

export const Positional = <T extends ElementType = 'div'>({
  as,
  position,
  className,
  ...props
}: PositionalProps<T>) => {
  const _Element = as ?? 'div'

  if (!position || position === 'static') {
    return <_Element {...props} className={clsx(classes.positional, className)} />
  }

  return (
    <_Element
      {...props}
      className={clsx(classes.positional, classes[position], className)}
    />
  )
}
