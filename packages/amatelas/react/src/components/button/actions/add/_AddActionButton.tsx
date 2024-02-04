// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { Color } from '@okmtyuta/amatelas-theme/types'
import { type ButtonVariant } from '@okmtyuta/amatelas-theme/types'

import {
  circleButtonClasses,
  circleButtonColorClass
} from '@okmtyuta/amatelas-theme'
import { AddSVG } from '@src/svg/AddSVG'

type AddActionButtonColor = Color
type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

export type CircleButtonProps<T extends ElementType> = {
  element?: T
  width?: Width
  variant?: ButtonVariant
  color?: AddActionButtonColor
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const classes = circleButtonClasses

export const _AddActionButton = <T extends ElementType = 'button'>({
  element,
  color = 'info',
  variant = 'standard',
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
      <AddSVG className={classes.actionSVG} />
    </Element>
  )
}
