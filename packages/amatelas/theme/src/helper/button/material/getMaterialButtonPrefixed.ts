import { MaterialButtonVariant } from '../../../types'
import {
  outlinedMaterialButtonPrefixed,
  filledMaterialButtonPrefixed,
  standardMaterialButtonPrefixed
} from '../../../prefixed'

export const getMaterialButtonPrefixed = (variant?: MaterialButtonVariant) => {
  if (variant === 'outlined') {
    return outlinedMaterialButtonPrefixed
  } else if (variant === 'filled') {
    return filledMaterialButtonPrefixed
  }
  return standardMaterialButtonPrefixed
}
