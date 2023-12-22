import { MaterialChipVariant } from '@src/types'
import {
  filledMaterialChipPrefixed,
  outlinedMaterialChipPrefixed
} from '../../../prefixed'

export const getMaterialChipPrefixed = (variant?: MaterialChipVariant) => {
  if (variant === 'filled') {
    return filledMaterialChipPrefixed
  }
  return outlinedMaterialChipPrefixed
}
