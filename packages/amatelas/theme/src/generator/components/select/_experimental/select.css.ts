import { prefixedBy } from '@src/helper'
import { sharedMaterialFormItemClasses } from '../../material-form-item/material-form-item.css'

const _prefixed = prefixedBy('select')
const _keyframePrefixed = prefixedBy('select', 'keyframes')

const select = _prefixed()
const options = _prefixed('options')
const initial = _prefixed('initial')
const selected = _prefixed('selected')
const outline = _prefixed('outline')
const input = _prefixed('input')
const option = _prefixed('option')
const material = _prefixed('material')
const blurBackground = _prefixed('blur-background')
const insidePlaceholder = _prefixed('inside-placeholder')
const outsidePlaceholder = _prefixed('outside-placeholder')
const deleteSVG = _prefixed('delete-svg')
const as = {
  input: _prefixed("as-input")
}

const keyframes = {
  focus: _keyframePrefixed('focus'),
  blur: _keyframePrefixed('blur')
}

const { focus, blur, placeholderShown } = sharedMaterialFormItemClasses

const base = /* css */ `
.${select} .${options} {
  position: absolute;
  top: 58px;
  width: 100%;
  z-index: 10100;
  background-color: white;
}
.${select}:has(.${initial}) .${options} {
  display: none;
  opacity: 0;
}
.${select}:has(.${blur}) .${options} {
  animation: ${keyframes.blur} 0.3s forwards;
}
.${select}:has(.${focus}) .${options} {
  animation: ${keyframes.focus} 0.3s forwards;
}
@keyframes ${keyframes.focus} {
  0% {
    display: none;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
}
@keyframes ${keyframes.blur} {
  0% {
    display: block;
    opacity: 1;
  }
  100% {
    display: none;
    opacity: 0;
  }
}

.${selected} {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 10px;
}
.${outline} {
}
.${select}:not(.${focus}) .${outline} {
  border: black solid 1px;
}
.${select}.${focus} .${outline} {
  border: blue solid 1px;
}

.${option} {
  position: relative;
  overflow: hidden;
  padding: 4px 10px;
  width: 100%;
}
.${option}:hover {
  padding: 4px 10px;
  background-color: lightblue;
}
.${select}.${material} .${option} {
  cursor: pointer;
}

.${select}:has(.${focus}) .${blurBackground} {
  background-color: transparent;
  position: fixed;
  inset: 0;
  z-index: 10000;
}

.${select}:not(.${material}) .${input} {
  top: 50%;
  transform: translateY(-50%);
}
.${select}:not(.${material}) .${insidePlaceholder} {
  display: none;
}
.${select}.${material} .${outsidePlaceholder} {
  display: none;
}
.${select} .${deleteSVG} {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10200;
  cursor: pointer;
}

.${select}.${as.input} .${input} {
  z-index: 10100;
}
`

export const selectStyles = () => {
  const styles = [base]
  return styles
}
export const selectClasses = {
  select,
  options,
  initial,
  selected,
  outline,
  input,
  option,
  material,
  blurBackground,
  insidePlaceholder,
  outsidePlaceholder,
  deleteSVG,
  as,

  blur,
  focus,
  placeholderShown
}
