'use client'

import { MaterialButton } from '@okmtyuta/amatelas-react/reactive'
import { Button, Heading } from '@okmtyuta/amatelas-react/server'

import './page.css'

const ButtonPage = () => {
  return (
    <main>
      <Heading as="h1">Textfield</Heading>
      <Heading as="h2">Native</Heading>

      <div className="stack">
        <Button variant="standard">Button</Button>
        <Button variant="filled">Button</Button>
        <Button variant="outlined">Button</Button>
      </div>

      <Heading as="h2">Material</Heading>

      <div className="stack">
        <MaterialButton variant="standard">Button</MaterialButton>
        <MaterialButton variant="filled">Button</MaterialButton>
        <MaterialButton variant="outlined">Button</MaterialButton>
      </div>
    </main>
  )
}

export default ButtonPage
