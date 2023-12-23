import { filledMaterialTextfieldPrefixed } from './material-textfield-prefixed'
import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'
import { responsiveFontSize } from '@src/theme/font/responsive-font-size'

const base = /* css */ `
.${filledMaterialTextfieldPrefixed()} {
  --blur-outline-color: gray;
  --focus-outline-color: ${color.info};
  --blur-color: gray;
  --focus-color: ${color.info};
  --transition-time: 0.3s;
  --base-z-index: 0;
  --error-underline-z-index: 10;
}

.${filledMaterialTextfieldPrefixed()} {
  position: relative;
  height: 52px;
  background-color: ${new Hex(color.neutral).getLighten(0.8).getHexString()};
}
.${filledMaterialTextfieldPrefixed()}::after {
  border-bottom: 1px solid var(--focus-outline-color);
  left: 0px;
  bottom: 0px;
  content: '';
  position: absolute;
  right: 0px;
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;
}
.${filledMaterialTextfieldPrefixed()}:has(.${filledMaterialTextfieldPrefixed(
  'input'
)}:focus)::after {
  transform: scaleX(1);
}
.${filledMaterialTextfieldPrefixed()}:not(:has(.${filledMaterialTextfieldPrefixed(
  'input'
)}:focus))::after {
  transform: scaleX(0);
}

.${filledMaterialTextfieldPrefixed('placeholder')} {
  position: absolute;
  margin: 0 12px;
  transform-origin: 0;
  transition: all var(--transition-time);
  pointer-events: none;
  color: var(--blur-color);

  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);

  ${responsiveFontSize("body1")}
}
.${filledMaterialTextfieldPrefixed('input')} {
  position: absolute;
  bottom: 0;
  padding: 13px 12px 0 12px;
  width: 100%;
  height: 100%;
  z-index: var(--base-z-index);
  border-bottom: var(--blur-outline-color) solid 1px;
}
.${filledMaterialTextfieldPrefixed(
  'input'
)}:focus + .${filledMaterialTextfieldPrefixed('placeholder')},
.${filledMaterialTextfieldPrefixed(
  'input'
)}:not(:placeholder-shown) + .${filledMaterialTextfieldPrefixed(
  'placeholder'
)} {
  transform: scale(0.8);
  top: -2px;
  transition: all var(--transition-time);
  pointer-events: none;
}
.${filledMaterialTextfieldPrefixed(
  'input'
)}:not(:placeholder-shown):not(:focus) + .${filledMaterialTextfieldPrefixed(
  'placeholder'
)} {
  color: var(--blur-color);
}
.${filledMaterialTextfieldPrefixed(
  'input'
)}:focus + .${filledMaterialTextfieldPrefixed('placeholder')} {
  color: var(--focus-color);
}

.${filledMaterialTextfieldPrefixed(
  'validate'
)} > .${filledMaterialTextfieldPrefixed('input')}:invalid {
  border-bottom: ${color.alert} solid 1px;
  z-index: var(--error-underline-z-index);
}
.${filledMaterialTextfieldPrefixed(
  'validate'
)} > .${filledMaterialTextfieldPrefixed(
  'input'
)}:invalid + .${filledMaterialTextfieldPrefixed('placeholder')} {
  color: ${color.alert};
}

.${filledMaterialTextfieldPrefixed('helper-text')} {
  color: gray;
  padding: 4px 12px;
}
`

export const filledMaterialTextfieldStyles = () => {
  const styles = [base]
  return styles
}
