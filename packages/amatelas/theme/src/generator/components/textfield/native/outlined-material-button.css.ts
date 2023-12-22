import { Hex } from '@src/theme/color/classes/Hex'
import { outlinedTextfieldPrefixed } from './textfield-prefixed'
import { color } from '@src/theme/color/color'

const _textfield = outlinedTextfieldPrefixed()
const _addon = outlinedTextfieldPrefixed('addon')
const _prefix = outlinedTextfieldPrefixed('prefix')
const _suffix = outlinedTextfieldPrefixed('suffix')
const _prefixed = outlinedTextfieldPrefixed('prefixed')
const _suffixed = outlinedTextfieldPrefixed('suffixed')
const _input = outlinedTextfieldPrefixed('input')
const _placeholder = outlinedTextfieldPrefixed('placeholder')
const _validate = outlinedTextfieldPrefixed('validate')
const _helperText = outlinedTextfieldPrefixed('helper-text')

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
  background-color: ${new Hex(color.neutral).getLighten(0.8).getHexString()};
  padding: 0 6px;
}
.${_prefix} {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.${_suffix} {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.${_input}.${_prefixed} {
  padding-left: 6px;
}
.${_input}.${_suffixed} {
  padding-right: 6px;
}
.${_input}:not(.${_prefixed}) {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.${_input}:not(.${_suffixed}) {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.${_input} {
  bottom: 0;
  padding: 6px;
  width: 100%;
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
  margin: 6px 0;
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

export const outlinedTextfieldStyles = () => {
  const styles = [base]
  return styles
}
