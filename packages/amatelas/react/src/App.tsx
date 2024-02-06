import '@okmtyuta/amatelas-theme/styles'
import { Button, Frame, Paragraph, _BlogTitle } from './components/server'
import { Heading } from './components/server'

import { _Skeleton } from './components/skelton/_Skeleton'
import { useState, useEffect } from 'react'
import { _Flex } from './components/flex/Flex'
const _sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec))

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const sleep = async () => {
      setLoading(true)
      await _sleep(3000)
      setLoading(false)
    }

    sleep()
  }, [])

  return (
    <>
      <Frame className="frame">
        <Heading>Create Post</Heading>

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
