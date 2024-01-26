import '@okmtyuta/amatelas-theme/styles'
import './index.css'
import { Frame, Textfield } from './components/server'
import { Heading } from './components/server'
import { _Textarea } from './components/textarea/_Textarea'

function App() {
  return (
    <>
      <Frame className="frame">
        <Heading element="h1">Material From Item</Heading>
        <Heading>Create Post</Heading>
        <Textfield placeholder="タイトル" />
        <div style={{ width: '100%', height: '256px' }}>
          <_Textarea onChange={(e) => {
            console.log(e.target.value)
          }} variant='outlined' placeholder="本文" />
        </div>
        -------------
        <Textfield placeholder="認証コード" type="password" />
      </Frame>
    </>
  )
}

export default App
