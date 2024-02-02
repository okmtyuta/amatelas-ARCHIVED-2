import { clsx } from 'clsx'
import { ComponentProps, MouseEventHandler, useId } from 'react'
import {
  AlertCloseSVG,
  AlertErrorSVG,
  AlertInfoSVG,
  AlertSuccessSVG,
  AlertWarningSVG
} from './AlertSVG'

import { Color } from '@okmtyuta/amatelas-theme/types'
import { alertClasses, alertColorClass } from '@okmtyuta/amatelas-theme'

const classes = alertClasses

export type AlertVariant = 'info' | 'danger' | 'warning' | 'success'

type DefaultDivProps = ComponentProps<'div'>
type AlertColor = Color
type AlertProps = {
  variant?: AlertVariant
  color?: AlertColor
  summary?: string
  onDelete?: MouseEventHandler<SVGSVGElement>
} & DefaultDivProps

const getAlertSVG = ({ variant = 'info' }: { variant?: AlertVariant }) => {
  if (variant === 'success') {
    return <AlertSuccessSVG />
  }
  if (variant === 'warning') {
    return <AlertWarningSVG />
  }
  if (variant === 'danger') {
    return <AlertErrorSVG />
  }

  return <AlertInfoSVG />
}

export const Alert = ({
  variant = 'info',
  color = 'info',
  summary,
  onDelete,
  ...props
}: AlertProps) => {
  const _alertSVG = getAlertSVG({ variant })
  const _id = useId()

  return (
    <div className={clsx(classes.alert, alertColorClass(color))}>
      <input className={clsx(classes.input)} id={_id} type="checkbox" />

      <div className={clsx(classes.alertHead)}>
        <div className={clsx(classes.summary)}>
          {_alertSVG}
          <span className={clsx(classes.summaryText)}>{summary}</span>
        </div>

        <span className={clsx(classes.close)}>
          <label htmlFor={_id} className={classes.closeLabel}>
            <AlertCloseSVG onClick={onDelete} />
          </label>
        </span>
      </div>

      {props.children}
    </div>
  )
}
