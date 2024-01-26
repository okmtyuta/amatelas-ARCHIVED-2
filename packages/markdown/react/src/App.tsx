import { Frame } from '@okmtyuta/amatelas-react/server'

import '@okmtyuta/amatelas-theme/styles'
import './reset.css'
import { Markdown } from '.'

export const App = () => {
  return (
    <Frame>
      <Markdown>
        {String.raw`
# HELLO

- 1
- 2`}
      </Markdown>
    </Frame>
  )
}
