import { paragraphPrefixed } from './paragraph-prefixed'

const prefixed = paragraphPrefixed

const _paragraph = prefixed()

const base = /* css */ `
.${_paragraph} {
  line-height: 1.7;
  margin-top: 12px;
  margin-bottom: 12px;
}
`

export const paragraphStyles = () => {
  const styles = [base]
  return styles
}
