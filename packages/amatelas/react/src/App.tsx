import '@okmtyuta/amatelas-theme/styles'
import { Frame } from './components/server'
import { Heading } from './components/server'

import { _Skeleton } from './components/skelton/_Skeleton'
import { useEffect, useState } from 'react'

const _sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec))

function App() {
  const [loading, setLoading] = useState(false)
  const [heading, setHeading] = useState('dummy')

  useEffect(() => {
    const sleep = async () => {
      setLoading(true)
      await _sleep(3000)
      setHeading('THIS IS A HEADING')
      setLoading(false)
    }

    sleep()
  }, [])
  return (
    <>
      <Frame className="frame">
        <Heading>Create Post</Heading>

        <_Skeleton hidden={loading}>
          <Heading>{heading}</Heading>
        </_Skeleton>
      </Frame>
    </>
  )
}

export default App
