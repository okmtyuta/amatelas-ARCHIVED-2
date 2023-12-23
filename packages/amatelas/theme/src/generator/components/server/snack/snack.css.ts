import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'
import { snackPrefixed } from './snack-prefixed'

const base = /* css */ `
.${snackPrefixed()} {
  gap: 12px;
  width: 300px;
  display: grid;
  grid-template: 'icon label close'/ 1fr 7fr 1fr;
  color: white;
  fill: white;
  z-index: var(--layer-mid);
  border-radius: 4px;
  padding: 8px;
}
.${snackPrefixed()}:has(.${snackPrefixed('input')}:checked) {
  display: none;
}
.${snackPrefixed()} .${snackPrefixed('icon')} {
  flex-shrink: 0;
}
.${snackPrefixed()} .${snackPrefixed('close-icon')} {
  cursor: pointer;
  user-select: none;
  flex-shrink: 0;
}
.${snackPrefixed()} .${snackPrefixed('label')} {
  display: flex;
  gap: 12px;
  padding-bottom: 8px;
}
.${snackPrefixed()} .${snackPrefixed('label-content')} {
  font-weight: bold;
}
.${snackPrefixed()} .${snackPrefixed('input')} {
  display: none;
}
`
const colorVariations = () => {
  const _colorVariations: string[] = []

  for (const [_color, _code] of Object.entries(color)) {
    const hex = new Hex(_code)
    _colorVariations.push(/* css */ `
      .${snackPrefixed()}.${snackPrefixed(_color)} {
        background-color: ${hex.getHexString()};
      }
    `)
  }

  return _colorVariations
}

export const snackStyles = () => {
  const styles = [base, ...colorVariations()]
  return styles
}
