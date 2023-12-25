import { ComponentProps } from 'react'
import { _Textfield } from './_Textfield'

type TextfieldProps = Omit<ComponentProps<typeof _Textfield>, 'material'>
export const Textfield = ({ ...props }: TextfieldProps) => {
  return <_Textfield {...props} material={false} />
}
