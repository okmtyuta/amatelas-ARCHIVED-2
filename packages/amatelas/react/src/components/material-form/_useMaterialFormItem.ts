import { useState } from 'react'

export const _useMaterialFormItem = () => {
  const [focus, setFocus] = useState<boolean>(false)
  const [blur, setBlur] = useState<boolean>(false)

  return {
    focus,
    setFocus,
    blur,
    setBlur
  }
}
