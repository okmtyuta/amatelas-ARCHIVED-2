import { Hex } from '@src/theme/color/classes/Hex'
import { outlinedPasswordTextfieldPrefixed } from './password-textfield-prefixed'
import { color } from '@src/theme/color/color'
import { responsiveFontSize } from '@src/theme/font/responsive-font-size'

const prefixed = outlinedPasswordTextfieldPrefixed

const _textfield = prefixed()
const _addon = prefixed('addon')
const _prefix = prefixed('prefix')
const _suffix = prefixed('suffix')
const _prefixed = prefixed('prefixed')
const _suffixed = prefixed('suffixed')
const _input = prefixed('input')
const _inputArea = prefixed("input-area")
const _placeholder = prefixed('placeholder')
const _validate = prefixed('validate')
const _helperText = prefixed('helper-text')
const _visible = prefixed('visible')

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
  padding-left: 6px;
  padding-right: 38px;
  width: 100%;
  height: 42px;
  ${responsiveFontSize("body1")}
}
.${_inputArea} {
  width: 100%;
  position: relative;
}
.${_input}:not(:focus) {
  border: var(--blur-outline-color) solid 1px;
}
.${_input}:focus {
  border: var(--focus-outline-color) solid 1px;
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
  border: ${color.alert} solid 1px;
}
.${_validate}:has(.${_input}:not(:focus):invalid) .${_placeholder} {
  color: ${color.alert};
}
.${_validate} .${_input}:not(:focus):valid {
  border: var(--blur-color) solid 1px;
}
.${_validate}:has(.${_input}:not(:focus):valid) .${_placeholder} {
  color: var(--blur-color);
}
.${_helperText} {
  color: gray;
  padding: 4px 0;
}
.${_visible} {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}
`

export const outlinedPasswordTextfieldStyles = () => {
  const styles = [base]
  return styles
}
