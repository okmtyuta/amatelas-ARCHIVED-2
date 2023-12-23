'use client'

import {
  MaterialPasswordTextField,
  PasswordTextfield
} from '@okmtyuta/amatelas-react/reactive'
import {
  Heading,
  MaterialTextField,
  Textfield
} from '@okmtyuta/amatelas-react/server'

import './page.css'

const TextfieldPage = () => {
  return (
    <main>
      <Heading as="h1">Textfield</Heading>
      <Heading as="h2">Native</Heading>

      <div className="stack">
        <Textfield
          prefix="prefix"
          suffix="suffix"
          placeholder="placeholder"
          variant="standard"
        />
        <Textfield
          prefix="prefix"
          suffix="suffix"
          placeholder="placeholder"
          variant="filled"
        />
        <Textfield
          prefix="prefix"
          suffix="suffix"
          placeholder="placeholder"
          variant="outlined"
        />
      </div>

      <div className="stack">
        <PasswordTextfield
          prefix="prefix"
          suffix="suffix"
          placeholder="placeholder"
          variant="standard"
        />
        <PasswordTextfield
          prefix="prefix"
          suffix="suffix"
          placeholder="placeholder"
          variant="filled"
        />
        <PasswordTextfield
          prefix="prefix"
          suffix="suffix"
          placeholder="placeholder"
          variant="outlined"
        />
      </div>

      <Heading as="h2">Material</Heading>

      <div className="stack">
        <MaterialTextField placeholder="placeholder" variant="standard" />
        <MaterialTextField placeholder="placeholder" variant="filled" />
        <MaterialTextField placeholder="placeholder" variant="outlined" />
      </div>

      <div className="stack">
        <MaterialPasswordTextField
          placeholder="placeholder"
          variant="standard"
        />
        <MaterialPasswordTextField placeholder="placeholder" variant="filled" />
        <MaterialPasswordTextField
          placeholder="placeholder"
          variant="outlined"
        />
      </div>
    </main>
  )
}

export default TextfieldPage
