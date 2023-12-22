import { color } from '@src/theme/color/color'
import { ripplePrefixed } from './ripple-prefixed'
import { Hex } from '@src/theme/color/classes/Hex'

const base = /* css */ `
@keyframes ${ripplePrefixed('keyframes')} {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.${ripplePrefixed()} {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: red;

  animation: ${ripplePrefixed('keyframes')} 1s forwards;
}
`

const colorVariations = () => {
  const _colorVariations: string[] = []

  for (const [_color, _code] of Object.entries(color)) {
    const hex = new Hex(_code)
    _colorVariations.push(/* css */ `
      .${ripplePrefixed(_color)} {
        background-color: ${hex.getDarken(0.12).getHexString()};;
      }
    `)
  }

  return _colorVariations
}

export const rippleStyles = () => {
  const styles = [base, ...colorVariations()]
  return styles
}
