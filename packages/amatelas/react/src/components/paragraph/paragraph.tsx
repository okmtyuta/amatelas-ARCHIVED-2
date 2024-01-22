import { paragraphClasses } from '@okmtyuta/amatelas-theme'
import { ComponentProps } from 'react'

type DefaultParagraphProps = ComponentProps<'p'>
type ParagraphProps = DefaultParagraphProps

const classes = paragraphClasses

export const Paragraph = ({ ...props }: ParagraphProps) => {
  return <p {...props} className={classes.paragraph} />
}
