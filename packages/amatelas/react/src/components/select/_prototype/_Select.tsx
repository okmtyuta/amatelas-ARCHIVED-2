import { ComponentProps, useContext } from 'react'
import { SelectProvider, useSelect } from '../useSelect/useSelect'
import clsx from 'clsx'
import {
  _MaterialFormItem,
  _MaterialFormItemInput,
  _MaterialFormItemPlaceholder,
  _MaterialFormItemOutline
} from '@src/components/material-form/_MaterialFormItem'
import { CloseSVG } from '@src/svg'
import { selectClasses } from '@okmtyuta/amatelas-theme'

type DefaultSelectProps = ComponentProps<'select'>
type DefaultDivProps = ComponentProps<'div'>
type DefaultInputProps = ComponentProps<'input'>
type _CommonSelectProps = {
  as?: 'select' | 'div' | 'input'
  material?: boolean
}
interface _SelectSelectProps extends _CommonSelectProps, DefaultSelectProps {
  as: 'select'
}
interface _DivSelectProps extends _CommonSelectProps, DefaultDivProps {
  as: 'div'
}
interface _InputSelectProps extends _CommonSelectProps, DefaultInputProps {
  as: 'input'
}

type _OptionProps = _SelectSelectProps | _DivSelectProps | _InputSelectProps

const classes = selectClasses

const _SelectInput = ({ children, ...props }: _OptionProps) => {
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
  const onFocus = () => {
    if (setFocus && setBlur) {
      setFocus(true)
      setBlur(false)
    }
  }
  const placeholderShown = !selected && (query === '' || query == null)

  const _selected = selected || ''

  const _onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (setQuery) {
      setQuery(value)
    }
    if (setSelected) {
      setSelected(value)
    }
  }
  const className = clsx(classes.input, {
    [classes.placeholderShown]: placeholderShown,
    [classes.initial]: !focus && !blur,
    [classes.focus]: focus,
    [classes.blur]: blur
  })
  const _props = {
    ...props,
    onClick: onFocus,
    className: className
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
        {props.as === 'select' ? <>{children}</> : null}
      </_MaterialFormItemInput>
    )
  }
  return <_MaterialFormItemInput {..._props} />
}

export const _Select = ({ children, material, ...props }: _OptionProps) => {
  const {
    SelectProvider,
    setSelected,
    setFocus,
    setBlur,
    setQuery,
    selected,
    blur,
    query,
    focus
  } = useSelect()
  const _material = !!material

  const onBlur = () => {
    setFocus(false)
    setBlur(true)
  }
  const onDelete = () => {
    setSelected(null)
    setQuery(null)
  }

  return (
    <SelectProvider.Provider
      value={{
        setSelected,
        setFocus,
        setBlur,
        setQuery,
        selected,
        query,
        focus,
        blur,
        as: props.as
      }}
    >
      <div
        className={clsx(classes.select, {
          [classes.material]: _material,
          [classes.as.input]: props.as === 'input'
        })}
      >
        <label className={classes.outsidePlaceholder}>
          {props.placeholder}
        </label>

        <_MaterialFormItem className={clsx('select-area')}>
          <CloseSVG
            className={classes.deleteSVG}
            onClick={() => {
              onDelete()
            }}
          />
          <_MaterialFormItemPlaceholder className={classes.insidePlaceholder}>
            {props.placeholder}
          </_MaterialFormItemPlaceholder>

          <_SelectInput {...props} children={children} />
          {props.as === 'div' && (
            <div className={classes.selected}>{selected}</div>
          )}
          {_material && <div className={classes.options}>{children}</div>}

          <_MaterialFormItemOutline />

          <div className={classes.blurBackground} onClick={onBlur} />
        </_MaterialFormItem>
      </div>
    </SelectProvider.Provider>
  )
}
