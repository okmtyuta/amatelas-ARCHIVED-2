import {
  outlinedMaterialPasswordTextfieldPrefixed,
  filledMaterialPasswordTextfieldPrefixed,
  standardMaterialPasswordTextfieldPrefixed
} from '@src/prefixed'
import { MaterialTextfieldVariant } from '@src/types'

export const getMaterialPasswordTextfieldPrefixed = (
  variant?: MaterialTextfieldVariant
) => {
  if (variant === 'outlined') {
    return outlinedMaterialPasswordTextfieldPrefixed
  } else if (variant === 'filled') {
    return filledMaterialPasswordTextfieldPrefixed
  }
  return standardMaterialPasswordTextfieldPrefixed
}
