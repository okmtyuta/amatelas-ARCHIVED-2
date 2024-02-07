import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'

import {
  TextareaVariant,
  textareaClasses
} from '@okmtyuta/amatelas-theme'
import { Color } from '@okmtyuta/amatelas-theme/types'

type DefaultInputProps = ComponentProps<'textarea'>
type _TextareaProps = {
  helper?: ReactNode
  validate?: boolean
  material?: boolean
  variant?: TextareaVariant
  focusColor?: Color
  errorColor?: Color
} & DefaultInputProps

const classes = textareaClasses

export const _Textarea = ({
  validate = false,
  helper,
  variant = "standard",
  material = false,
  focusColor = "info",
  errorColor = "alert",
  ...props
}: _TextareaProps) => {
  const hasPlaceholder = !!props.placeholder && props.placeholder !== ''

  return (
    <>
      <div
        className={clsx(
          classes.textarea,
          classes.focusColor(focusColor),
          classes.errorColor(errorColor),
          classes[variant],
          {
            [classes.validate]: validate,
            [classes.material]: material
          }
        )}
      >
        {hasPlaceholder && (
          <label
            className={clsx(classes.placeholder, classes.outsidePlaceholder)}
          >
            {props.required ? `${props.placeholder}*` : props.placeholder}
          </label>
        )}

        <div className={classes.inputArea}>
          {hasPlaceholder && (
            <label
              className={clsx(classes.placeholder, classes.insidePlaceholder)}
            >
              {props.required ? `${props.placeholder}*` : props.placeholder}
            </label>
          )}
          <label className={classes.insidePlaceholderBackground}>
            {props.required ? `${props.placeholder}*` : props.placeholder}
          </label>

          <textarea
            {...props}
            className={clsx(classes.input)}
            placeholder=" "
          />

          <div className={classes.inputOutline} />
        </div>
      </div>

      <div className="helper">
        {helper ? <div className="helper-text">{helper}</div> : null}
      </div>
    </>
  )
}
