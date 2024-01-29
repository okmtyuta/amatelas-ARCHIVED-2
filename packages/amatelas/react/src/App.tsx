import '@okmtyuta/amatelas-theme/styles'
import './index.css'
import { Frame } from './components/server'
import { Heading } from './components/server'
import { _BlogTitle } from './components/blog/blog-title/_BlogTitle'

function App() {
  return (
    <>
      <Frame className="frame">
        <Heading element="h1">Material From Item</Heading>

        <_BlogTitle
          title="品質の可視化への取り組み：バグ管理の事例紹介"
          author="okmtyuta"
          // posted={new Date()}
        />
        <Heading>Create Post</Heading>
      </Frame>
    </>
  )
}

export default App
