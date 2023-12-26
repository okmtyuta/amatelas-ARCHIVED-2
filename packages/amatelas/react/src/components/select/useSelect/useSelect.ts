import { createContext, useState } from 'react'

type SelectContext = {
  setSelected?: React.Dispatch<React.SetStateAction<string | undefined | null>>
  selected?: string | null
  setFocus?: React.Dispatch<React.SetStateAction<boolean>>
  focus?: boolean
  setBlur?: React.Dispatch<React.SetStateAction<boolean>>
  blur?: boolean
  setQuery?: React.Dispatch<React.SetStateAction<string | undefined | null>>
  query?: string | null
  as?: "select" | "input" | "div"
}

export const SelectProvider = createContext<SelectContext>({})

export const useSelect = () => {
  const [selected, setSelected] = useState<string | undefined | null>()
  const [focus, setFocus] = useState<boolean>(false)
  const [blur, setBlur] = useState<boolean>(false)
  const [query, setQuery] = useState<string | undefined | null>()
  return {
    SelectProvider,
    selected,
    setSelected,
    focus,
    setFocus,
    blur,
    setBlur,
    query,
    setQuery
  }
}
