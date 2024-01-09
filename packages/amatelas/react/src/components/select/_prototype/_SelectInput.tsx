import { selectClasses } from '@okmtyuta/amatelas-theme'
import { _MaterialFormItemInput } from '@src/components/material-form/_MaterialFormItem'
import clsx from 'clsx'
import { useContext } from 'react'
import { SelectProvider } from '../useSelect/useSelect'
import { _SelectProps } from './types'

const classes = selectClasses

export const _SelectInput = ({ children, ...props }: _SelectProps) => {
  const {
    selected,
    setFocus,
    setBlur,
    setQuery,
    setSelected,
    query,
    focus,
    blur
  } = useContext(SelectProvider)

  const placeholderShown = !selected && (query === '' || query == null)
  const _selected = selected || ''

  const onFocus = () => {
    if (setFocus && setBlur) {
      setFocus(true)
      setBlur(false)
    }
  }

  const _onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (setQuery) {
      setQuery(value)
    }
    if (setSelected) {
      setSelected(value)
    }
  }

  const _props = {
    ...props,
    onClick: onFocus,
    className: clsx(classes.input, {
      [classes.placeholderShown]: placeholderShown,
      [classes.initial]: !focus && !blur,
      [classes.focus]: focus,
      [classes.blur]: blur
    })
  }

  if (_props.as === 'input') {
    return (
      <_MaterialFormItemInput
        {..._props}
        value={_selected}
        onChange={_onQueryChange}
      />
    )
  }
  if (_props.as === 'select') {
    return (
      <_MaterialFormItemInput {..._props}>
        {props.as === 'select' ? <>{children}</> : null}fff
      </_MaterialFormItemInput>
    )
  }
  return <_MaterialFormItemInput {..._props} />
}
