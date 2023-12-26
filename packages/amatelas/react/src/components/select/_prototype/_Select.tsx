import { ComponentProps } from 'react'
import { useSelect } from '../useSelect/useSelect'
import clsx from 'clsx'
import {
  _MaterialFormItem,
  _MaterialFormItemInput,
  _MaterialFormItemPlaceholder,
  _MaterialFormItemOutline
} from '@src/components/material-form/_MaterialFormItem'

type DefaultSelectProps = ComponentProps<'select'>
type DefaultDivProps = ComponentProps<'div'>
type _CommonSelectProps = {
  material?: boolean
}
interface _SelectSelectProps extends _CommonSelectProps, DefaultSelectProps {
  material?: false
}
interface _DivSelectProps extends _CommonSelectProps, DefaultDivProps {
  material: true
}

export const _Select = ({
  children,
  material,
  ...props
}: _SelectSelectProps | _DivSelectProps) => {
  const {
    SelectProvider,
    selected,
    setSelected,
    focus,
    setFocus,
    blur,
    setBlur
  } = useSelect()
  const _material = !!material
  const _selectAs = _material ? 'div' : 'select'
  const placeholderShown = !selected

  const onFocus = () => {
    setFocus(true)
    setBlur(false)
  }
  const onBlur = () => {
    setFocus(false)
    setBlur(true)
  }

  return (
    <SelectProvider.Provider value={{ setSelected, setFocus, setBlur }}>
      <div className={clsx('select', { material: _material })}>
        <label className="outside-placeholder">{props.placeholder}</label>

        <_MaterialFormItem className={clsx('select-area')}>
          <_MaterialFormItemPlaceholder className="inside-placeholder">
            {props.placeholder}
          </_MaterialFormItemPlaceholder>
          <div className="selected">{selected}</div>
          <_MaterialFormItemInput
            {...props}
            as={_selectAs}
            onClick={onFocus}
            className={clsx('select-input', {
              'placeholder-shown': placeholderShown,
              initial: !focus && !blur,
              focus,
              blur
            })}
          >
            {!_material && <>{children}</>}
          </_MaterialFormItemInput>

          {_material && <div className="options">{children}</div>}

          <_MaterialFormItemOutline />

          <div className="blur-background" onClick={onBlur} />
        </_MaterialFormItem>
      </div>
    </SelectProvider.Provider>
  )
}
