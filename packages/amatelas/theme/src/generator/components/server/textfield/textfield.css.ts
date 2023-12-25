import { prefixedBy } from '@src/helper'
import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'
import { Color } from '@src/types'

const _prefixed = prefixedBy('basic_textfield')

const textfield = _prefixed()
const addon = _prefixed('addon')
const material = _prefixed('material')
const input = _prefixed('input')
const inputArea = _prefixed('input-area')
const placeholder = _prefixed('placeholder')
const insidePlaceholder = _prefixed('inside-placeholder')
const outsidePlaceholder = _prefixed('outside-placeholder')
const insidePlaceholderBackground = _prefixed('inside-placeholder-background')
const inputOutline = _prefixed('input-outline')
const prefix = _prefixed('prefix')
const suffix = _prefixed('suffix')
const prefixed = _prefixed('prefixed')
const suffixed = _prefixed('suffixed')
const prefixText = _prefixed('prefix-text')
const suffixText = _prefixed('suffix-text')
const validate = _prefixed('validate')
const visibility = _prefixed('visibility')

const filled = _prefixed('filled')
const outlined = _prefixed('outlined')
const standard = _prefixed('standard')

const fillBackgroundColor = new Hex(color.neutral)
  .getLighten(0.84)
  .getHexString()
const blurColor = new Hex(color.neutral).getDarken(0.2).getHexString()

