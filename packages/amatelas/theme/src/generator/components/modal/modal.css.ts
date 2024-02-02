import { prefixedBy } from '@src/helper'
import { Hex } from '@src/theme/color/classes/Hex'
import { color } from '@src/theme/color/color'

const _prefixed = prefixedBy('modal')
const modal = _prefixed()
const open = _prefixed('open')
const close = _prefixed('close')
const content = _prefixed('content')

const gray = new Hex(color.neutral).getHexString()

const base = /* css */ `
html:has(.${modal}.${open}) {
  overflow: hidden;
}
.${modal}.${open} {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 2500;

  backdrop-filter: blur(4px);
  background-color: ${gray}6f;
}
.${modal}.${close} {
  display: none;
}
.${modal}.${open} > .${content} {
  position: absolute;
  width: 60%;
  height: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  overflow: scroll;
}
`

export const modalClasses = {
  modal,
  open,
  close,
  content
}

export const modalStyles = () => {
  const styles = [base]
  return styles
}
