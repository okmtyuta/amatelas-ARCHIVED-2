import { useContext, useRef } from 'react'
import { SelectProvider } from '../useSelect/useSelect'
import { selectClasses } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { _selectParameters } from './_parameters'
import { ClickEvent } from '@src/types'
import { useRipple } from '@src/components/ripple/useRipple'
import { _OptionProps } from './types'

const classes = selectClasses
const _parameters = _selectParameters

export const _Option = ({ children, ...props }: _OptionProps) => {
  const {
    setSelected,
    setFocus,
    setBlur,
    setQuery,
    query,
    as,
    focusedOptionKey,
    setFocusedOptionKey
  } = useContext(SelectProvider)

  const _material = props._type === 'material'
  const _label = children
  const _key = _label
  const focused = _key === focusedOptionKey

  const ref = useRef<HTMLDivElement>(null)

  const { onRipple, Ripples } = useRipple<
    HTMLDivElement | HTMLOptionElement,
    HTMLDivElement
  >(ref, _parameters._rippleRadius)

  const onSelect = (event: ClickEvent<HTMLDivElement | HTMLOptionElement>) => {
    if (setSelected) {
      setSelected(_label)
    }
    if (setFocusedOptionKey) {
      setFocusedOptionKey(_key)
    }
    if (setFocus) {
      setFocus(false)
    }
    if (setBlur) {
      setBlur(true)
    }
    if (setQuery && as === 'input') {
      setTimeout(() => {
        setQuery(_label)
      }, _parameters._querySetDurationOnSelected)
    }

    onRipple(event)
  }

  if (props._type === 'material') {
    if (!_label.includes(query || '') && as === 'input') {
      return null
    }

    return (
      <div
        {...props}
        className={clsx(classes.option, { focused })}
        onClick={onSelect}
        ref={ref}
      >
        {_label}
        {_material && <Ripples />}
      </div>
    )
  }

  return (
    <option {...props} className={classes.option} onClick={onSelect}>
      {_label}
    </option>
  )
}
