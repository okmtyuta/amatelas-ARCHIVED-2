import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'

import {
  TextareaVariant,
  getTextareaErrorColor,
  getTextareaFocusColor,
  getTextareaVariant,
  textareaClasses
} from '@okmtyuta/amatelas-theme'
import { Color } from '@okmtyuta/amatelas-theme/types'

type DefaultInputProps = ComponentProps<'input'>
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
  validate,
  helper,
  variant,
  material,
  focusColor,
  errorColor,
  ...props
}: _TextareaProps) => {
  const hasPlaceholder = !!props.placeholder && props.placeholder !== ''
  const _variant = getTextareaVariant(variant)
  const _focusColor = getTextareaFocusColor(focusColor)
  const _errorColor = getTextareaErrorColor(errorColor)
  const variantClasses = {
    [classes.outlined]: _variant === 'outlined',
    [classes.standard]: _variant === 'standard',
    [classes.filled]: _variant === 'filled'
  }

  return (
    <>
      <div
        className={clsx(
          classes.textarea,
          classes.focusColor(_focusColor),
          classes.errorColor(_errorColor),
          {
            [classes.validate]: validate,
            [classes.material]: material,
            ...variantClasses
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
            // {...props}
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
