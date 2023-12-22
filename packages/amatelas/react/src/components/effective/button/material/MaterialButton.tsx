// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementType, useRef, useState } from 'react'
import { Color } from '@okmtyuta/amatelas-theme/types'
import { type MaterialButtonVariant } from '@okmtyuta/amatelas-theme/types'
import { getMaterialButtonPrefixed } from '@okmtyuta/amatelas-theme/helper'
import { ripplePrefixed } from '@okmtyuta/amatelas-theme/prefixed'

import './ripple.css'

type MaterialButtonColor = Color
type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

export type MaterialButtonProps<T extends ElementType> = {
  as?: T
  width?: Width
  variant?: MaterialButtonVariant
  color?: MaterialButtonColor
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

type Ripple = {
  x: number
  y: number
  key: string
}
type RippleProps = {
  x: number
  y: number
  color: string
}

const Ripple = (props: RippleProps) => {
  return (
    <span
      style={{ top: props.y, left: props.x }}
      className={clsx(ripplePrefixed(), ripplePrefixed(props.color))}
    />
  )
}

export const MaterialButton = <T extends ElementType = 'button'>({
  as,
  width,
  variant,
  color,
  ...props
}: MaterialButtonProps<T>) => {
  const _Button = as ?? 'button'
  const _color = getColor(color)
  const _width = getWidth(width)
  const [_ripples, _setRipples] = useState<Ripple[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const prefixed = getMaterialButtonPrefixed(variant)

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (buttonRef.current) {
      const _x = e.clientX - buttonRef.current.getBoundingClientRect().x - 100
      const _y = e.clientY - buttonRef.current.getBoundingClientRect().y - 100

      const _key = crypto.randomUUID()
      _setRipples((current) => [...current, { x: _x, y: _y, key: _key }])

      setTimeout(() => {
        _setRipples((current) =>
          current.filter((ripple) => ripple.key !== _key)
        )
      }, 1000)
    }
  }

  return (
    <_Button
      {...props}
      className={clsx(prefixed(), prefixed(_color), prefixed(_width))}
      ref={buttonRef}
      onClick={onClick}
    >
      {_ripples.map((ripple) => (
        <Ripple x={ripple.x} y={ripple.y} key={ripple.key} color={_color} />
      ))}
      {props.children}
    </_Button>
  )
}
