import { ComponentProps } from 'react'
import { clsx } from 'clsx'
import {
  CheckedCircleSVG,
  CloseSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG
} from '@src/svg'
import { alertPrefixed } from '@okmtyuta/amatelas-theme/prefixed'

type AlertCloseSVGProps = ComponentProps<typeof CloseSVG>
type AlertSuccessProps = ComponentProps<typeof CheckedCircleSVG>
type AlertWarningProps = ComponentProps<typeof WarningSVG>
type AlertErrorProps = ComponentProps<typeof ErrorSVG>
type AlertInfoProps = ComponentProps<typeof InfoSVG>

export const AlertCloseSVG = ({ className, ...props }: AlertCloseSVGProps) => {
  return (
    <CloseSVG
      {...props}
      className={clsx(alertPrefixed('close-svg'), className)}
    />
  )
}

export const AlertSuccessSVG = ({ className, ...props }: AlertSuccessProps) => {
  return (
    <CheckedCircleSVG
      {...props}
      className={clsx(alertPrefixed('label-svg'), className)}
    />
  )
}
export const AlertWarningSVG = ({ className, ...props }: AlertWarningProps) => {
  return (
    <WarningSVG
      {...props}
      className={clsx(alertPrefixed('label-svg'), className)}
    />
  )
}
export const AlertErrorSVG = ({ className, ...props }: AlertErrorProps) => {
  return (
    <ErrorSVG
      {...props}
      className={clsx(alertPrefixed('label-svg'), className)}
    />
  )
}
export const AlertInfoSVG = ({ className, ...props }: AlertInfoProps) => {
  return (
    <InfoSVG
      {...props}
      className={clsx(alertPrefixed('label-svg'), className)}
    />
  )
}
