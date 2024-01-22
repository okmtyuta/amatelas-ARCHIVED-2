import '@okmtyuta/amatelas-theme/styles'
import { Frame } from './components/server'
import { Heading } from './components/server'
import { _Option } from './components/select/_prototype/_Option'
import { _Select } from './components/select/_prototype/_Select'

import './index.css'
import {
  _MaterialFormItem,
  _MaterialFormItemInput,
  _MaterialFormItemOutline,
  _MaterialFormItemPlaceholder
} from './components/material-form/_MaterialFormItem'

function App() {
  return (
    <Frame className="frame">
      <Heading element="h1">Material From Item</Heading>

      <div style={{ display: 'flex' }}>
        <div>prefix</div>
        <_MaterialFormItem variant="outlined" round={{ topLeft: true }}>
          <_MaterialFormItemPlaceholder>
            PLACEHOLDER
          </_MaterialFormItemPlaceholder>
          <_MaterialFormItemOutline />
          <_MaterialFormItemInput />
        </_MaterialFormItem>
        <div>suffix</div>
      </div>
      <_MaterialFormItem variant="filled">
        <_MaterialFormItemPlaceholder>PLACEHOLDER</_MaterialFormItemPlaceholder>
        <_MaterialFormItemOutline />
        <_MaterialFormItemInput />
      </_MaterialFormItem>
      <_MaterialFormItem variant="filled">
        <_MaterialFormItemOutline />
        <_MaterialFormItemInput />
      </_MaterialFormItem>
      <Heading element="h1">Select</Heading>

      <Heading element="h2">Native</Heading>
      <_Select as="select" placeholder="placeholder">
        <_Option _type="native">Option1</_Option>
        <_Option _type="native">Option2</_Option>
        <_Option _type="native">Option3</_Option>
      </_Select>

      <Heading element="h2">Material</Heading>
      <_Select as="div" material>
        <_Option _type="material">raise</_Option>
        <_Option _type="material">rise</_Option>
        <_Option _type="material">rose</_Option>
        <_Option _type="material">rice</_Option>
        <_Option _type="material">race</_Option>
        <_Option _type="material">mice</_Option>
        <_Option _type="material">mouse</_Option>
      </_Select>
    </Frame>
  )
}

export default App
