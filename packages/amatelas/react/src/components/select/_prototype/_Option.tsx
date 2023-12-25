import { ComponentProps, ElementType } from 'react'

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

  return (
    <_Element {...props} className="option">
      {_label}
    </_Element>
  )
}
