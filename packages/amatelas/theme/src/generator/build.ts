import fs from 'fs'
import { resetStyle } from './reset.css'

import { alertStyles } from './components/alert/alert.css'
import { accordionStyles } from './components/accordion/accordion.css'
import { avatarStyles } from './components/avatar/avatar.css'
import { blockquoteStyles } from './components/blockquote/blockquote.css'
import { checkboxStyles } from './components/checkbox/checkbox.css'
import { filledMaterialChipStyles } from './components/chip/material/filled-material-chip.css'
import { outlinedMaterialChipStyles } from './components/chip/material/outlined-material-chip.css'
import { filledMaterialButtonStyles } from './components/button/material/filled-material-button.css'
import { outlinedMaterialButtonStyles } from './components/button/material/outlined-material-button.css'
import { standardMaterialButtonStyles } from './components/button/material/standard-material-button.css'
import { filledButtonStyles } from './components/button/native/filled-button.css'
import { standardButtonStyles } from './components/button/native/standard-button.css'
import { outlinedButtonStyles } from './components/button/native/outlined-button.css'
import { listItemStyles } from './components/list/list-item.css'
import { listStyles } from './components/list/list.css'
import { snackStyles } from './components/snack/snack.css'
import { filledMaterialTextfieldStyles } from './components/textfield/material/filled-material-textfield.css'
import { outlinedMaterialTextfieldStyles } from './components/textfield/material/outlined-material-textfield.css'
import { standardMaterialTextfieldStyles } from './components/textfield/material/standard-material-textfield.css'
import { frameStyles } from './components/frame/frame.css'
import { filledTextfieldStyles } from './components/textfield/native/filled-material-textfield.css'
import { outlinedTextfieldStyles } from './components/textfield/native/outlined-material-button.css'
import { standardTextfieldStyles } from './components/textfield/native/standard-material-textfield.css'

import { rippleStyles } from './effect/ripple/ripple.css'
import { standardMaterialPasswordTextfieldStyles } from './components/password-textfield/material/standard-material-password-textfield.css'
import { filledMaterialPasswordTextfieldStyles } from './components/password-textfield/material/filled-material-password-textfield.css'
import { outlinedMaterialPasswordTextfieldStyles } from './components/password-textfield/material/outlined-material-password-textfield.css'

const style = [
  resetStyle,
  ...alertStyles(),
  ...accordionStyles(),
  ...avatarStyles(),
  ...blockquoteStyles(),
  ...checkboxStyles(),
  ...frameStyles(),

  ...outlinedMaterialChipStyles(),
  ...filledMaterialChipStyles(),

  ...filledMaterialButtonStyles(),
  ...outlinedMaterialButtonStyles(),
  ...standardMaterialButtonStyles(),

  ...filledButtonStyles(),
  ...outlinedButtonStyles(),
  ...standardButtonStyles(),

  ...listItemStyles(),
  ...listStyles(),

  ...snackStyles(),

  ...standardMaterialTextfieldStyles(),
  ...outlinedMaterialTextfieldStyles(),
  ...filledMaterialTextfieldStyles(),

  ...standardMaterialPasswordTextfieldStyles(),
  ...outlinedMaterialPasswordTextfieldStyles(),
  ...filledMaterialPasswordTextfieldStyles(),

  ...filledTextfieldStyles(),
  ...outlinedTextfieldStyles(),
  ...standardTextfieldStyles(),

  ...rippleStyles()
]
  .join(' ')
  .replaceAll(/\s+/g, ' ')

const dir = './dist/components'
fs.mkdirSync(dir, { recursive: true })
const fd = fs.openSync(`${dir}/styles.css`, 'w')
fs.writeSync(fd, style)
fs.closeSync(fd)
