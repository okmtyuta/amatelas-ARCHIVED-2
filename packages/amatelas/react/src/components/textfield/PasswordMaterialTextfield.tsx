import { ComponentProps } from 'react'
import { _PasswordTextfield } from './_PasswordTextfield'

type PasswordMaterialTextfieldProps = Omit<ComponentProps<typeof _PasswordTextfield>, 'material'>
export const PasswordMaterialTextfield = ({ ...props }: PasswordMaterialTextfieldProps) => {
  return <_PasswordTextfield {...props} material={true} />
}
