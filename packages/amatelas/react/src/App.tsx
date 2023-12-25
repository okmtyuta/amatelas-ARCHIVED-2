import '@okmtyuta/amatelas-theme/styles'
import { Frame } from './components/server/frame'
import { Heading } from './components/server'

function App() {
  return (
    <Frame className="frame">
      <Heading as="h3">Select</Heading>
    </Frame>
  )
}

export default App
