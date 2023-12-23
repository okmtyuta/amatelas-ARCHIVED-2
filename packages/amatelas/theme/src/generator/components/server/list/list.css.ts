import { listPrefixed } from './list-prefixed'

const base = /* css */ `
.${listPrefixed()} {
  text-align: -webkit-match-parent;
  display: flex;
  flex-direction: column;
}
`

export const listStyles = () => {
  const styles = [base]
  return styles
}
