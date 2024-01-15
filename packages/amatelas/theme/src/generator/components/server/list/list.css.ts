import { prefixedBy } from '@src/helper'

const _prefixed = prefixedBy('list')
const list = _prefixed()

const base = /* css */ `
.${list} {
  text-align: -webkit-match-parent;
  display: flex;
  flex-direction: column;
}
`

export const listClasses = {
  list
}

export const listStyles = () => {
  const styles = [base]
  return styles
}
