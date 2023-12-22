import { blockquotePrefixed } from './blockquote-prefixed'
import { color } from '@src/theme/color/color'
import { Hex } from '@src/theme/color/classes/Hex'

const base = /* css */ `
.${blockquotePrefixed()} {
  border-left: ${new Hex(color.neutral)
    .getLighten(0.6)
    .getHexString()} solid 3px;
  padding-left: 18px;
  padding-bottom: 6px;
  padding-top: 6px;
  margin-bottom: 10px;
  margin-top: 10px;
}
`

export const blockquoteStyles = () => {
  const styles = [base]
  return styles
}
