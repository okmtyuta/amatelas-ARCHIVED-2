import { accordionPrefixed } from './accordion-prefixed'

const base = /* css */ `
.${accordionPrefixed()} {
  border-bottom: black solid 1px;
  padding: 8px 0;
}
.${accordionPrefixed()}[open] .${accordionPrefixed('expand-more-svg')} {
  transform: rotate(180deg);
}
.${accordionPrefixed()} .${accordionPrefixed('summary')} {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.${accordionPrefixed()} .${accordionPrefixed(
  'summary'
)}::-webkit-details-marker {
  display: none;
}
`

export const accordionStyles = () => {
  const styles = [base]
  return styles
}
