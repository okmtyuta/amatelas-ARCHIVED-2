import { clsx } from 'clsx'
import { ComponentProps, MouseEventHandler, useId } from 'react'
import {
  AlertCloseSVG,
  AlertErrorSVG,
  AlertInfoSVG,
  AlertSuccessSVG,
  AlertWarningSVG
} from './AlertSVG'
import { alertPrefixed } from '@okmtyuta/amatelas-theme/prefixed'

import { Color } from '@okmtyuta/amatelas-theme/types'

export type AlertVariant = 'info' | 'danger' | 'warning' | 'success'

type DefaultDivProps = ComponentProps<'div'>
type AlertColor = Color
type AlertProps = {
  variant?: AlertVariant
  color?: AlertColor
  summary?: string
  onDelete?: MouseEventHandler<SVGSVGElement>
} & DefaultDivProps

export const getVariant = (variant?: AlertVariant) => {
  if (variant) {
    return variant
  }

  return 'info'
}
const getAlertColor = (color?: AlertColor, variant?: AlertVariant) => {
  console.log(color, variant)
  if (color) {
    return color
  }

  if (variant) {
    return variant
  }

  return 'info'
}
const getAlertSVG = (params: { variant?: AlertVariant }) => {
  const alertVariant = getVariant(params.variant)

  if (alertVariant === 'success') {
    return <AlertSuccessSVG />
  }
  if (alertVariant === 'warning') {
    return <AlertWarningSVG />
  }
  if (alertVariant === 'danger') {
    return <AlertErrorSVG />
  }

  return <AlertInfoSVG />
}

export const Alert = ({
  variant,
  color,
  summary,
  onDelete,
  ...props
}: AlertProps) => {
  const _color = getAlertColor(color, variant)
  const _alertSVG = getAlertSVG({ variant })
  const _id = useId()

  return (
    <div className={clsx(alertPrefixed(), alertPrefixed(_color))}>
      <input
        className={clsx(alertPrefixed('input'))}
        id={_id}
        type="checkbox"
      />

      <div className={clsx(alertPrefixed('alert-head'))}>
        <div className={clsx(alertPrefixed('summary'))}>
          {_alertSVG}
          <span className={clsx(alertPrefixed('summary-text'))}>{summary}</span>
        </div>

        <span className={clsx(alertPrefixed('close'))}>
          <label htmlFor={_id} className={clsx(alertPrefixed('close-label'))}>
            <AlertCloseSVG onClick={onDelete} />
          </label>
        </span>
      </div>

      {props.children}
    </div>
  )
}
