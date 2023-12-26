import { ComponentProps } from 'react'
import './ripple.css'

type DefaultSpanProps = ComponentProps<'span'>
type _RippleProps = {
  radius?: number
  center?: {
    x: number
    y: number
  }
} & DefaultSpanProps

export const _Ripple = ({  radius, center, ...props }: _RippleProps) => {
  const _radius = radius ?? 50
  const _center = center ?? { x: 0, y: 0 }
  return (
    <span
      {...props}
      className="ripple"
      style={{
        height: `${_radius}px`,
        width: `${_radius}px`,
        top: `${_center.y}px`,
        left: `${_center.x}px`
      }}
    />
  )
}
