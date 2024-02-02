// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { Color } from '@okmtyuta/amatelas-theme/types'
import { type ButtonVariant } from '@okmtyuta/amatelas-theme/types'

import {
  filledCircleButtonClasses,
  filledCircleButtonColorClass
} from '@okmtyuta/amatelas-theme'

type CircleButtonColor = Color
type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

export type CircleButtonProps<T extends ElementType> = {
  element?: T
  width?: Width
  variant?: ButtonVariant
  color?: CircleButtonColor
  loading?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const classes = filledCircleButtonClasses

export const _CircleButton = <T extends ElementType = 'button'>({
  element,
  // width = "auto",
  // variant,
  color = 'info',
  ...props
}: CircleButtonProps<T>) => {
  const Element = element ?? 'button'

  return (
    <Element
      {...props}
      className={clsx(
        classes.filledCircleButton,
        filledCircleButtonColorClass(color)
      )}
    >
      {props.children}
    </Element>
  )
}
