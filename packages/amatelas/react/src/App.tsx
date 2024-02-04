import '@okmtyuta/amatelas-theme/styles'
import { Alert, Chip, Frame } from './components/server'
import { Heading } from './components/server'
import { _AddActionButton } from './components/button/actions/add/_AddActionButton'

function App() {
  return (
    <>
      <Frame className="frame">
        <Alert>this is ae</Alert>
        <_AddActionButton />
        <_AddActionButton variant="filled" />
        <_AddActionButton variant="outlined" />

        <Chip>Chip</Chip>

        <Heading>Create Post</Heading>
      </Frame>
    </>
  )
}

export default App
