import { ComponentProps } from 'react'
import clsx from 'clsx'
import { skeletonClasses } from '@okmtyuta/amatelas-theme'

type DefaultSpanProps = ComponentProps<'div'>
type _SkeltonProps = {
  variant?: 'circle' | 'text' | 'rectangle' | 'rounded'
} & DefaultSpanProps

const classes = skeletonClasses

export const _Skeleton = ({
  variant = 'rectangle',
  ...props
}: _SkeltonProps) => {
  return <div {...props} className={clsx(classes.skeleton, classes[variant])} />
}
