import { ComponentProps } from 'react'
import clsx from 'clsx'
import { modalClasses } from '@okmtyuta/amatelas-theme'

type DefaultDivProps = ComponentProps<'div'>
type ModalProps = {
  open?: boolean
} & DefaultDivProps

const classes = modalClasses

export const Modal = ({ open, ...props }: ModalProps) => {
  return (
    <div
      {...props}
      className={clsx({
        [classes.modal]: true,
        [classes.open]: open,
        [classes.close]: !open
      })}
    >
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}
