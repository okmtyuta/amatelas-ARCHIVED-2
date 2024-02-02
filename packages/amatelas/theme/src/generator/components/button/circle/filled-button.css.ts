import { prefixedBy } from '@src/helper'
import { strictEntries } from '@src/lib/strict-entries'
import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'
import { Color } from '@src/types'

const _prefixed = prefixedBy('filled-circle-button')
const filledCircleButton = _prefixed()

const base = /* css */ `
.${filledCircleButton} {
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
.${filledCircleButton}:disabled {
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

export const filledCircleButtonColorClass = (color: Color) => {
  return _prefixed(`color-${color}`)
}

const colorVariations = () => {
  const _colorVariations = []

  for (const [_color, _code] of strictEntries(color)) {
    const hex = new Hex(_code)
    _colorVariations.push(/* css */ `
      .${filledCircleButton}:not(:disabled).${filledCircleButtonColorClass(_color)} {
        border: none;
        color: white;
        background-color: ${hex.getHexString()};
        border: solid 1px ${hex.getHexString()};
    
        &:hover {
          background-color: ${hex.getLighten(0.1).getHexString()};
        }
      }
    `)
  }

  return _colorVariations
}

export const filledCircleButtonClasses = {
  filledCircleButton
}

export const filledCircleButtonStyles = () => {
  const styles = [base, ...colorVariations()]
  return styles
}
