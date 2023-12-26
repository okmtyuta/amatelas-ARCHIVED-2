import { createContext, useState } from 'react'

type SelectContext = {
  setSelected?: React.Dispatch<React.SetStateAction<string | undefined | null>>
  setFocus?: React.Dispatch<React.SetStateAction<boolean>>
  setBlur?: React.Dispatch<React.SetStateAction<boolean>>
}

export const SelectProvider = createContext<SelectContext>({})

export const useSelect = () => {
  const [selected, setSelected] = useState<string | undefined | null>()
  const [focus, setFocus] = useState<boolean>(false)
  const [blur, setBlur] = useState<boolean>(false)
  return {
    SelectProvider,
    selected,
    setSelected,
    focus,
    setFocus,
    blur,
    setBlur
  }
}
