import { prefixedBy } from '@src/helper'

const _prefixed = prefixedBy('list-item')

const listItem = _prefixed()
const marker = _prefixed('marker')
const disc = _prefixed('disc')
const dangerous = _prefixed('dangerous')
const done = _prefixed('done')

const base = /* css */ `
.${listItem} {
  text-align: -webkit-match-parent;
  display: flex;
  align-items: flex-start;
  gap: 6px;
  line-height: 1.7;
}
.${listItem} .${marker} {
  display: inline-flex;
  width: 24px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 1lh;
}
.${listItem} .${disc} {
  height: calc(1lh * 0.3);
  fill: var(--color-accents3);
}
.${listItem} .${dangerous} {
  height: calc(1lh * 0.8);
  fill: var(--color-danger);
}
.${listItem} .${done} {
  height: calc(1lh * 0.8);
  fill: var(--color-success);
}
`

export const listItemClasses = {
  listItem,
  marker,
  disc,
  dangerous,
  done
}

export const listItemStyles = () => {
  const styles = [base]
  return styles
}
