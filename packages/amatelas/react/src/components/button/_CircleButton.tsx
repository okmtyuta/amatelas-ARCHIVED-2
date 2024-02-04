// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { Color } from '@okmtyuta/amatelas-theme/types'
import { type ButtonVariant } from '@okmtyuta/amatelas-theme/types'

import {
  circleButtonClasses,
  circleButtonColorClass
} from '@okmtyuta/amatelas-theme'

type CircleButtonColor = Color
type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

export type CircleButtonProps<T extends ElementType> = {
  element?: T
  width?: Width
  variant?: ButtonVariant
  color?: CircleButtonColor
  loading?: boolean
  extensive?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const classes = circleButtonClasses

export const _CircleButton = <T extends ElementType = 'button'>({
  element,
  // width = "auto",
  variant = 'standard',
  color = 'info',
  ...props
}: CircleButtonProps<T>) => {
  const Element = element ?? 'button'

  return (
    <Element
      {...props}
      className={clsx(
        classes.circleButton,
        classes[variant],
        circleButtonColorClass(color)
      )}
    >
      {props.children}
    </Element>
  )
}
