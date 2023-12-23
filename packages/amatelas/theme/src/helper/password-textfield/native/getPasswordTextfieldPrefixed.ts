import {
  outlinedPasswordTextfieldPrefixed,
  filledPasswordTextfieldPrefixed,
  standardPasswordTextfieldPrefixed
} from '@src/prefixed'
import { TextfieldVariant } from '@src/types'

export const getPasswordTextfieldPrefixed = (
  variant?: TextfieldVariant
) => {
  if (variant === 'outlined') {
    return outlinedPasswordTextfieldPrefixed
  } else if (variant === 'filled') {
    return filledPasswordTextfieldPrefixed
  }
  return standardPasswordTextfieldPrefixed
}
