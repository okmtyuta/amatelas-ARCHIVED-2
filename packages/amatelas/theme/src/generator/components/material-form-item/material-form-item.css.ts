import { prefixedBy } from '@src/helper'

const _prefixed = prefixedBy('material_form_item')

const materialFormItem = _prefixed()
const outline = _prefixed('outline')
const input = _prefixed('input')
const placeholder = _prefixed('placeholder')

const focus = _prefixed('focus')
const blur = _prefixed('blur')
const placeholderShown = _prefixed('placeholder-shown')

const base = /* css */ `
.${materialFormItem} {
  position: relative;
  height: 58px;
}
.${materialFormItem} .${outline} {
  position: absolute;
  border: black solid 1px;
  inset: 0;
  pointer-events: none;
}
.${materialFormItem} .${outline} {
  position: absolute;
  padding-left: 10px;
  inset: 0;
}
.${materialFormItem} .${placeholder} {
  position: absolute;
  padding-left: 10px;
  transition: 0.3s;
  transform-origin: 0;
  pointer-events: none;
}
.${materialFormItem} .${input} {
  position: absolute;
  inset: 0;
  padding-left: 10px;
}
.${materialFormItem}:not(:has(.${input}:focus)):not(
    :has(.${input}.${focus})
  )
  .${placeholder},
.${materialFormItem}:has(.${input}:placeholder-shown)
  .${placeholder},
.${materialFormItem}:has(.${input}.${placeholderShown})
  .${placeholder} {
  top: 50%;
  transform: translateY(-50%);
}

.${materialFormItem}:has(.${input}:focus)
  .${placeholder},
.${materialFormItem}:has(.${input}.${focus})
  .${placeholder},
.${materialFormItem}:not(:has(.${input}:placeholder-shown)):not(
    :has(.${input}.${placeholderShown})
  )
  .${placeholder} {
  top: -12px;
  transform: scale(0.8);
}
`

export const materialFormItemStyles = () => {
  const styles = [base]
  return styles
}
export const materialFormItemClasses = {
  materialFormItem,
  outline,
  input,
  placeholder
}
export const sharedMaterialFormItemClasses = {
  focus,
  blur,
  placeholderShown
}
