import { prefixedBy } from '@src/helper'

export type MaterialFormItemVariant = 'standard' | 'outlined' | 'filled'

const _prefixed = prefixedBy('material_form_item')

const materialFormItem = _prefixed()
const itemOutline = _prefixed('item-outline')
const input = _prefixed('input')
const placeholder = _prefixed('placeholder')
const placeholderBackground = _prefixed('placeholder-background')
const round = {
  topLeft: _prefixed('round-top-left'),
  topRight: _prefixed('round-top-right'),
  bottomLeft: _prefixed('round-bottom-left'),
  bottomRight: _prefixed('round-bottom-right')
}
const value = _prefixed('value')

const outlined = _prefixed('outlined')
const filled = _prefixed('filled')
const standard = _prefixed('standard')
const variant = {
  outlined,
  filled,
  standard
}

const focus = _prefixed('focus')
const blur = _prefixed('blur')
const placeholderShown = _prefixed('placeholder-shown')

const defaultHeight = 58
const outlinedHeight = 64
const inputAreaHeight = 58
const transitionTime = 300

const zIndex = {
  base: 0,
  itemOutline: 0,
  input: 100,
  placeholder: 300,
  placeholderBackground: 200,
  value: 300
}

const base = /* css */ `
.${materialFormItem} {
  position: relative;
  width: 100%;
}
.${materialFormItem}.${variant.outlined} {
  height: ${outlinedHeight}px;
}
.${materialFormItem}.${variant.standard},
.${materialFormItem}.${variant.filled} {
  height: ${defaultHeight}px;
}
.${materialFormItem} .${itemOutline} {
  position: absolute;
  height: ${defaultHeight}px;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  padding-left: 10px;
  z-index: ${zIndex.itemOutline};
}
.${materialFormItem}.${variant.filled} .${itemOutline} {
  background-color: lightgray;
}
.${materialFormItem}.${round.topLeft} .${itemOutline} {
  border-top-left-radius: 4px;
}
.${materialFormItem}.${round.topRight} .${itemOutline} {
  border-top-right-radius: 4px;
}
.${materialFormItem}.${round.bottomLeft} .${itemOutline} {
  border-bottom-left-radius: 4px;
}
.${materialFormItem}.${round.bottomRight} .${itemOutline} {
  border-bottom-left-radius: 4px;
}
.${materialFormItem}.${variant.standard} .${itemOutline}, 
.${materialFormItem}.${variant.filled} .${itemOutline} {
  border-bottom: black solid 1px;
}
.${materialFormItem}.${variant.outlined} .${itemOutline} {
  border: black solid 1px;
}
.${materialFormItem} .${placeholder} {
  position: absolute;
  left: 10px;
  transition: all ${transitionTime}ms;
  transform-origin: 0;
  pointer-events: none;
  z-index: ${zIndex.placeholder};
}
.${materialFormItem} .${input} {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-left: 10px;
  z-index: ${zIndex.input};
}
.${materialFormItem}.${variant.standard}:has(.${placeholder}) .${input},
.${materialFormItem}.${variant.filled}:has(.${placeholder}) .${input} {
  height: ${inputAreaHeight}px;
  padding-top: 12px;
}
.${materialFormItem}.${variant.standard}:not(:has(.${placeholder})) .${input},
.${materialFormItem}.${variant.filled}:not(:has(.${placeholder})) .${input} {
  height: ${inputAreaHeight}px;
}
.${materialFormItem}.${variant.outlined} .${input} {
  height: ${inputAreaHeight}px;
}
.${materialFormItem}:not(:has(.${input}:focus)):not(:has(.${input}.${focus})) .${placeholder},
.${materialFormItem}:has(.${input}:placeholder-shown) .${placeholder},
.${materialFormItem}:has(.${input}.${placeholderShown}) .${placeholder} {
  bottom: ${inputAreaHeight / 2}px;
  transform: translateY(50%);
}
.${materialFormItem}:has(.${input}:focus).${variant.outlined} .${placeholder},
.${materialFormItem}:has(.${input}.${focus}).${
  variant.outlined
} .${placeholder},
.${materialFormItem}:not(:has(.${input}:placeholder-shown)):not(:has(.${input}.${placeholderShown})).${
  variant.outlined
} .${placeholder} {
  bottom: 46px;
  transform: scale(0.8);
}
.${materialFormItem}:has(.${input}:focus).${variant.standard} .${placeholder},
.${materialFormItem}:has(.${input}.${focus}).${
  variant.standard
} .${placeholder},
.${materialFormItem}:not(:has(.${input}:placeholder-shown)):not(:has(.${input}.${placeholderShown})).${
  variant.standard
} .${placeholder},
.${materialFormItem}:has(.${input}:focus).${variant.filled} .${placeholder},
.${materialFormItem}:has(.${input}.${focus}).${variant.filled} .${placeholder},
.${materialFormItem}:not(:has(.${input}:placeholder-shown)):not(:has(.${input}.${placeholderShown})).${
  variant.filled
} .${placeholder} {
  bottom: 34px;
  transform: scale(0.8);
}
.${materialFormItem}.${variant.outlined} .${placeholderBackground} {
  position: absolute;
  pointer-events: none;
  transform-origin: 0;
  left: 10px;
  bottom: 56px;
  height: 3px;
  transform: scale(0.8);
  color: transparent;
  z-index: ${zIndex.placeholderBackground};
  transition: ${transitionTime}ms;
}
.${materialFormItem}:not(:has(.${input}:focus)):not(:has(.${input}.${focus})) .${placeholder},
.${materialFormItem}:has(.${input}:placeholder-shown) .${placeholder},
.${materialFormItem}:has(.${input}.${placeholderShown}) .${placeholder} {
  background-color: transparent;
}
.${materialFormItem}:has(.${input}:focus).${
  variant.outlined
} .${placeholderBackground},
.${materialFormItem}:has(.${input}.${focus}).${
  variant.outlined
} .${placeholderBackground},
.${materialFormItem}:not(:has(.${input}:placeholder-shown)):not(:has(.${input}.${placeholderShown})).${
  variant.outlined
} .${placeholderBackground} {
  background-color: white;
}
.${materialFormItem}.${variant.standard} .${placeholderBackground}, 
.${materialFormItem}.${variant.filled} .${placeholderBackground} {
  display: none;
}
.${materialFormItem} .${value} {
  position: absolute;
  padding-left: 10px;
  z-index: ${zIndex.value};
  pointer-events: none;
}
.${materialFormItem}.${variant.outlined} .${value} {
  bottom: ${inputAreaHeight / 2}px;
  transform: translateY(50%);
}
.${materialFormItem}.${variant.filled}:has(.${placeholder}) .${value},
.${materialFormItem}.${variant.standard}:has(.${placeholder}) .${value} {
  bottom: ${inputAreaHeight / 2 - 7}px;
  transform: translateY(50%);
}
.${materialFormItem}.${variant.filled}:not(:has(.${placeholder})) .${value},
.${materialFormItem}.${variant.standard}:not(:has(.${placeholder})) .${value} {
  bottom: ${inputAreaHeight / 2}px;
  transform: translateY(50%);
}
`

export const materialFormItemStyles = () => {
  const styles = [base]
  return styles
}
export const materialFormItemClasses = {
  materialFormItem,
  itemOutline,
  input,
  placeholder,
  placeholderBackground,
  round,
  variant
}
export const sharedMaterialFormItemClasses = {
  focus,
  blur,
  placeholderShown,
  value
}
