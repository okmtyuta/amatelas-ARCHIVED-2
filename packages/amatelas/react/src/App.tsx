import '@okmtyuta/amatelas-theme/styles'
import { Frame } from './components/server'
import { Heading } from './components/server'

import './index.css'
import {
  _MaterialFormItem,
  _MaterialFormItemInput,
  _MaterialFormItemPlaceholder,
  _MaterialFormItemOutline
} from './components/material-form/_MaterialFormItem'

function App() {
  return (
    <>
      <Frame className="frame">
        <Heading>Create Post</Heading>
        <_MaterialFormItem variant="standard">
          <_MaterialFormItemOutline />
          <_MaterialFormItemPlaceholder>
            placeholder
          </_MaterialFormItemPlaceholder>
          <_MaterialFormItemInput as="input" />
        </_MaterialFormItem>

        <_MaterialFormItem variant="filled">
          <_MaterialFormItemOutline />
          <_MaterialFormItemPlaceholder>
            placeholder
          </_MaterialFormItemPlaceholder>
          <_MaterialFormItemInput as="input" />
        </_MaterialFormItem>

        <_MaterialFormItem variant="outlined">
          <_MaterialFormItemOutline />
          <_MaterialFormItemPlaceholder>
            placeholder
          </_MaterialFormItemPlaceholder>
          <_MaterialFormItemInput as="input" />
        </_MaterialFormItem>
      </Frame>
    </>
  )
}

export default App