const base = /* css */ `
.${addon} {
  display: flex;
  align-items: center;
}
.${textfield}.${material} .${addon} {
  height: 58px;
}
.${textfield}:not(.${material}) .${addon} {
  height: 48px;
}


.${textfield} .${inputArea} {
  width: 100%;
  position: relative;
  background-color: white;
}
.${textfield}:not(.${material}) .${inputArea} {
  height: 100%;
}
.${textfield}.${material} .${inputArea} {
  height: 100%;
}
.${textfield}.${filled} .${inputArea} {
  background-color: ${fillBackgroundColor};
}
.${textfield} .${placeholder} {
  color: ${blurColor};
  transition: all 0.3s;
}

.${textfield}.${material} .${outsidePlaceholder} {
  display: none;
}
.${textfield}:not(.${material}) .${outsidePlaceholder} {
  display: inline-block;
  margin: 6px 0;
}
.${textfield}:not(.${material}) .${insidePlaceholder} {
  display: none;
}
.${textfield}:not(.${material}) .${insidePlaceholderBackground},
.${textfield}.${material}:not(.${outlined}) .${insidePlaceholderBackground} {
  display: none;
}
.${textfield}.${material} .${insidePlaceholder} {
  pointer-events: none;
}
.${textfield}.${material} .${insidePlaceholderBackground} {
  position: absolute;
  padding: 0 2px;
  top: -3px;
  left: 8px;
  transform-origin: 0;
  transform: scale(0.8);
  transition: all 0.3s;
  color: transparent;
  z-index: 200;
}
.${textfield}.${material}:has(.${input}:focus) .${insidePlaceholderBackground},
.${textfield}.${material}:has(.${input}:not(:placeholder-shown))
  .${insidePlaceholderBackground} {
  background-color: white;
}
.${textfield}.${material}:has(.${input}:not(:focus)) .${insidePlaceholder},
.${textfield}.${material}:has(.${input}:placeholder-shown) .${insidePlaceholder} {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  transform-origin: 0;
  transition: all 0.3s;
  z-index: 300;
}
.${textfield}.${material}:has(.${input}:focus) .${insidePlaceholder},
.${textfield}.${material}:has(.${input}:not(:placeholder-shown)) .${insidePlaceholder} {
  position: absolute;
  left: 10px;
  transform-origin: 0;
  transform: scale(0.8);
  transition: all 0.3s;
  z-index: 300;
}
.${textfield}.${material}.${filled}:has(.${input}:focus) .${insidePlaceholder},
.${textfield}.${material}.${filled}:has(.${input}:not(:placeholder-shown))
  .${insidePlaceholder},
.${textfield}.${material}.${standard}:has(.${input}:focus) .${insidePlaceholder},
.${textfield}.${material}.${standard}:has(.${input}:not(:placeholder-shown))
  .${insidePlaceholder} {
  top: 0;
}
.${textfield}.${material}.${outlined}:has(.${input}:focus) .${insidePlaceholder},
.${textfield}.${material}.${outlined}:has(.${input}:not(:placeholder-shown))
  .${insidePlaceholder} {
  top: -12px;
}

.${textfield} .${input} {
  height: 100%;
  width: 100%;
  padding-left: 10px;
}
.${textfield}:not(:has(.${visibility})) .${input} {
  padding-right: 10px;
}
.${textfield}:has(.${visibility}) .${input} {
  padding-right: 36px;
}
.${textfield}.${material} .${input} {
  position: relative;
  z-index: 400;
}
.${textfield}.${material}:has(.${placeholder}).${filled} .${input},
.${textfield}.${material}:has(.${placeholder}).${standard} .${input} {
  padding-top: 18px;
}

.${textfield} .${inputOutline} {
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  pointer-events: none;
  z-index: 100;
}
.${textfield}.${outlined} .${inputOutline} {
  border: solid ${blurColor} 1px;
  transition: all 0.3s;
}

.${textfield}.${filled} .${inputOutline},
.${textfield}.${standard} .${inputOutline} {
  border-bottom: solid ${blurColor} 1px;
  transition: all 0.3s;
}


.${textfield} .${prefix},
.${textfield} .${suffix} {
  display: flex;
  align-items: center;
  height: 100%;
}
.${textfield} .${prefix} {
  padding: 0 8px;
}
.${textfield} .${suffix} {
  padding: 0 8px;
}
.${textfield}.${outlined} .${prefix} {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.${textfield}.${outlined} .${suffix} {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.${textfield}.${outlined} .${prefix},
.${textfield}.${outlined} .${suffix} {
  background-color: ${fillBackgroundColor};
}
.${textfield}.${standard} .${prefix},
.${textfield}.${standard} .${suffix} {
  border-bottom: solid ${blurColor} 1px;
  transition: all 0.3s;
}

.${textfield}.${standard} .${prefixText},
.${textfield}.${standard} .${suffixText},
.${textfield}.${filled} .${prefixText},
.${textfield}.${filled} .${suffixText} {
  color: ${blurColor};
  transition: all 0.3s;
}
.${textfield}.${outlined} .${prefixText},
.${textfield}.${outlined} .${suffixText} {
  color: black;
  transition: all 0.3s;
}


.${textfield}.${outlined}:not(:has(.${input}.${prefixed})) .${inputOutline} {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.${textfield}.${outlined}:not(:has(.${input}.${suffixed})) .${inputOutline} {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.${visibility} {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  z-index: 500;
  width: 36px;
  height: 100%;
  cursor: pointer;
}
`

