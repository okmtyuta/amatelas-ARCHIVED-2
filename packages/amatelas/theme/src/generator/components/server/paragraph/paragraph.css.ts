import { prefixedBy } from '@src/helper'

const _prefixed = prefixedBy('paragraph')

const paragraph = _prefixed()

const base = /* css */ `
.${paragraph} {
  line-height: 1.7;
  margin-top: 12px;
  margin-bottom: 12px;
}
`

export const paragraphClasses = { paragraph }

export const paragraphStyles = () => {
  const styles = [base]
  return styles
}
