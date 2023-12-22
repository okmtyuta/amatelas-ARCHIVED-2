// Refer to https://mui.com/material-ui/react-text-field/

import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'
import { getTextfieldPrefixed } from '@okmtyuta/amatelas-theme/helper'

type Variant = 'outlined' | 'filled' | 'standard'
type TextfieldType = 'text' | 'password'

type DefaultInputProps = ComponentProps<'input'>
type TextfieldProps = {
  variant?: Variant
  type?: TextfieldType
  helper?: ReactNode
  validate?: boolean
  prefix?: string
  suffix?: string
} & DefaultInputProps

export const Textfield = ({
  variant,
  validate,
  helper,
  prefix,
  suffix,
  ...props
}: TextfieldProps) => {
  const prefixed = getTextfieldPrefixed(variant)
  return (
    <>
      <div
        className={clsx({
          [prefixed()]: true,
          [prefixed('validate')]: validate
        })}
      >
        <label className={prefixed('placeholder')}>
          {props.required ? `${props.placeholder}*` : props.placeholder}
        </label>

        <div className={prefixed('addon')}>
          {prefix && <span className={prefixed('prefix')}>{prefix}</span>}
          <input
            {...props}
            className={clsx({
              [prefixed('input')]: true,
              [prefixed('prefixed')]: !!prefix,
              [prefixed('suffixed')]: !!suffix
            })}
            placeholder=" "
            type="text"
          />
          {suffix && <span className={prefixed('suffix')}>{suffix}</span>}
        </div>
      </div>

      <div className={prefixed('helper')}>
        {helper ? (
          <div className={prefixed('helper-text')}>{helper}</div>
        ) : null}
      </div>
    </>
  )
}
