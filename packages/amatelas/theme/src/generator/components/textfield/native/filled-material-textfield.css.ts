import { filledTextfieldPrefixed } from './textfield-prefixed'
import { color } from '@src/theme/color/color'
import { Hex } from '@src/theme/color/classes/Hex'

const _textfield = filledTextfieldPrefixed()
const _addon = filledTextfieldPrefixed('addon')
const _prefix = filledTextfieldPrefixed('prefix')
const _suffix = filledTextfieldPrefixed('suffix')
const _prefixed = filledTextfieldPrefixed('prefixed')
const _suffixed = filledTextfieldPrefixed('suffixed')
const _input = filledTextfieldPrefixed('input')
const _placeholder = filledTextfieldPrefixed('placeholder')
const _validate = filledTextfieldPrefixed('validate')
const _helperText = filledTextfieldPrefixed('helper-text')

const base = /* css */ `
.${_textfield} {
  --blur-outline-color: gray;
  --focus-outline-color: ${color.info};
  --blur-color: gray;
  --focus-color: ${color.info};
  --transition-time: 0.3s;
}
.${_textfield} {
  position: relative;
}
.${_addon} {
  display: flex;
}
.${_prefix}, .${_suffix} {
  display: flex;
  align-items: center;
  color: gray;
}
.${_prefix} {
  padding-right: 6px;
}
.${_suffix} {
  padding-left: 6px;
}
.${_textfield}:has(.${_input}:not(:focus)) .${_prefix}, .${_textfield}:has(.${_input}:not(:focus)) .${_suffix} {
  transition: all var(--transition-time);
  color: var(--blur-color);
}
.${_textfield}:has(.${_input}:focus) .${_prefix}, .${_textfield}:has(.${_input}:focus) .${_suffix} {
  transition: all var(--transition-time);
  color: var(--focus-color);
}
.${_input}.${_prefixed} {
  padding-left: 6px;
}
.${_input}.${_suffixed} {
  padding-right: 6px;
}
.${_input} {
  width: 100%;
  padding: 6px;
  background-color: ${new Hex(color.neutral).getLighten(0.8).getHexString()};
}
.${_input}:not(:focus) {
  border-bottom: var(--blur-outline-color) solid 1px;
}
.${_input}:focus {
  border-bottom: var(--focus-outline-color) solid 1px;
}
.${_placeholder} {
  transition: all var(--transition-time);
  pointer-events: none;
}
.${_textfield}:has(.${_input}:focus) > .${_placeholder},
.${_textfield}:has(.${_input}:not(:placeholder-shown)) > .${_placeholder} {
  transition: all var(--transition-time);
  pointer-events: none;
}
.${_textfield}:not(.${_validate}):has(.${_input}:not(:focus))
  > .${_placeholder} {
  color: var(--blur-color);
}
.${_textfield}:has(.${_input}:focus) .${_placeholder} {
  color: var(--focus-color);
}
.${_validate} .${_input}:not(:focus):invalid {
  border-bottom: ${color.alert} solid 1px;
}
.${_validate}:has(.${_input}:not(:focus):invalid) .${_placeholder} {
  color: ${color.alert};
}
.${_validate} .${_input}:not(:focus):valid {
  border-bottom: var(--blur-color) solid 1px;
}
.${_validate}:has(.${_input}:not(:focus):valid) .${_placeholder} {
  color: var(--blur-color);
}
.${_helperText} {
  color: gray;
  padding: 4px 0;
}
`

export const filledTextfieldStyles = () => {
  const styles = [base]
  return styles
}
