import { prefixedBy } from '@src/helper'

const _prefixed = prefixedBy('flex')
const flex = _prefixed()
const inline = _prefixed('inline')
const direction = {
  row: _prefixed('row'),
  column: _prefixed('column'),
  'row-reverse': _prefixed('row-reverse'),
  'column-reverse': _prefixed('column-reverse')
}
const wrap = _prefixed('wrap')
const alignContent = {
  normal: _prefixed('align-content-normal'),
  center: _prefixed('align-content-center'),
  'flex-start': _prefixed('align-content-flex-start'),
  'flex-end': _prefixed('align-content-flex-end'),
  'space-around': _prefixed('align-content-space-around'),
  'space-between': _prefixed('align-content-space-between'),
  stretch: _prefixed('align-content-stretch')
}
const justifyContent = {
  normal: _prefixed('justify-content-normal'),
  center: _prefixed('justify-content-center'),
  'flex-start': _prefixed('justify-content-flex-start'),
  'flex-end': _prefixed('justify-content-flex-end'),
  'space-around': _prefixed('justify-content-space-around'),
  'space-between': _prefixed('justify-content-space-between'),
  'space-evenly': _prefixed('justify-content-space-evenly')
}
const alignItems = {
  normal: _prefixed('align-items-normal'),
  center: _prefixed('align-items-center'),
  'flex-start': _prefixed('align-items-flex-start'),
  'flex-end': _prefixed('align-items-flex-end'),
  stretch: _prefixed('align-items-stretch'),
  baseline: _prefixed('align-items-baseline')
}

const base = /* css */ `
.${flex}:not(.${inline}) {
  display: flex;
}
.${flex}.${inline} {
  display: inline-flex;
}

.${flex}.${direction['row']} {
  flex-direction: row;
}
.${flex}.${direction['column']} {
  flex-direction: column;
}
.${flex}.${direction['row-reverse']} {
  flex-direction: row-reverse;
}
.${flex}.${direction['column-reverse']} {
  flex-direction: column-reverse;
}

.${flex}.${wrap} {
  flex-wrap: wrap;
}

.${flex}.${alignContent['normal']} {
  align-content: normal;
}
.${flex}.${alignContent['flex-start']} {
  align-content: flex-start;
}
.${flex}.${alignContent['flex-end']} {
  align-content: flex-end;
}
.${flex}.${alignContent['space-around']} {
  align-content: space-around;
}
.${flex}.${alignContent['space-between']} {
  align-content: space-between;
}
.${flex}.{.${alignContent['stretch']}} {
  align-content: stretch;
}

.${flex}.${justifyContent['normal']} {
  justify-content: normal;
}
.${flex}.${justifyContent['flex-start']} {
  justify-content: flex-start;
}
.${flex}.${justifyContent['flex-end']} {
  justify-content: flex-end;
}
.${flex}.${justifyContent['space-around']} {
  justify-content: space-around;
}
.${flex}.${justifyContent['space-between']} {
  justify-content: space-between;
}
.${flex}.${justifyContent['space-between']} {
  justify-content: space-evenly;
}

.${flex}.${alignItems['normal']} {
  align-items: normal;
}
.${flex}.${alignItems['center']} {
  align-items: center;
}
.${flex}.${alignItems['flex-start']} {
  align-items: flex-start;
}
.${flex}.${alignItems['flex-end']} {
  align-items: flex-end;
}
.${flex}.${alignItems['stretch']} {
  align-items: space-stretch;
}
.${flex}.${alignItems['baseline']} {
  align-items: baseline;
}
`

export const flexClasses = {
  flex,
  inline,
  direction,
  wrap,
  alignContent,
  justifyContent,
  alignItems
}

export const flexStyles = () => {
  const styles = [base]
  return styles
}
