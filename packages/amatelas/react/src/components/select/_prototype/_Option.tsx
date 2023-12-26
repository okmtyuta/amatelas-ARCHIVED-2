import { ComponentProps, ElementType, useContext } from 'react'
import { SelectProvider } from '../useSelect/useSelect'

type _OptionProps<Element extends ElementType> = {
  as?: Element
  children: string
} & Omit<ComponentProps<Element>, 'tag'>

export const _Option = <Element extends ElementType = 'option'>({
  children,
  as,
  ...props
}: _OptionProps<Element>) => {
  const _Element = as ?? 'option'
  const _label = children
  const { setSelected, setFocus, setBlur } = useContext(SelectProvider)

  const onSelect = () => {
    if (setSelected) {
      setSelected(_label)
    }
    if (setFocus) {
      setFocus(false)
    }
    if (setBlur) {
      setBlur(true)
    }
  }

  return (
    <_Element {...props} className="option" onClick={onSelect}>
      {_label}
    </_Element>
  )
}
