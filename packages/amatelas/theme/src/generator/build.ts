import fs from 'fs'

import { resetStyle } from './reset.css'
import { fontSizeStyle } from './font-size.css'
import { fontWeightStyle } from './font-weight.css'

import { accordionStyles } from './components/server/accordion/accordion.css'
import { alertStyles } from './components/server/alert/alert.css'
import { avatarStyles } from './components/server/avatar/avatar.css'
import { blockquoteStyles } from './components/server/blockquote/blockquote.css'
import { filledMaterialButtonStyles } from './components/server/button/material/filled-material-button.css'
import { outlinedMaterialButtonStyles } from './components/server/button/material/outlined-material-button.css'
import { standardMaterialButtonStyles } from './components/server/button/material/standard-material-button.css'
import { filledButtonStyles } from './components/server/button/native/filled-button.css'
import { outlinedButtonStyles } from './components/server/button/native/outlined-button.css'
import { standardButtonStyles } from './components/server/button/native/standard-button.css'
import { checkboxStyles } from './components/server/checkbox/checkbox.css'
import { filledMaterialChipStyles } from './components/server/chip/material/filled-material-chip.css'
import { outlinedMaterialChipStyles } from './components/server/chip/material/outlined-material-chip.css'
import { frameStyles } from './components/server/frame/frame.css'
import { listItemStyles } from './components/server/list/list-item.css'
import { listStyles } from './components/server/list/list.css'
import { snackStyles } from './components/server/snack/snack.css'
import { positionalStyles } from './components/positional/positional.css'
import { paragraphStyles } from './components/server/paragraph/paragraph.css'
import { headingStyles } from './components/server/heading/heading.css'
import { textfieldStyles } from './components/textfield/textfield.css'
import { materialFormItemStyles } from './components/material-form-item/material-form-item.css'
import { selectStyles } from './components/select/_experimental/select.css'
import { textareaStyles } from './components/server/textarea/textarea.css'
import { blogCardStyles } from './components/blog/blog-card/blog-card.css'
import { blogTitleStyles } from './components/blog/blog-title/blog-title.css'
import { modalStyles } from './components/modal/modal.css'
import { circleButtonStyles } from './components/button/circle/circle-button.css'
import { skeletonStyles } from './components/skeleton/skeleton.css'
import { flexStyles } from './components/flex/flex.css'

const style = [
  resetStyle,
  fontSizeStyle,
  fontWeightStyle,

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

  ...headingStyles(),

  ...listItemStyles(),
  ...listStyles(),

  ...snackStyles(),

  ...textfieldStyles(),

  ...materialFormItemStyles(),

  ...selectStyles(),

  ...paragraphStyles(),

  ...positionalStyles(),

  ...blogCardStyles(),
  ...blogTitleStyles(),

  ...textareaStyles(),

  ...modalStyles(),

  ...filledMaterialChipStyles(),

  ...circleButtonStyles(),

  ...skeletonStyles(),

  ...flexStyles()
]
  .join(' ')
  .replaceAll(/\s+/g, ' ')

const dir = './dist/components'
fs.mkdirSync(dir, { recursive: true })
const fd = fs.openSync(`${dir}/styles.css`, 'w')
fs.writeSync(fd, style)
fs.closeSync(fd)
