import { checkboxPrefixed } from './checkbox-prefixed'
import { color } from '@src/theme/color/color'

const base = /* css */ `
.${checkboxPrefixed()} {
  display: inline-flex;
  gap: 6px;
  cursor: pointer;
}
.${checkboxPrefixed()} .${checkboxPrefixed('input')} {
  display: none;
}
.${checkboxPrefixed()} .${checkboxPrefixed('checked')} {
  fill: ${color.success};
}
.${checkboxPrefixed()} .${checkboxPrefixed('unchecked')} {
  fill: ${color.alert};
}
.${checkboxPrefixed()} .${checkboxPrefixed(
  'input'
)}:checked ~ .${checkboxPrefixed('unchecked')} {
  display: none;
}
.${checkboxPrefixed()} .${checkboxPrefixed(
  'input'
)}:not(:checked) ~ .${checkboxPrefixed('checked')} {
  display: none;
}
.${checkboxPrefixed()} .${checkboxPrefixed('marker')} {
  display: inline-block;
  height: 1lh;
}
`

export const checkboxStyles = () => {
  const styles = [base]
  return styles
}
