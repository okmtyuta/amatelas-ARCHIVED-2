import '@okmtyuta/amatelas-theme/styles'
import { Frame, Paragraph, _BlogTitle } from './components/server'
import { Heading } from './components/server'

import { _Skeleton } from './components/skelton/_Skeleton'
import { useState, useEffect } from 'react'
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

        {loading ? (
          <>
            <div style={{ padding: '24px 0 12px 0' }}>
              <_Skeleton
                style={{ height: '24px', width: '96px' }}
                variant="rounded"
              />
              <_Skeleton
                style={{
                  height: '48px',
                  marginTop: '6px',
                  marginBottom: '12px'
                }}
                variant="rounded"
              />
              <_Skeleton
                style={{ height: '18px', width: '192px' }}
                variant="rounded"
              />
            </div>

            <_Skeleton variant="text" />
            <_Skeleton variant="text" />
            <_Skeleton variant="text" />
            <_Skeleton variant="text" />
            <_Skeleton variant="text" />
            <_Skeleton variant="text" />
            <_Skeleton variant="text" />
            <_Skeleton variant="text" />
          </>
        ) : (
          <>
            <_BlogTitle title="title" author="author" />
            <Paragraph>
              are you using a supported 1.9k Card type? Product, Gallery and
              Photo card types were removed in mid-2015 791. Is the card type
              spelled correctly, or is there a typo? if your image is not
              showing in the preview on Twitter, is it accessible on a URL that
              is not blocked by your robots.txt file? Does it conform to our
              size constraints? Are you using an absolute and full URL
              (including the https protocol piece), not a relative one? if you
              see a validator message about Fetching the page failed because
              other errors or similar, check your SSL configuration. The
              certificate and server name must match (or be aliased to match)
              due to Java security constraints. More in this thread 667. are you
              using a fully qualified DNS domain name? The crawler does not
              support numerical IP addresses as domain references, and cannot
              access localhost. There is much more Troubleshooting 1.7k
              information on our Developer site.
            </Paragraph>
          </>
        )}
      </Frame>
    </>
  )
}

export default App
