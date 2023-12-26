import clsx from 'clsx'
import { ComponentProps, ElementType } from 'react'

type _MaterialFormItemProps<Element extends ElementType> = {
  as?: Element
  className?: string
} & Omit<ComponentProps<Element>, 'tag'>
type _MaterialFormItemPlaceholderProps<Element extends ElementType> = {
  as?: Element
  className?: string
} & Omit<ComponentProps<Element>, 'tag'>
type _MaterialFormItemOutlineProps<Element extends ElementType> = {
  as?: Element
  className?: string
} & Omit<ComponentProps<Element>, 'tag'>
type _MaterialFormItemInputProps<Element extends ElementType> = {
  as?: Element
  className?: string
} & Omit<ComponentProps<Element>, 'tag'>

export const _MaterialFormItem = <Element extends ElementType = 'div'>({
  as,
  className,
  ...props
}: _MaterialFormItemProps<Element>) => {
  const _Element = as ?? 'div'
  return (
    <_Element {...props} className={clsx('material-form-item', className)} />
  )
}
export const _MaterialFormItemPlaceholder = <
  Element extends ElementType = 'label'
>({
  as,
  className,
  ...props
}: _MaterialFormItemPlaceholderProps<Element>) => {
  const _Element = as ?? 'label'
  return (
    <_Element
      {...props}
      className={clsx('material-form-item-placeholder', className)}
    />
  )
}
export const _MaterialFormItemOutline = <Element extends ElementType = 'div'>({
  as,
  className,
  ...props
}: _MaterialFormItemOutlineProps<Element>) => {
  const _Element = as ?? 'div'
  return (
    <_Element
      {...props}
      className={clsx('material-form-item-outline', className)}
    />
  )
}
export const _MaterialFormItemInput = <Element extends ElementType = 'input'>({
  as,
  className,
  ...props
}: _MaterialFormItemInputProps<Element>) => {
  const _Element = as ?? 'input'
  return (
    <_Element
      {...props}
      placeholder=' '
      className={clsx('material-form-item-input', className)}
    />
  )
}
