import { _useMaterialFormItem } from '@src/components/material-form/_useMaterialFormItem'
import { Dispatch, SetStateAction, createContext, useState } from 'react'

type SelectContext = {
  setSelected?: Dispatch<SetStateAction<string | undefined | null>>
  selected?: string | null
  setFocus?: Dispatch<SetStateAction<boolean>>
  focus?: boolean
  setBlur?: Dispatch<SetStateAction<boolean>>
  blur?: boolean
  setQuery?: Dispatch<SetStateAction<string | undefined | null>>
  query?: string | null
  setFocusedOptionKey?: Dispatch<SetStateAction<string | null | undefined>>
  focusedOptionKey?: string | null | undefined
  as?: 'select' | 'input' | 'div'
}

export const SelectProvider = createContext<SelectContext>({})

export const useSelect = () => {
  const { focus, setFocus, blur, setBlur } = _useMaterialFormItem()

  const [selected, setSelected] = useState<string | undefined | null>()
  const [query, setQuery] = useState<string | undefined | null>()
  const [focusedOptionKey, setFocusedOptionKey] = useState<
    string | undefined | null
  >()
  return {
    SelectProvider,
    selected,
    focus,
    blur,
    query,
    focusedOptionKey,
    setSelected,
    setFocus,
    setBlur,
    setQuery,
    setFocusedOptionKey
  }
}
