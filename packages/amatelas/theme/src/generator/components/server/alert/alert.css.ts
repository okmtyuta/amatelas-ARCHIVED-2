import { prefixedBy } from '@src/helper'
import { strictEntries } from '@src/lib/strict-entries'
import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'
import { Color } from '@src/types'

const _prefixed = prefixedBy('AMUI-components_alert_')

const alert = _prefixed()
const input = _prefixed('input')
const close = _prefixed('close')
const closeSVG = _prefixed('close-svg')
const labelSVG = _prefixed('label-svg')
const summary = _prefixed('summary')
const summaryText = _prefixed('summary-text')
const closeLabel = _prefixed('close-label')
const alertHead = _prefixed('alert-head')

const base = /* css */ `
.${alert} {
  padding: 16px;
  color: white;
  fill: white;
}
.${alert}:has(.${input}:checked) {
  display: none;
}
.${alert} .${close} {
  flex-shrink: 0;
}
.${alert} .${closeSVG} {
  cursor: pointer;
  user-select: none;
}
.${alert} .${labelSVG} {
  flex-shrink: 0;
}
.${alert} .${summary} {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
}
.${alert} .${summaryText} {
  font-weight: bold;
  display: inline-flex;
  align-items: center;
}
.${alert} .${closeLabel} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transform: translate(4px, -4px);
  cursor: pointer;
}
.${alert} .${input} {
  display: none;
}
.${alert} .${alertHead} {
  display: flex;
  justify-content: space-between;
}
`

export const alertColorClass = (color: Color) => {
  return _prefixed(`color-${color}`)
}

const colorVariations = () => {
  const _colorVariations: string[] = []

  for (const [_color, _code] of strictEntries(color)) {
    const hex = new Hex(_code)
    _colorVariations.push(/* css */ `
    .${alert}.${alertColorClass(_color)} {
      background-color: ${hex.getHexString()};
      .${closeLabel}:hover {
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

export const alertClasses = {
  alert,
  input,
  close,
  closeSVG,
  labelSVG,
  summary,
  summaryText,
  closeLabel,
  alertHead
}
