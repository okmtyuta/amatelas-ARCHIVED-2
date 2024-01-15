import { ComponentProps, useId } from 'react'
import { DangerousSVG, DoneSVG } from '@src/svg'
import clsx from 'clsx'
import { checkboxPrefixed } from '@okmtyuta/amatelas-theme/prefixed'

type DefaultFieldsetProps = ComponentProps<'fieldset'>
type CheckboxGroupProps = DefaultFieldsetProps

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  return <fieldset {...props} />
}

type DefaultInputProps = ComponentProps<'input'>
type CheckboxProps = DefaultInputProps

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  const _id = useId()
  return (
    <label htmlFor={_id} className={checkboxPrefixed()}>
      <input
        {...props}
        className={checkboxPrefixed('input')}
        id={_id}
        type="checkbox"
      />
      <span
        className={clsx(
          checkboxPrefixed('checked'),
          checkboxPrefixed('marker')
        )}
      >
        <DoneSVG />
      </span>
      <span
        className={clsx(
          checkboxPrefixed('unchecked'),
          checkboxPrefixed('marker')
        )}
      >
        <DangerousSVG />
      </span>

      <span className={checkboxPrefixed('detail')}>{children}</span>
    </label>
  )
}
