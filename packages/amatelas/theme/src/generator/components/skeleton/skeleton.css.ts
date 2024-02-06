import { prefixedBy } from '@src/helper'

const _prefixed = prefixedBy('skeleton')
const skeleton = _prefixed()
const skeletonAnimation = _prefixed('skeleton-animation')
const text = _prefixed('text')
const circle = _prefixed('circle')
const rectangle = _prefixed('rectangle')
const rounded = _prefixed('rounded')

const base = /* css */ `
@keyframes ${skeletonAnimation} {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

.${skeleton} {
  background-color: rgba(0, 0, 0, 0.11);
  animation: ${skeletonAnimation} 2s ease-in-out 0.5s infinite;
}
.${skeleton}.${text} {
  height: 14px;
  margin: 4px 0;
  border-radius: 2px;
}
.${skeleton}.${circle} {
  width: 32px;
  height: 32px;
  border-radius: 16px;
}
.${skeleton}.${rounded} {
  border-radius: 4px;
}
.${skeleton}.${rectangle} {
  border-radius: 0;
}
`

export const skeletonClasses = { skeleton, text, circle, rectangle, rounded }

export const skeletonStyles = () => {
  const styles = [base]
  return styles
}
