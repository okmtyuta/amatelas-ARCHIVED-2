import { filledButtonPrefixed } from './button-prefixed'
import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'

const base = /* css */ `
.${filledButtonPrefixed()} {
  outline: none;
  position: relative;
  overflow: hidden;
  padding: 12px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  cursor: pointer;
}
.${filledButtonPrefixed()}:disabled {
  color: ${new Hex(color.neutral).getDarken(0.95).getHexString()};
  background-color: ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  border: solid 1px ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  cursor: not-allowed;
}
`
const sizeVariations = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 'auto']
  const _sizeVariations: string[] = []

  for (const size of sizes) {
    _sizeVariations.push(/* css */ `
    .${filledButtonPrefixed(size)} {
      width: var(--AMUI-button-size-${size})
    }
    `)
  }
  return _sizeVariations
}
const colorVariations = () => {
  const _colorVariations = []

  for (const [_color, _code] of Object.entries(color)) {
    const hex = new Hex(_code)
    _colorVariations.push(/* css */ `
      .${filledButtonPrefixed()}:not(:disabled).${filledButtonPrefixed(
      _color
    )} {
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

export const filledButtonStyles = () => {
  const styles = [base, ...colorVariations(), ...sizeVariations()]
  return styles
}