const focusColorVariations = () => {
  const variations = []

  for (const [name, code] of Object.entries(color)) {
    const focusColor = _prefixed(`focus-color-${name}`)
    const variation = /* css */ `
      .${textfield}.${focusColor}:not(.${validate}):has(.${input}:focus) .${placeholder},
      .${textfield}.${focusColor}.${validate}:has(.${input}:not(:user-invalid):focus) .${placeholder} {
        color: ${code};
      }
      .${textfield}.${focusColor}.${outlined}:not(.${validate}):has(.${input}:focus) .${inputOutline},
      .${textfield}.${focusColor}.${outlined}.${validate}:has(.${input}:not(:user-invalid):focus)
        .${inputOutline} {
        border: solid ${code} 1px;
        transition: all 0.3s;
      }
      .${textfield}.${focusColor}.${filled}:not(.${validate}):has(.${input}:focus) .${inputOutline},
      .${textfield}.${focusColor}.${standard}:not(.${validate}):has(.${input}:focus) .${inputOutline},
      .${textfield}.${focusColor}.${filled}.${validate}:has(.${input}:not(:user-invalid):focus) .${inputOutline},
      .${textfield}.${focusColor}.${standard}.${validate}:has(.${input}:not(:user-invalid):focus)
        .${inputOutline} {
        border-bottom: solid ${code} 1px;
        transition: all 0.3s;
      }
      .${textfield}.${focusColor}.${standard}:not(.${validate}):has(.${input}:focus) .${prefix},
      .${textfield}.${focusColor}.${standard}:not(.${validate}):has(.${input}:focus) .${suffix},
      .${textfield}.${focusColor}.${standard}.${validate}:has(.${input}:not(:user-invalid):focus) .${prefix},
      .${textfield}.${focusColor}.${standard}.${validate}:has(.${input}:not(:user-invalid):focus) .${suffix} {
        border-bottom: solid ${code} 1px;
        transition: all 0.3s;
      }
      .${textfield}.${focusColor}:not(.${validate}):has(.${input}:focus) .${prefixText},
      .${textfield}.${focusColor}:not(.${validate}):has(.${input}:focus) .${suffixText},
      .${textfield}.${focusColor}.${validate}:has(.${input}:not(:user-invalid):focus) .${prefixText},
      .${textfield}.${focusColor}.${validate}:has(.${input}:not(:user-invalid):focus) .${suffixText} {
        color: ${code};
        transition: all 0.3s;
      }
    `

    variations.push(variation)
  }

  return variations
}
const errorColorVariations = () => {
  const variations = []

  for (const [name, code] of Object.entries(color)) {
    const errorColor = _prefixed(`error-color-${name}`)
    const variation = /* css */ `
      .${textfield}.${errorColor}.${outlined}.${validate}:has(.${input}:user-invalid) .${inputOutline} {
        border: ${code} solid 1px;
      }
      .${textfield}.${errorColor}.${filled}.${validate}:has(.${input}:user-invalid) .${inputOutline},
      .${textfield}.${errorColor}.${standard}.${validate}:has(.${input}:user-invalid) .${inputOutline},
      .${textfield}.${errorColor}.${standard}.${validate}:has(.${input}:user-invalid) .${prefix},
      .${textfield}.${errorColor}.${standard}.${validate}:has(.${input}:user-invalid) .${suffix} {
        border-bottom: ${code} solid 1px;
      }
      .${textfield}.${errorColor}.${validate}:has(.${input}:user-invalid) .${placeholder},
      .${textfield}.${errorColor}.${validate}:has(.${input}:user-invalid) .${prefixText},
      .${textfield}.${errorColor}.${validate}:has(.${input}:user-invalid) .${suffixText} {
        color: ${code};
      }
    `

    variations.push(variation)
  }

  return variations
}

const focusColorClass = (color: Color) => {
  return _prefixed(`focus-color-${color}`)
}
const errorColorClass = (color: Color) => {
  return _prefixed(`error-color-${color}`)
}

export const textfieldStyles = () => {
  const styles = [base, ...focusColorVariations(), ...errorColorVariations()]
  return styles
}
export const textfieldPrefixed = prefixed
export const textfieldClasses = {
  textfield,
  addon,
  material,
  input,
  inputArea,
  placeholder,
  insidePlaceholder,
  outsidePlaceholder,
  insidePlaceholderBackground,
  inputOutline,
  prefix,
  suffix,
  prefixed,
  suffixed,
  prefixText,
  suffixText,
  validate,
  visibility,
  filled,
  outlined,
  standard,
  focusColor: focusColorClass,
  errorColor: errorColorClass
}

export type TextfieldVariant = 'filled' | 'outlined' | 'standard'
export const getTextfieldVariant = (
  variant?: TextfieldVariant
): TextfieldVariant => {
  if (variant) {
    return variant
  }
  return 'standard'
}
export const getTextfieldFocusColor = (color?: Color): Color => {
  if (color) {
    return color
  }
  return 'info'
}
export const getTextfieldErrorColor = (color?: Color): Color => {
  if (color) {
    return color
  }
  return 'alert'
}
