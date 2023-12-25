import { ComponentProps, ElementType } from 'react'

type _SelectProps<Element extends ElementType> = {
  as?: Element
} & Omit<ComponentProps<Element>, 'tag'>

export const _Select = <Element extends ElementType = 'select'>({
  children,
  as,
  ...props
}: _SelectProps<Element>) => {
  const _Element = as ?? 'select'

  return (
    <div className="selectlist">
      <label className="placeholder">{props.placeholder}</label>
      <_Element {...props} className="select">
        {children}
      </_Element>
      <div className="select-outline"></div>
    </div>
  )
}
