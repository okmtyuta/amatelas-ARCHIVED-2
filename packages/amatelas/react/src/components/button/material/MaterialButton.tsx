// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'
import { Color } from '@okmtyuta/amatelas-theme/types'
import { type MaterialButtonVariant } from '@okmtyuta/amatelas-theme/types'
import { getMaterialButtonPrefixed } from '@okmtyuta/amatelas-theme/helper'

import './ripple.css'

type MaterialButtonColor = Color
type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

export type MaterialButtonProps<T extends ElementType> = {
  as?: T
  width?: Width
  variant?: MaterialButtonVariant
  color?: MaterialButtonColor
  ripple?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const getColor = (color?: Color) => {
  if (color) {
    return color
  }

  return 'info'
}
const getWidth = (width?: Width) => {
  if (width) {
    return width
  }

  return 'auto'
}

export const MaterialButton = <T extends ElementType = 'button'>({
  as,
  width,
  variant,
  color,
  ripple,
  ...props
}: MaterialButtonProps<T>) => {
  const _Button = as ?? 'button'
  const _color = getColor(color)
  const _width = getWidth(width)
  const _ripple = ripple === undefined ? true : ripple

  const prefixed = getMaterialButtonPrefixed(variant)

  return (
    <_Button
      {...props}
      className={clsx(prefixed(), prefixed(_color), prefixed(_width), {
        ripple: _ripple
      })}
    >
      {props.children}
    </_Button>
  )
}
