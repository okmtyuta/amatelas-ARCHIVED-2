import { Frame } from '@okmtyuta/amatelas-react/server'

import '@okmtyuta/amatelas-theme/styles'
import 'katex/dist/katex.min.css'
import { Markdown } from '.'

export const App = () => {
  return (
    <Frame>
      <Markdown>
        {String.raw`
方程式\\\[x^2 - 2x - 1 = 0\\\]を解くことを考える。が実数であることに注意すれば...方程式\\\[x^2 - 2x - 1 = 0\\\]を解くことを考える。が実数であることに注意すれば...
\\\[
\begin{align}
  x^2 - 2x - 1 = 0
\end{align}
\\\]
`}
      </Markdown>
    </Frame>
  )
}
