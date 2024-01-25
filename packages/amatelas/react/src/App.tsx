import '@okmtyuta/amatelas-theme/styles'
import './index.css'
import { Frame } from './components/server'
import { Heading } from './components/server'
import { _Textarea } from './components/textarea/_Textarea'

function App() {
  return (
    <>
      <Frame className="frame">
        <Heading element="h1">Material From Item</Heading>

        <_Textarea variant="filled" placeholder="placeholder" />
        <div style={{ height: '256px' }}>
          <_Textarea material variant="filled" placeholder="placeholder" />
        </div>
        <div style={{ height: '256px' }}>
          <_Textarea material variant="outlined" placeholder="placeholder" />
        </div>
        <_Textarea material variant="outlined" placeholder="placeholder" />
        <_Textarea material variant="standard" placeholder="placeholder" />
      </Frame>
    </>
  )
}

export default App
