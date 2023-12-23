import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'
import { outlinedMaterialChipPrefixed } from './material-chip-prefixed'

const base = /* css */ `
.${outlinedMaterialChipPrefixed()} {
  max-width: 100%;
  font-size: 0.8125rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 32px;

  border-radius: 16px;
  white-space: nowrap;
  outline: 0px;
  text-decoration: none;
  padding: 0px;
  vertical-align: middle;
  box-sizing: border-box;
}
.${outlinedMaterialChipPrefixed()} .${outlinedMaterialChipPrefixed('text')} {
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 12px;
  padding-right: 12px;
  white-space: nowrap;
}
`
const colorVariations = () => {
  const _colorVariations: string[] = []

  for (const [_color, _code] of Object.entries(color)) {
    const hex = new Hex(_code)
    _colorVariations.push(/* css */ `
    .${outlinedMaterialChipPrefixed()}.${outlinedMaterialChipPrefixed(_color)} {
        border: 1px solid ${hex.getHexString()};
        color: ${hex.getHexString()};
        background-color: transparent;
    
        &:hover {
          background-color: ${hex.getLighten(0.95).getHexString()};
        }
      }
    `)
  }

  return _colorVariations
}

export const outlinedMaterialChipStyles = () => {
  const styles = [base, ...colorVariations()]
  return styles
}
