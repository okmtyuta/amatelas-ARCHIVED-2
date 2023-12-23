import { listItemPrefixed } from './list-item-prefixed'

const base = /* css */ `
.${listItemPrefixed()} {
  text-align: -webkit-match-parent;
  display: flex;
  align-items: flex-start;
  gap: 6px;
  line-height: 1.7;
}
.${listItemPrefixed()} .${listItemPrefixed('marker')} {
  display: inline-flex;
  width: 24px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 1lh;
}
.${listItemPrefixed()} .${listItemPrefixed('disc')} {
  height: calc(1lh * 0.3);
  fill: var(--color-accents3);
}
.${listItemPrefixed()} .${listItemPrefixed('dangerous')} {
  height: calc(1lh * 0.8);
  fill: var(--color-danger);
}
.${listItemPrefixed()} .${listItemPrefixed('done')} {
  height: calc(1lh * 0.8);
  fill: var(--color-success);
}
`

export const listItemStyles = () => {
  const styles = [base]
  return styles
}
