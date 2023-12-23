import { responsiveFontSize } from '@src/theme/font/responsive-font-size'
import { standardMaterialPasswordTextfieldPrefixed } from './material-password-textfield-prefixed'
import { color } from '@src/theme/color/color'

const _textfield = standardMaterialPasswordTextfieldPrefixed('')
const _input = standardMaterialPasswordTextfieldPrefixed('input')
const _placeholder = standardMaterialPasswordTextfieldPrefixed('placeholder')
const _validate = standardMaterialPasswordTextfieldPrefixed('validate')
const _helperText = standardMaterialPasswordTextfieldPrefixed('helper-text')
const _visible = standardMaterialPasswordTextfieldPrefixed('visible')

const base = /* css */ `
.${_textfield} {
  --blur-outline-color: gray;
  --focus-outline-color: ${color.info};
  --blur-color: gray;
  --focus-color: ${color.info};
  --transition-time: 0.3s;
  --base-z-index: 0;
  --error-underline-z-index: 10;
}

.${_textfield} {
  position: relative;
  height: 52px;
  margin-top: 4px;

  &::after {
    border-bottom: 1px solid var(--focus-outline-color);
    left: 0px;
    bottom: 0px;
    content: '';
    position: absolute;
    right: 0px;
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    pointer-events: none;
  }
  &:has(.${_input}:focus)::after {
    transform: scaleX(1);
  }

  &:not(:has(.${_input}:focus))::after {
    transform: scaleX(0);
  }
}

.${_placeholder} {
  position: absolute;
  transform-origin: 0;
  margin: 0 12px;
  transition: all var(--transition-time);
  pointer-events: none;
  color: var(--blur-color);

  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  user-select: none;
}
.${_input} {
  position: absolute;
  bottom: 0;
  padding: 13px 34px 0 12px;
  width: 100%;
  height: 100%;
  z-index: var(--base-z-index);
  border-bottom: var(--blur-outline-color) solid 1px;
  ${responsiveFontSize("body1")}
}
.${_input}:focus + .${_placeholder},
.${_input}:not(:placeholder-shown) + .${_placeholder} {
  transform: scale(0.8);
  top: -2px;
  transition: all var(--transition-time);
  pointer-events: none;
}
.${_input}:not(:placeholder-shown):not(:focus) + .${_placeholder} {
  color: var(--blur-color);
}
.${_input}:focus + .${_placeholder} {
  color: var(--focus-color);
}

.${_validate} > .${_input}:invalid {
  border-bottom: ${color.alert} solid 1px;
  z-index: var(--error-underline-z-index);
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
  cursor: pointer;
}
`

export const standardMaterialPasswordTextfieldStyles = () => {
  const styles = [base]
  return styles
}
