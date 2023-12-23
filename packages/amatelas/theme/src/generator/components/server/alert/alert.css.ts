import { alertPrefixed } from './alert-prefixed'
import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'

const base = /* css */ `
.${alertPrefixed()} {
  padding: 16px;
  color: white;
  fill: white;
}
.${alertPrefixed()}:has(.${alertPrefixed('input')}:checked) {
  display: none;
}
.${alertPrefixed()} .${alertPrefixed('close')} {
  flex-shrink: 0;
}
.${alertPrefixed()} .${alertPrefixed('close-svg')} {
  cursor: pointer;
  user-select: none;
}
.${alertPrefixed()} .${alertPrefixed('label-svg')} {
  flex-shrink: 0;
}
.${alertPrefixed()} .${alertPrefixed('summary')} {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
}
.${alertPrefixed()} .${alertPrefixed('summary-text')} {
  font-weight: bold;
  display: inline-flex;
  align-items: center;
}
.${alertPrefixed()} .${alertPrefixed('close-label')} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transform: translate(4px, -4px);
  cursor: pointer;
}
.${alertPrefixed()} .${alertPrefixed('input')} {
  display: none;
}
.${alertPrefixed()} .${alertPrefixed('alert-head')} {
  display: flex;
  justify-content: space-between;
}
`

const colorVariations = () => {
  const _colorVariations: string[] = []

  for (const [_color, _code] of Object.entries(color)) {
    const hex = new Hex(_code)
    _colorVariations.push(/* css */ `
    .${alertPrefixed()}.${alertPrefixed(_color)} {
      background-color: ${hex.getHexString()};
      .${alertPrefixed('close-label')}:hover {
        border-radius: 50%;
        background-color: ${hex.getDarken(0.05).getHexString()};
      }
    }
    `)
  }

  return _colorVariations
}

export const alertStyles = () => {
  const styles = [base, ...colorVariations()]
  return styles
}
