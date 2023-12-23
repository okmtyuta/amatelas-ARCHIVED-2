import { paragraphPrefixed } from '@okmtyuta/amatelas-theme/prefixed'
import { ComponentProps } from 'react'

type DefaultParagraphProps = ComponentProps<'p'>
type ParagraphProps = DefaultParagraphProps

export const Paragraph = ({ ...props }: ParagraphProps) => {
  const prefixed = paragraphPrefixed
  return <p {...props} className={prefixed()}/>
}
