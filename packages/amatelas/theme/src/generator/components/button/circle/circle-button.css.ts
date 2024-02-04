import { prefixedBy } from '@src/helper'
import { strictEntries } from '@src/lib/strict-entries'
import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'
import { Color } from '@src/types'

const _prefixed = prefixedBy('circle-button')
const circleButton = _prefixed()
const standard = _prefixed('standard')
const outlined = _prefixed('outlined')
const filled = _prefixed('filled')
const actionSVG = _prefixed()

const base = /* css */ `
.${circleButton} {
  outline: none;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  cursor: pointer;
  width: 32px;  
  height: 32px;
  border-radius: 50%;
}
.${circleButton}:disabled {
  color: ${new Hex(color.neutral).getDarken(0.95).getHexString()};
  background-color: ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  border: solid 1px ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  cursor: not-allowed;
}
`
// const sizeVariations = () => {
//   const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 'auto']
//   const _sizeVariations: string[] = []

//   for (const size of sizes) {
//     _sizeVariations.push(/* css */ `
//     .${filledButtonPrefixed(size)} {
//       width: var(--AMUI-button-size-${size})
//     }
//     `)
//   }
//   return _sizeVariations
// }

export const circleButtonColorClass = (color: Color) => {
  return _prefixed(`color-${color}`)
}

const colorVariations = () => {
  const _colorVariations = []

  for (const [_color, _code] of strictEntries(color)) {
    const hex = new Hex(_code)
    _colorVariations.push(/* css */ `
      .${circleButton}.${filled}.${circleButtonColorClass(_color)}:not(:disabled) {
        border: none;
        color: white;
        background-color: ${hex.getHexString()};
        border: solid 1px ${hex.getHexString()};
      }
      .${circleButton}.${filled}.${circleButtonColorClass(_color)}:not(:disabled):hover {
        background-color: ${hex.getLighten(0.1).getHexString()};
        border: solid 1px ${hex.getLighten(0.1).getHexString()};
      }
      .${circleButton}.${filled}.${circleButtonColorClass(_color)}:not(:disabled) .${actionSVG} {
        fill: white;
      }

      .${circleButton}.${outlined}.${circleButtonColorClass(_color)}:not(:disabled) {
        color: ${hex.getHexString()};
        border: ${hex.getHexString()} solid 1px;
        background-color: inherit;
      }
      .${circleButton}.${outlined}.${circleButtonColorClass(_color)}:not(:disabled):hover {
        background-color: ${hex.getLighten(0.95).getHexString()};
      }
      .${circleButton}.${outlined}.${circleButtonColorClass(_color)}:not(:disabled) .${actionSVG} {
        fill: ${hex.getHexString()};
      }

      .${circleButton}.${standard}.${circleButtonColorClass(_color)}:not(:disabled) {
        border: none;
        color: ${hex.getHexString()};
        background-color: transparent;
        border: solid 1px transparent;
      }
      .${circleButton}.${standard}.${circleButtonColorClass(_color)}:not(:disabled):hover {
        background-color: ${hex.getLighten(0.95).getHexString()};
        border: solid 1px ${hex.getLighten(0.95).getHexString()};
      }
      .${circleButton}.${standard}.${circleButtonColorClass(_color)}:not(:disabled) .${actionSVG} {
        fill: ${hex.getHexString()}
      }
    `)
  }

  return _colorVariations
}

export const circleButtonClasses = {
  circleButton,
  standard,
  outlined,
  filled,
  actionSVG
}

export const circleButtonStyles = () => {
  const styles = [base, ...colorVariations()]
  return styles
}
