"use client"

import { _Select, _Option } from '@okmtyuta/amatelas-react/reactive'
import { Heading } from '@okmtyuta/amatelas-react/server'

const SelectPage = () => {
  return (
    <>
      <Heading as="h1">Select</Heading>

      <Heading as="h2">Native</Heading>
      <_Select placeholder="placeholder">
        <_Option as="option">Option1</_Option>
        <_Option as="option">Option2</_Option>
        <_Option as="option">Option3</_Option>
      </_Select>

      <Heading as="h2">Material</Heading>
      <_Select placeholder="placeholder" material>
        <_Option as="div">Option4</_Option>
        <_Option as="div">Option5</_Option>
        <_Option as="div">Option6</_Option>
      </_Select>
    </>
  )
}

export default SelectPage
