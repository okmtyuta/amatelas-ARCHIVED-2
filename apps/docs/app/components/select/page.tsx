'use client'

import { _Select, _Option } from '@okmtyuta/amatelas-react/reactive'
import { Heading } from '@okmtyuta/amatelas-react/server'

const SelectPage = () => {
  return (
    <>
      <Heading as="h1">Select</Heading>

      <Heading as="h2">Native</Heading>
      <_Select as="select" placeholder="placeholder">
        <_Option type="native">Option1</_Option>
        <_Option type="native">Option2</_Option>
        <_Option type="native">Option3</_Option>
      </_Select>

      <Heading as="h2">Material</Heading>
      <_Select as="input" placeholder="placeholder" material>
        <_Option type="material" material>
          raise
        </_Option>
        <_Option type="material" material>
          rise
        </_Option>
        <_Option type="material" material>
          rose
        </_Option>
        <_Option type="material" material>
          rice
        </_Option>
        <_Option type="material" material>
          race
        </_Option>
        <_Option type="material" material>
          mice
        </_Option>
        <_Option type="material" material>
          mouse
        </_Option>
      </_Select>
    </>
  )
}

export default SelectPage
