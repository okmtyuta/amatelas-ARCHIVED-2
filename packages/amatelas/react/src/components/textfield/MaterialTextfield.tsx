import { ComponentProps } from 'react'
import { _Textfield } from './_Textfield'

type MaterialTextfieldProps = Omit<ComponentProps<typeof _Textfield>, 'material'>
export const MaterialTextfield = ({ ...props }: MaterialTextfieldProps) => {
  return <_Textfield {...props} system="material" />
}
