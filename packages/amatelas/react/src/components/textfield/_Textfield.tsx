import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'

import {
  TextfieldVariant,
  textfieldClasses
} from '@okmtyuta/amatelas-theme'
import { Color } from '@okmtyuta/amatelas-theme/types'
import { VisibilityOffSVG, VisibilitySVG } from '@src/svg'

type DefaultInputProps = ComponentProps<'input'>
type _TextFiledProps = {
  helper?: ReactNode
  validate?: boolean
  prefix?: string
  suffix?: string
  material?: boolean
  variant?: TextfieldVariant
  focusColor?: Color
  errorColor?: Color

  _hideable?: {
    onClickVisible?: React.MouseEventHandler<SVGSVGElement>
    onClickInvisible?: React.MouseEventHandler<SVGSVGElement>
    visible?: boolean
  }
} & DefaultInputProps

const classes = textfieldClasses

export const _Textfield = ({
  validate = false,
  helper,
  prefix,
  suffix,
  variant = 'standard',
  material = false,
  focusColor = 'info',
  errorColor = 'alert',
  _hideable,
  ...props
}: _TextFiledProps) => {
  const hasPlaceholder = !!props.placeholder && props.placeholder !== ''

  return (
    <>
      <div
        className={clsx(
          classes.textfield,
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

        <div className={classes.addon}>
          {prefix && (
            <div className={classes.prefix}>
              <span className={classes.prefixText}>{prefix}</span>
            </div>
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

            <input
              {...props}
              className={clsx(classes.input, {
                [classes.prefixed]: !!prefix,
                [classes.suffixed]: !!suffix
              })}
              placeholder=" "
            />

            <div className={classes.inputOutline} />

            {_hideable && (
              <div className={clsx(classes.visibility)}>
                {_hideable.visible ? (
                  <VisibilitySVG onClick={_hideable.onClickVisible} />
                ) : (
                  <VisibilityOffSVG onClick={_hideable?.onClickInvisible} />
                )}
              </div>
            )}
          </div>

          {suffix && (
            <div className={classes.suffix}>
              <span className={classes.suffixText}>{suffix}</span>
            </div>
          )}
        </div>
      </div>

      <div className="helper">
        {helper ? <div className="helper-text">{helper}</div> : null}
      </div>
    </>
  )
}
