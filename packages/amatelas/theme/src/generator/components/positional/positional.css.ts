import { prefixedBy } from '@src/helper'

export type PositionalPosition =
  | 'static'
  | 'relative'
  | 'fixed'
  | 'absolute'
  | 'sticky'

const _prefixed = prefixedBy('positional')
const positional = _prefixed()
const relative = _prefixed('relative')
const fixed = _prefixed('fixed')
const absolute = _prefixed('absolute')
const sticky = _prefixed('sticky')

const base = /* css */ `
.${positional}.${relative} {
  position: relative;
}
.${positional}.${fixed} {
  position: fixed;
}
.${positional}.${absolute} {
  position: absolute;
}
.${positional}.${sticky} {
  position: sticky;
}
`

export const positionalClasses = {
  positional,
  relative,
  fixed,
  absolute,
  sticky
}

export const positionalStyles = () => {
  const styles = [base]
  return styles
}
