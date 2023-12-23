import { responsiveFontSize } from '@src/theme/font/responsive-font-size'
import { outlinedMaterialPasswordTextfieldPrefixed } from './material-password-textfield-prefixed'
import { color } from '@src/theme/color/color'

const _textfield = outlinedMaterialPasswordTextfieldPrefixed()
const _placeholder = outlinedMaterialPasswordTextfieldPrefixed('placeholder')
const _input = outlinedMaterialPasswordTextfieldPrefixed('input')
const _placeholderBackground = outlinedMaterialPasswordTextfieldPrefixed(
  'placeholder-background'
)
const _validate = outlinedMaterialPasswordTextfieldPrefixed('validate')
const _helperText = outlinedMaterialPasswordTextfieldPrefixed('helper-text')
const _visible = outlinedMaterialPasswordTextfieldPrefixed("visible")

const base = /* css */ `
.${_textfield} {
  --blur-outline-color: gray;
  --focus-outline-color: ${color.info};
  --blur-color: gray;
  --focus-color: ${color.info};
  --transition-time: 0.3s;
  --base-z-index: 0;
  --blur-placeholder-z-index: 0;
  --input-z-index: 10;
  --placeholder-background-z-index: 20;
  --focus-placeholder-z-index: 30;
  --visible-z-index: 40;
}

.${_textfield} {
  position: relative;
  height: 52px;
  margin-top: 4px;
}
.${_placeholder} {
  position: absolute;
  margin: 0 10px;
  padding: 0 2px;
  transform-origin: 0;
  transition: all var(--transition-time);
  pointer-events: none;
  color: var(--blur-color);
  z-index: var(--blur-placeholder-z-index);
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  user-select: none;
}
.${_input} {
  position: absolute;
  bottom: 0;
  padding: 12px 34px 12px 12px;
  width: 100%;
  height: 100%;
  z-index: var(--input-z-index);
  border: var(--blur-outline-color) solid 1px;
  border-radius: 4px;
  ${responsiveFontSize("body1")}
}
.${_input}:focus {
  border: var(--focus-outline-color) solid 1px;
}
.${_input}:focus + .${_placeholder},
.${_input}:not(:placeholder-shown) + .${_placeholder} {
  transform: scale(0.8);
  top: -0.5lh;
  transition: all var(--transition-time);
  pointer-events: none;
  z-index: var(--focus-placeholder-z-index);
}
.${_input}:focus + .${_placeholder} {
  color: var(--focus-color);
}
.${_input}:not(:placeholder-shown):not(:focus) + .${_placeholder} {
  color: var(--blur-color);
}
.${_placeholderBackground} {
  position: absolute;
  margin: 0 10px;
  padding: 0 2px;
  transform-origin: 0;
  pointer-events: none;
  color: var(--blur-color);
  transform: scale(0.8);
  top: -0.5px;
  transition: all var(--transition-time);
  pointer-events: none;
  color: transparent;
  user-select: none;

  background-color: transparent;
  height: 2px;
  z-index: var(--placeholder-background-z-index);
}
.${_input}:focus ~ .${_placeholderBackground},
.${_input}:not(:placeholder-shown) ~ .${_placeholderBackground} {
  background-color: white;
}

.${_validate} > .${_input}:invalid {
  border: ${color.alert} solid 1px;
}
.${_validate} > .${_input}:invalid + .${_placeholder} {
  color: ${color.alert};
}
.${_helperText} {
  color: gray;
  padding: 4px 12px;
}
.${_visible} {
  position: absolute;
  bottom: 14px;
  right: 6px;
  z-index: var(--visible-z-index);
  cursor: pointer;
}
`

export const outlinedMaterialPasswordTextfieldStyles = () => {
  const styles = [base]
  return styles
}
