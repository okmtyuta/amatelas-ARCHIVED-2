import { ComponentProps } from 'react'

type DefaultDivProps = ComponentProps<'div'>
type DefaultSelectProps = ComponentProps<'select'>
type DefaultOptionProps = ComponentProps<'option'>
type DefaultInputProps = ComponentProps<'input'>

type _CommonOptionProps = {
  _type: 'material' | 'native'
}
interface _OptionOptionProps extends _CommonOptionProps, DefaultOptionProps {
  _type: 'native'
  children: string
}
interface _DivOptionProps extends _CommonOptionProps, DefaultDivProps {
  _type: 'material'
  children: string
}
export type _OptionProps = _OptionOptionProps | _DivOptionProps

type _CommonSelectProps = {
  as?: 'select' | 'div' | 'input'
  material?: boolean
  placeholder?: string
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

export type _SelectProps =
  | _SelectSelectProps
  | _DivSelectProps
  | _InputSelectProps
