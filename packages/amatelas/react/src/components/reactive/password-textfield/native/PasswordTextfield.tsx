// Refer to https://mui.com/material-ui/react-text-field/

import { ComponentProps, ReactNode, useState } from 'react'
import { clsx } from 'clsx'
import { getPasswordTextfieldPrefixed } from '@okmtyuta/amatelas-theme/helper'
import { VisibilitySVG, VisibilityOffSVG } from '@src/svg'

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
  visible?: boolean
} & DefaultInputProps

export const PasswordTextfield = ({
  variant,
  validate,
  helper,
  prefix,
  suffix,
  visible,
  ...props
}: TextfieldProps) => {
  const prefixed = getPasswordTextfieldPrefixed(variant)
  const [_visible, _setVisible] = useState<boolean>(!!visible)
  const _type = _visible ? 'text' : 'password'

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
          <div className={prefixed('input-area')}>
            <input
              {...props}
              className={clsx({
                [prefixed('input')]: true,
                [prefixed('prefixed')]: !!prefix,
                [prefixed('suffixed')]: !!suffix
              })}
              placeholder=" "
              type={_type}
            />
            {_visible ? (
              <VisibilitySVG
                className={clsx(prefixed('visible'), prefixed('visible-on'))}
                onClick={() => {
                  _setVisible((current) => !current)
                }}
              />
            ) : (
              <VisibilityOffSVG
                className={clsx(prefixed('visible'), prefixed('visible-off'))}
                onClick={() => {
                  _setVisible((current) => !current)
                }}
              />
            )}
          </div>
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
