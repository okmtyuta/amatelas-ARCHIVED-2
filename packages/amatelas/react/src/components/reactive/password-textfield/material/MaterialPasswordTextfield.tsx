// Refer to https://mui.com/material-ui/react-text-field/

import { ComponentProps, ReactNode, useState } from 'react'
import { clsx } from 'clsx'

import { getMaterialPasswordTextfieldPrefixed } from '@okmtyuta/amatelas-theme/helper'
import { VisibilitySVG } from '@src/svg/VisibilitySVG'
import { VisibilityOffSVG } from '@src/svg'

type Variant = 'outlined' | 'filled' | 'standard'
type TextfieldType = 'text' | 'password'

type DefaultInputProps = ComponentProps<'input'>
type MaterialPasswordTextFiledProps = {
  variant?: Variant
  type?: TextfieldType
  helper?: ReactNode
  validate?: boolean
  visible?: boolean
} & DefaultInputProps

export const MaterialPasswordTextField = ({
  variant,
  validate,
  className,
  helper,
  visible,
  ...props
}: MaterialPasswordTextFiledProps) => {
  const prefixed = getMaterialPasswordTextfieldPrefixed(variant)
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
        <input
          {...props}
          className={clsx(prefixed('input'), className)}
          placeholder=" "
          type={_type}
        />
        <label className={prefixed('placeholder')}>
          {props.required ? `${props.placeholder}*` : props.placeholder}
        </label>

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
