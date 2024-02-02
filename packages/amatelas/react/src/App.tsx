import '@okmtyuta/amatelas-theme/styles'
import './index.css'
import { Alert, Frame } from './components/server'
import { Heading } from './components/server'
import { _AddActionButton } from './components/button/actions/add/_AddActionButton'

function App() {
  return (
    <>
      <Frame className="frame">
        <Alert>this is ae</Alert>
        <_AddActionButton />

        <Heading>Create Post</Heading>
      </Frame>
    </>
  )
}

export default App
