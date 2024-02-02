import { prefixedBy } from '@src/helper'
import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'
import { Color } from '@src/types'

const _prefixed = prefixedBy('textarea')

const textarea = _prefixed()
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
.${textarea} {
  height: 100%;
  min-height: 128px;
}
.${textarea} .${inputArea} {
  width: 100%;
  position: relative;
  background-color: white;
}
.${textarea}.${material} .${inputArea} {
  height: 100%;
}
.${textarea}:not(.${material}) .${inputArea} {
  height: calc(100% - 36px);
}
.${textarea}.${filled} .${inputArea} {
  background-color: ${fillBackgroundColor};
}
.${textarea} .${placeholder} {
  color: ${blurColor};
  transition: all 0.3s;
}

.${textarea}.${material} .${outsidePlaceholder} {
  display: none;
}
.${textarea}:not(.${material}) .${outsidePlaceholder} {
  height: 24px;
  display: inline-flex;
  align-items: center;
  margin: 6px 0;
}
.${textarea}:not(.${material}) .${insidePlaceholder} {
  display: none;
}
.${textarea}:not(.${material}) .${insidePlaceholderBackground},
.${textarea}.${material}:not(.${outlined}) .${insidePlaceholderBackground} {
  display: none;
}
.${textarea}.${material} .${insidePlaceholder} {
  pointer-events: none;
}
.${textarea}.${material} .${insidePlaceholderBackground} {
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
.${textarea}.${material}:has(.${input}:focus) .${insidePlaceholderBackground},
.${textarea}.${material}:has(.${input}:not(:placeholder-shown))
  .${insidePlaceholderBackground} {
  background-color: white;
}
.${textarea}.${material}:has(.${input}:not(:focus)) .${insidePlaceholder},
.${textarea}.${material}:has(.${input}:placeholder-shown) .${insidePlaceholder} {
  position: absolute;
  top: 12px;
  left: 10px;
  transform-origin: 0;
  transition: all 0.3s;
  z-index: 300;
}
.${textarea}.${material}:has(.${input}:focus) .${insidePlaceholder},
.${textarea}.${material}:has(.${input}:not(:placeholder-shown)) .${insidePlaceholder} {
  position: absolute;
  left: 10px;
  transform-origin: 0;
  transform: scale(0.8);
  transition: all 0.3s;
  z-index: 300;
}
.${textarea}.${material}.${filled}:has(.${input}:focus) .${insidePlaceholder},
.${textarea}.${material}.${filled}:has(.${input}:not(:placeholder-shown))
  .${insidePlaceholder},
.${textarea}.${material}.${standard}:has(.${input}:focus) .${insidePlaceholder},
.${textarea}.${material}.${standard}:has(.${input}:not(:placeholder-shown))
  .${insidePlaceholder} {
  top: 0;
}
.${textarea}.${material}.${outlined}:has(.${input}:focus) .${insidePlaceholder},
.${textarea}.${material}.${outlined}:has(.${input}:not(:placeholder-shown))
  .${insidePlaceholder} {
  top: -12px;
}

.${textarea} .${input} {
  width: 100%;
}
.${textarea}:not(.${material}) .${input} {
  padding: 0 10px;
  margin: 12px 0 ;
  height: calc(100% - 12px - 12px);
}
.${textarea}.${material} .${input} {
  position: relative;
  z-index: 400;
}

.${textarea}.${material}:has(.${placeholder}).${outlined} .${input} {
  margin-top: 12px;
  margin-bottom: 10px;
  padding: 0 10px;
  height: calc(100% - 12px - 10px - 24px);
}
.${textarea}.${material}:has(.${placeholder}).${filled} .${input},
.${textarea}.${material}:has(.${placeholder}).${standard} .${input} {
  margin-top: 24px;
  margin-bottom: 10px;
  padding: 0 10px;
  height: calc(100% - 24px - 10px - 36px);
}

.${textarea} .${inputOutline} {
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  pointer-events: none;
  z-index: 100;
}
.${textarea}.${outlined} .${inputOutline} {
  border: solid ${blurColor} 1px;
  transition: all 0.3s;
}

.${textarea}.${filled} .${inputOutline},
.${textarea}.${standard} .${inputOutline} {
  border-bottom: solid ${blurColor} 1px;
  transition: all 0.3s;
}


.${textarea} .${prefix},
.${textarea} .${suffix} {
  display: flex;
  align-items: center;
  height: 100%;
}
.${textarea} .${prefix} {
  padding: 0 8px;
}
.${textarea} .${suffix} {
  padding: 0 8px;
}
.${textarea}.${outlined} .${prefix} {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.${textarea}.${outlined} .${suffix} {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.${textarea}.${outlined} .${prefix},
.${textarea}.${outlined} .${suffix} {
  background-color: ${fillBackgroundColor};
}
.${textarea}.${standard} .${prefix},
.${textarea}.${standard} .${suffix} {
  border-bottom: solid ${blurColor} 1px;
  transition: all 0.3s;
}

.${textarea}.${standard} .${prefixText},
.${textarea}.${standard} .${suffixText},
.${textarea}.${filled} .${prefixText},
.${textarea}.${filled} .${suffixText} {
  color: ${blurColor};
  transition: all 0.3s;
}
.${textarea}.${outlined} .${prefixText},
.${textarea}.${outlined} .${suffixText} {
  color: black;
  transition: all 0.3s;
}


.${textarea}.${outlined}:not(:has(.${input}.${prefixed})) .${inputOutline} {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.${textarea}.${outlined}:not(:has(.${input}.${suffixed})) .${inputOutline} {
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
      .${textarea}.${focusColor}:not(.${validate}):has(.${input}:focus) .${placeholder},
      .${textarea}.${focusColor}.${validate}:has(.${input}:not(:user-invalid):focus) .${placeholder} {
        color: ${code};
      }
      .${textarea}.${focusColor}.${outlined}:not(.${validate}):has(.${input}:focus) .${inputOutline},
      .${textarea}.${focusColor}.${outlined}.${validate}:has(.${input}:not(:user-invalid):focus)
        .${inputOutline} {
        border: solid ${code} 1px;
        transition: all 0.3s;
      }
      .${textarea}.${focusColor}.${filled}:not(.${validate}):has(.${input}:focus) .${inputOutline},
      .${textarea}.${focusColor}.${standard}:not(.${validate}):has(.${input}:focus) .${inputOutline},
      .${textarea}.${focusColor}.${filled}.${validate}:has(.${input}:not(:user-invalid):focus) .${inputOutline},
      .${textarea}.${focusColor}.${standard}.${validate}:has(.${input}:not(:user-invalid):focus)
        .${inputOutline} {
        border-bottom: solid ${code} 1px;
        transition: all 0.3s;
      }
      .${textarea}.${focusColor}.${standard}:not(.${validate}):has(.${input}:focus) .${prefix},
      .${textarea}.${focusColor}.${standard}:not(.${validate}):has(.${input}:focus) .${suffix},
      .${textarea}.${focusColor}.${standard}.${validate}:has(.${input}:not(:user-invalid):focus) .${prefix},
      .${textarea}.${focusColor}.${standard}.${validate}:has(.${input}:not(:user-invalid):focus) .${suffix} {
        border-bottom: solid ${code} 1px;
        transition: all 0.3s;
      }
      .${textarea}.${focusColor}:not(.${validate}):has(.${input}:focus) .${prefixText},
      .${textarea}.${focusColor}:not(.${validate}):has(.${input}:focus) .${suffixText},
      .${textarea}.${focusColor}.${validate}:has(.${input}:not(:user-invalid):focus) .${prefixText},
      .${textarea}.${focusColor}.${validate}:has(.${input}:not(:user-invalid):focus) .${suffixText} {
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
      .${textarea}.${errorColor}.${outlined}.${validate}:has(.${input}:user-invalid) .${inputOutline} {
        border: ${code} solid 1px;
      }
      .${textarea}.${errorColor}.${filled}.${validate}:has(.${input}:user-invalid) .${inputOutline},
      .${textarea}.${errorColor}.${standard}.${validate}:has(.${input}:user-invalid) .${inputOutline},
      .${textarea}.${errorColor}.${standard}.${validate}:has(.${input}:user-invalid) .${prefix},
      .${textarea}.${errorColor}.${standard}.${validate}:has(.${input}:user-invalid) .${suffix} {
        border-bottom: ${code} solid 1px;
      }
      .${textarea}.${errorColor}.${validate}:has(.${input}:user-invalid) .${placeholder},
      .${textarea}.${errorColor}.${validate}:has(.${input}:user-invalid) .${prefixText},
      .${textarea}.${errorColor}.${validate}:has(.${input}:user-invalid) .${suffixText} {
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

export const textareaStyles = () => {
  const styles = [base, ...focusColorVariations(), ...errorColorVariations()]
  return styles
}
export const textareaClasses = {
  textarea,
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

export type TextareaVariant = 'filled' | 'outlined' | 'standard'
export const getTextareaVariant = (
  variant?: TextareaVariant
): TextareaVariant => {
  if (variant) {
    return variant
  }
  return 'standard'
}
export const getTextareaFocusColor = (color?: Color): Color => {
  if (color) {
    return color
  }
  return 'info'
}
export const getTextareaErrorColor = (color?: Color): Color => {
  if (color) {
    return color
  }
  return 'alert'
}
