import '@okmtyuta/amatelas-theme/styles'
import { Frame } from './components/server/frame'
// import { MaterialButton } from './components/effective/button'
import { MaterialPasswordTextField } from './components/effective/password-textfield'

function App() {
  return (
    <Frame>
      <MaterialPasswordTextField placeholder="placeholder" />
      <MaterialPasswordTextField placeholder="placeholder" variant="filled" />
      <MaterialPasswordTextField placeholder="placeholder" variant="outlined" />
    </Frame>
  )
}

export default App
