import { ComponentProps, useState } from 'react'
import { _Textfield } from './_Textfield'

type _PasswordTextfieldProps = {
  visible?: boolean
} & Omit<ComponentProps<typeof _Textfield>, '_hideable'>

export const _PasswordTextfield = ({
  visible,
  ...props
}: _PasswordTextfieldProps) => {
  const [_visible, _setVisible] = useState<boolean>(!!visible)
  const _type = _visible ? 'text' : 'password'
  const onClickVisibility = () => {
    _setVisible((current) => !current)
  }

  const _hideable = {
    onClickVisible: onClickVisibility,
    onClickInvisible: onClickVisibility,
    visible: _visible
  }
  return <_Textfield {...props} type={_type} _hideable={_hideable} />
}
