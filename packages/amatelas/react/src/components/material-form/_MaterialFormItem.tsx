import { materialFormItemClasses } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { ComponentProps, ElementType } from 'react'

type Round = {
  topLeft?: boolean
  topRight?: boolean
  bottomLeft?: boolean
  bottomRight?: boolean
}

type _MaterialFormItemVariant = 'standard' | 'outlined' | 'filled'
type _SharedMaterialFormItemProps<Element extends ElementType> = {
  as?: Element
  className?: string
  round?: Round
} & Omit<ComponentProps<Element>, 'tag'>

type _MaterialFormItemProps<Element extends ElementType> =
  _SharedMaterialFormItemProps<Element> & { variant?: _MaterialFormItemVariant }
type _MaterialFormItemPlaceholderProps<Element extends ElementType> =
  _SharedMaterialFormItemProps<Element>
type _MaterialFormItemOutlineProps<Element extends ElementType> =
  _SharedMaterialFormItemProps<Element>
type _MaterialFormItemInputProps<Element extends ElementType> =
  _SharedMaterialFormItemProps<Element>

const classes = materialFormItemClasses

export const _MaterialFormItem = <Element extends ElementType = 'div'>({
  as,
  className,
  variant,
  round,
  ...props
}: _MaterialFormItemProps<Element>) => {
  const _Element = as ?? 'div'
  const _variantClass =
    variant === 'outlined'
      ? classes.variant.outlined
      : variant === 'filled'
      ? classes.variant.filled
      : classes.variant.standard

  return (
    <_Element
      {...props}
      className={clsx(
        classes.materialFormItem,
        _variantClass,
        {
          [classes.round.topLeft]: round?.topLeft,
          [classes.round.topRight]: round?.topRight,
          [classes.round.bottomLeft]: round?.bottomLeft,
          [classes.round.bottomRight]: round?.bottomRight
        },
        className
      )}
    />
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
    <>
      <_Element {...props} className={clsx(classes.placeholder, className)} />
      <div className={classes.placeholderBackground}>{props.children}</div>
    </>
  )
}
export const _MaterialFormItemOutline = <Element extends ElementType = 'div'>({
  as,
  className,
  ...props
}: _MaterialFormItemOutlineProps<Element>) => {
  const _Element = as ?? 'div'
  return (
    <_Element {...props} className={clsx(classes.itemOutline, className)} />
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
      placeholder=" "
      className={clsx(classes.input, className)}
    />
  )
}
