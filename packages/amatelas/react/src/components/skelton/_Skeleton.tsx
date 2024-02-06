import { ComponentProps } from 'react'
import clsx from 'clsx'
import { skeletonClasses } from '@okmtyuta/amatelas-theme'

type DefaultSpanProps = ComponentProps<'div'>
type _SkeltonProps = {
  inline?: boolean
  hidden?: boolean
} & DefaultSpanProps

const classes = skeletonClasses

export const _Skeleton = ({
  children,
  hidden = false,
  inline = false,
  ...props
}: _SkeltonProps) => {
  return (
    <div
      {...props}
      className={clsx(classes.skeleton, {
        [classes.hidden]: hidden,
        [classes.inline]: inline
      })}
    >
      <div className={classes.content}>{children}</div>
    </div>
  )
}
