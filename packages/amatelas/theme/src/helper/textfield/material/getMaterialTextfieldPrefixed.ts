import {
  outlinedMaterialTextfieldPrefixed,
  filledMaterialTextfieldPrefixed,
  standardMaterialTextfieldPrefixed
} from '@src/prefixed'
import { MaterialTextfieldVariant } from '@src/types'

export const getMaterialTextfieldPrefixed = (
  variant?: MaterialTextfieldVariant
) => {
  if (variant === 'outlined') {
    return outlinedMaterialTextfieldPrefixed
  } else if (variant === 'filled') {
    return filledMaterialTextfieldPrefixed
  }
  return standardMaterialTextfieldPrefixed
}
