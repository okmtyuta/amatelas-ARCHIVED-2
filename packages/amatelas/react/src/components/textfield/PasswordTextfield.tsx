import { ComponentProps } from 'react'
import { _PasswordTextfield } from './_PasswordTextfield'

type PasswordTextfieldProps = Omit<ComponentProps<typeof _PasswordTextfield>, 'material'>
export const PasswordTextfield = ({ ...props }: PasswordTextfieldProps) => {
  return <_PasswordTextfield {...props} material={false} />
}
