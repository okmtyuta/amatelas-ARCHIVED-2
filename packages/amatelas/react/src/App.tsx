import '@okmtyuta/amatelas-theme/styles'
import { Frame } from './components/server/frame'
import { Heading } from './components/server'
import { _Option } from './components/select/_prototype/_Option'
import { _Select } from './components/select/_prototype/_Select'

import './index.css'
import './material-form.css'

function App() {
  return (
    <Frame className="frame">
      <Heading as="h1">Select</Heading>

      <Heading as="h2">Native</Heading>
      <_Select placeholder="placeholder">
        <_Option as="option">Option1</_Option>
        <_Option as="option">Option2</_Option>
        <_Option as="option">Option3</_Option>
      </_Select>

      <Heading as="h2">Material</Heading>
      <_Select placeholder="placeholder" material>
        <_Option as="div">Option4</_Option>
        <_Option as="div">Option5</_Option>
        <_Option as="div">Option6</_Option>
      </_Select>
    </Frame>
  )
}

export default App
