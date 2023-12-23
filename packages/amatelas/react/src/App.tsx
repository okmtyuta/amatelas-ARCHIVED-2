import '@okmtyuta/amatelas-theme/styles'
import { Frame } from './components/server/frame'
// import { MaterialButton } from './components/effective/button'
import { MaterialTextField } from './components/server'

function App() {
  return (
    <Frame>
      <MaterialTextField placeholder='placeholder' variant="standard" />
      <MaterialTextField placeholder='placeholder' variant="outlined" />
      <MaterialTextField placeholder='placeholder' variant="filled" />
    </Frame>
  )
}

export default App
