import { useSelect } from '../useSelect/useSelect'
import clsx from 'clsx'
import {
  _MaterialFormItem,
  _MaterialFormItemPlaceholder,
  _MaterialFormItemOutline
} from '@src/components/material-form/_MaterialFormItem'
import { CloseSVG } from '@src/svg'
import {
  selectClasses,
  sharedMaterialFormItemClasses
} from '@okmtyuta/amatelas-theme'
import { _SelectProps } from './types'
import { _SelectInput } from './_SelectInput'

const classes = selectClasses

export const _Select = ({ children, material, ...props }: _SelectProps) => {
  const {
    SelectProvider,
    setSelected,
    setFocus,
    setBlur,
    setQuery,
    setFocusedOptionKey,
    selected,
    blur,
    query,
    focus,
    focusedOptionKey
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
        setFocusedOptionKey,
        selected,
        query,
        focus,
        blur,
        focusedOptionKey,
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
          <CloseSVG className={classes.deleteSVG} onClick={onDelete} />
          {props.placeholder && (
            <_MaterialFormItemPlaceholder className={classes.insidePlaceholder}>
              {props.placeholder}
            </_MaterialFormItemPlaceholder>
          )}

          <_SelectInput {...props} children={children} />
          {props.as === 'div' && (
            <div className={sharedMaterialFormItemClasses.value}>
              {selected}
            </div>
          )}
          {_material && <div className={classes.options}>{children}</div>}

          <_MaterialFormItemOutline />

          <div className={classes.blurBackground} onClick={onBlur} />
        </_MaterialFormItem>
      </div>
    </SelectProvider.Provider>
  )
}
