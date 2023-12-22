import { ComponentProps } from 'react'
import { blockquotePrefixed } from '@okmtyuta/amatelas-theme/prefixed'

type DefaultBlockquoteProps = ComponentProps<'blockquote'>
type BlockquoteProps = DefaultBlockquoteProps

export const Blockquote = ({ ...props }: BlockquoteProps) => {
  return (
    <blockquote {...props} className={blockquotePrefixed()}>
      {props.children}
    </blockquote>
  )
}
