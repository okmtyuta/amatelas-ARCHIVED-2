import { ComponentProps } from 'react'
import { clsx } from 'clsx'

type DefaultListProps = ComponentProps<'ul'>
type ListProps = {
  // ordered?: boolean
} & DefaultListProps

import { listClasses } from '@okmtyuta/amatelas-theme'

const classes = listClasses

export const List = ({ ...props }: ListProps) => {
  return (
    <ul {...props} className={clsx(classes.list, props.className)}>
      {props.children}
    </ul>
  )
}
