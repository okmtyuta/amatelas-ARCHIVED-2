import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { flexClasses } from '@okmtyuta/amatelas-theme'

export type FlexProps<T extends ElementType> = {
  element?: T
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  wrap?: boolean
  alignContent?:
    | 'normal'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'stretch'
  justifyContent?:
    | 'normal'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  alignItems?:
    | 'normal'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'baseline'
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const classes = flexClasses

export const _Flex = <T extends ElementType = 'div'>({
  element,
  direction = 'row',
  wrap = false,
  alignContent = 'normal',
  justifyContent = 'normal',
  alignItems = 'normal',
  ...props
}: FlexProps<T>) => {
  const Element = element ?? 'div'

  return (
    <Element
      {...props}
      className={clsx(
        classes.flex,
        classes.direction[direction],
        classes.alignContent[alignContent],
        classes.justifyContent[justifyContent],
        classes.alignItems[alignItems],
        {
          wrap
        }
      )}
    />
  )
}
