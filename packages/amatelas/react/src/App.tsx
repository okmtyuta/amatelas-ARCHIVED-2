import '@okmtyuta/amatelas-theme/styles'
import { Frame } from './components/server/frame'
import { Heading } from './components/server'
import { _Option } from './components/select/_prototype/_Option'
import { _Select } from './components/select/_prototype/_Select'

function App() {
  return (
    <Frame className="frame">
      <Heading as="h1">Select</Heading>

      <Heading as="h2">Native</Heading>
      <_Select as="select" placeholder="placeholder">
        <_Option type="native">Option1</_Option>
        <_Option type="native">Option2</_Option>
        <_Option type="native">Option3</_Option>
      </_Select>

      <Heading as="h2">Material</Heading>
      <_Select as="input" placeholder="placeholder" material>
        <_Option type="material" material>
          raise
        </_Option>
        <_Option type="material" material>
          rise
        </_Option>
        <_Option type="material" material>
          rose
        </_Option>
        <_Option type="material" material>
          rice
        </_Option>
        <_Option type="material" material>
          race
        </_Option>
        <_Option type="material" material>
          mice
        </_Option>
        <_Option type="material" material>
          mouse
        </_Option>
      </_Select>
      {/* <_Select as="div" placeholder="placeholder" material>
        <_Option type="material" material>
          raise
        </_Option>
        <_Option type="material" material>
          rise
        </_Option>
        <_Option type="material" material>
          rose
        </_Option>
        <_Option type="material" material>
          rice
        </_Option>
        <_Option type="material" material>
          race
        </_Option>
        <_Option type="material" material>
          mice
        </_Option>
        <_Option type="material" material>
          mouse
        </_Option>
      </_Select> */}
    </Frame>
  )
}

export default App
