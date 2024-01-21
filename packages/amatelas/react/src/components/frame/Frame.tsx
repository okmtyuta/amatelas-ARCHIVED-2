import { ComponentProps } from 'react'
import { clsx } from 'clsx'
import { FrameSizes } from '@okmtyuta/amatelas-theme/types'
import { frameClasses } from '@okmtyuta/amatelas-theme'

type DefaultDivProps = ComponentProps<'div'>
type FrameProps = {
  size?: FrameSizes
} & DefaultDivProps

const getWidth = (size?: FrameSizes) => {
  if (size) {
    return size
  }

  return 'md'
}

export const Frame = ({ size, ...props }: FrameProps) => {
  return (
    <div
      {...props}
      className={clsx(
        frameClasses.frame,
        frameClasses.sizes[getWidth(size)],
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
