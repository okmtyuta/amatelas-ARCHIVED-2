import { prefixedBy } from '@src/helper'
import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'

const _prefixed = prefixedBy('blog-title')
const blogTitle = _prefixed()
const title = _prefixed('title')
const author = _prefixed('author')

const gray = new Hex(color.neutral).getHexString()

const base = /* css */ `
.${blogTitle} .${title} {
  padding-top: 6px;
  padding-bottom: 12px;
  font-size: var(--heading1-size);
  font-weight: var(--heading1-weight);
}
.${blogTitle} .${author} {
  color: ${gray};
  font-size: var(--caption-size);
}
`

export const blogTitleClasses = {
  blogTitle,
  title,
  author
}

export const blogTitleStyles = () => {
  const styles = [base]
  return styles
}
