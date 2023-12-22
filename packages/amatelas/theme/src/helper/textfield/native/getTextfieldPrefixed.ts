import {
  outlinedTextfieldPrefixed,
  filledTextfieldPrefixed,
  standardTextfieldPrefixed
} from '@src/prefixed'
import { TextfieldVariant } from '@src/types'

export const getTextfieldPrefixed = (
  variant?: TextfieldVariant
) => {
  if (variant === 'outlined') {
    return outlinedTextfieldPrefixed
  } else if (variant === 'filled') {
    return filledTextfieldPrefixed
  }
  return standardTextfieldPrefixed
}
