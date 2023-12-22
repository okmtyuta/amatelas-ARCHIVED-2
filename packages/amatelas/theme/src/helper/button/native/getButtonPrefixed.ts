import { ButtonVariant } from '../../../types'
import {
  outlinedButtonPrefixed,
  filledButtonPrefixed,
  standardButtonPrefixed
} from '../../../prefixed'

export const getButtonPrefixed = (variant?: ButtonVariant) => {
  if (variant === 'outlined') {
    return outlinedButtonPrefixed
  } else if (variant === 'filled') {
    return filledButtonPrefixed
  }
  return standardButtonPrefixed
}
