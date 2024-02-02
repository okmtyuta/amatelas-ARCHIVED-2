import { ComponentProps } from 'react'
import { clsx } from 'clsx'
import {
  CheckedCircleSVG,
  CloseSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG
} from '@src/svg'
import { alertClasses } from '@okmtyuta/amatelas-theme'

const classes = alertClasses

type AlertCloseSVGProps = ComponentProps<typeof CloseSVG>
type AlertSuccessProps = ComponentProps<typeof CheckedCircleSVG>
type AlertWarningProps = ComponentProps<typeof WarningSVG>
type AlertErrorProps = ComponentProps<typeof ErrorSVG>
type AlertInfoProps = ComponentProps<typeof InfoSVG>

export const AlertCloseSVG = ({ className, ...props }: AlertCloseSVGProps) => {
  return (
    <CloseSVG
      {...props}
      className={clsx(classes.closeSVG, className)}
    />
  )
}

export const AlertSuccessSVG = ({ className, ...props }: AlertSuccessProps) => {
  return (
    <CheckedCircleSVG
      {...props}
      className={clsx(classes.labelSVG, className)}
    />
  )
}
export const AlertWarningSVG = ({ className, ...props }: AlertWarningProps) => {
  return (
    <WarningSVG
      {...props}
      className={clsx(classes.labelSVG, className)}
    />
  )
}
export const AlertErrorSVG = ({ className, ...props }: AlertErrorProps) => {
  return (
    <ErrorSVG
      {...props}
      className={clsx(classes.labelSVG, className)}
    />
  )
}
export const AlertInfoSVG = ({ className, ...props }: AlertInfoProps) => {
  return (
    <InfoSVG
      {...props}
      className={clsx(classes.labelSVG, className)}
    />
  )
}
