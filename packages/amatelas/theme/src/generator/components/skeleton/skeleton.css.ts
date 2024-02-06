import { prefixedBy } from '@src/helper'

const _prefixed = prefixedBy('skeleton')
const skeleton = _prefixed()
const inline = _prefixed('inline')
const content = _prefixed('content')
const hidden = _prefixed('hidden')
const animation = _prefixed('animation')

const base = /* css */ `
.${skeleton}.${hidden} .${content} {
  opacity: 0;
}

.${skeleton}.${inline} {
  display: inline-flex;
}

@keyframes ${animation} {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.${skeleton}.${hidden} {
  position: relative;
  background-color: #eee;
}
.${skeleton}.${hidden}::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  content: '';
  display: block;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0)
  );
  animation: ${animation} 1.2s linear infinite;
}
`

export const skeletonClasses = {
  skeleton,
  inline,
  content,
  hidden,
  animation
}

export const skeletonStyles = () => {
  const styles = [base]
  return styles
}
