// Refer to https://mui.com/material-ui/react-text-field/

import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'

import { getMaterialTextfieldPrefixed } from '@okmtyuta/amatelas-theme/helper'

type Variant = 'outlined' | 'filled' | 'standard'
type TextfieldType = 'text' | 'password'

type DefaultInputProps = ComponentProps<'input'>
type TextFiledProps = {
  variant?: Variant
  type?: TextfieldType
  helper?: ReactNode
  validate?: boolean
} & DefaultInputProps

export const MaterialTextField = ({
  variant,
  validate,
  className,
  helper,
  ...props
}: TextFiledProps) => {
  const prefixed = getMaterialTextfieldPrefixed(variant)
  return (
    <>
      <div
        className={clsx({
          [prefixed()]: true,
          [prefixed('validate')]: validate
        })}
      >
        <input
          {...props}
          className={clsx(prefixed('input'), className)}
          placeholder=" "
          type="text"
        />
        <label className={prefixed('placeholder')}>
          {props.required ? `${props.placeholder}*` : props.placeholder}
        </label>

        {variant === 'outlined' ? (
          <span className={prefixed('placeholder-background')}>
            {props.required ? `${props.placeholder}*` : props.placeholder}
          </span>
        ) : null}
      </div>

      <div className={prefixed('helper')}>
        {helper ? (
          <div className={prefixed('helper-text')}>{helper}</div>
        ) : null}
      </div>
    </>
  )
}
