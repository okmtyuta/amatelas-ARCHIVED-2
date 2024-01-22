import { prefixedBy } from '@src/helper'
import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'

export type PositionalPosition =
  | 'static'
  | 'relative'
  | 'fixed'
  | 'absolute'
  | 'sticky'

const _prefixed = prefixedBy('blog-card')
const blogCard = _prefixed()
const date = _prefixed('date')
const title = _prefixed('title')
const tags = _prefixed('tags')
const author = _prefixed('author')
const description = _prefixed('description')
const tag = _prefixed('tag')
const tagIcon = _prefixed('tag-icon')

const gray = new Hex(color.neutral).getHexString()

const base = /* css */ `
.${blogCard} {
  border: ${gray} solid 1px;
  padding: 24px 24px 18px 24px;
  display: grid;
  cursor: pointer;
  grid-template:
    'date' auto
    'title' auto
    'tags' auto
    'author' auto
    'description' auto/
    7fr;
}
.${blogCard}:not(:hover) {
  border: ${gray} solid 1px;
}
.${blogCard}:hover {
  opacity: 0.7;
}
.${blogCard} .${date} {
  grid-area: date;
  padding-bottom: 6px;
}
.${blogCard} .${title} {
  grid-area: title;
  font-size: var(--heading5-size);
  padding-top: 6px;
  padding-bottom: 12px;
  font-weight: bold;
}
.${blogCard} .${tags} {
  grid-area: tags;
  display: flex;
  margin: 3px 0;
  gap: 6px;
}
.${blogCard} .${author} {
  grid-area: author;
  color: ${gray};
  font-size: var(--caption-size);
  margin: 3px 0;
}
.${blogCard} .${description} {
  grid-area: description;
  line-height: 1.7;
  font-size: var(--caption-size);
}
.${blogCard} .${tag} {
  display: flex;
  align-items: center;
  gap: 4px;
  color: gray;
  font-size: var(--caption-size);
}
.${blogCard} .${tagIcon} {
  height: 12px;
  width: auto;
  display: flex;
  fill: gray;
}
`

export const blogCardClasses = {
  blogCard,
  date,
  title,
  tags,
  author,
  description,
  tag,
  tagIcon
}

export const blogCardStyles = () => {
  const styles = [base]
  return styles
}
