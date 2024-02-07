import '@okmtyuta/amatelas-theme/styles'
import { Button, Frame, _Textarea } from './components/server'
import { Heading } from './components/server'

import { _Flex } from './components/flex/Flex'
import { _Textfield } from './components/textfield/_Textfield'

function App() {
  return (
    <>
      <Frame className="frame">
        <Heading>Create Post</Heading>

        <_Textfield variant="embedded" defaultValue="INPUT YOUR TITLE..." />
        <_Textarea
          style={{ height: '240px' }}
          variant="embedded"
          defaultValue="INPUT YOUR BODY..."
        />

        <_Flex alignItems="center" style={{ gap: '12px' }} direction="column">
          <Button variant="filled" color="alert">
            BUTTON
          </Button>
          <Button variant="filled" color="alert">
            BUTTON
          </Button>
          <Button variant="filled" color="alert">
            BUTTON
          </Button>
        </_Flex>
        <Heading element="h6">--</Heading>
        <_Flex direction="row">
          <Button variant="filled" color="alert">
            BUTTON
          </Button>
          <Button variant="filled" color="alert">
            BUTTON
          </Button>
          <Button variant="filled" color="alert">
            BUTTON
          </Button>
        </_Flex>
      </Frame>
    </>
  )
}

export default App
