import { prefixedBy } from '@src/helper'

const _prefixed = prefixedBy('heading')

const heading = _prefixed()
const h1 = _prefixed('h1')
const h2 = _prefixed('h2')
const h3 = _prefixed('h3')
const h4 = _prefixed('h4')
const h5 = _prefixed('h5')
const h6 = _prefixed('h6')

const base = /* css */ `
.${heading} {
  --heading1-top-space: 64px;
  --heading1-bottom-space: 24px;
  --heading2-top-space: 64px;
  --heading2-bottom-space: 24px;
  --heading3-top-space: 40px;
  --heading3-bottom-space: 24px;
  --heading4-top-space: 40px;
  --heading4-bottom-space: 16px;
  --heading5-top-space: 40px;
  --heading5-bottom-space: 16px;
  --heading6-top-space: 24px;
  --heading6-bottom-space: 16px;
}
.${heading}.${h1} {
  margin-top: var(--heading1-top-space);
  margin-bottom: var(--heading1-bottom-space);
  font-size: var(--heading1-size);
  font-weight: var(--heading1-weight);
}
.${heading}.${h2} {
  margin-top: var(--heading2-top-space);
  margin-bottom: var(--heading2-bottom-space);
  font-size: var(--heading2-size);
  font-weight: var(--heading2-weight);
}
.${heading}.${h3} {
  margin-top: var(--heading3-top-space);
  margin-bottom: var(--heading3-bottom-space);
  font-size: var(--heading3-size);
  font-weight: var(--heading3-weight);
}
.${heading}.${h4} {
  margin-top: var(--heading4-top-space);
  margin-bottom: var(--heading4-bottom-space);
  font-size: var(--heading4-size);
  font-weight: var(--heading4-weight);
}
.${heading}.${h5} {
  margin-top: var(--heading5-top-space);
  margin-bottom: var(--heading5-bottom-space);
  font-size: var(--heading5-size);
  font-weight: var(--heading5-weight);
}
.${heading}.${h6} {
  margin-top: var(--heading6-top-space);
  margin-bottom: var(--heading6-bottom-space);
  font-size: var(--heading6-size);
  font-weight: var(--heading6-weight);
}
`

export const headingClasses = { heading, h1, h2, h3, h4, h5, h6 }

export const headingStyles = () => {
  const styles = [base]
  return styles
}
