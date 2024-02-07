import {
  Heading,
  Paragraph,
  List,
  ListItem,
  Blockquote
} from '@okmtyuta/amatelas-react/server'
import { ReactNode } from 'react'

const h1 = (props: { children?: ReactNode }) => {
  return <Heading element="h1">{props.children}</Heading>
}
const h2 = (props: { children?: ReactNode }) => {
  return <Heading element="h2">{props.children}</Heading>
}
const h3 = (props: { children?: ReactNode }) => {
  return <Heading element="h3">{props.children}</Heading>
}
const h4 = (props: { children?: ReactNode }) => {
  return <Heading element="h4">{props.children}</Heading>
}
const h5 = (props: { children?: ReactNode }) => {
  return <Heading element="h5">{props.children}</Heading>
}
const h6 = (props: { children?: ReactNode }) => {
  return <Heading element="h6">{props.children}</Heading>
}
const strong = (props: { children?: ReactNode }) => {
  return <span>{props.children}</span>
}
const em = (props: { children?: ReactNode }) => {
  return <span>{props.children}</span>
}
const p = (props: { children?: ReactNode }) => {
  return <Paragraph>{props.children}</Paragraph>
}
const ul = (props: { children?: ReactNode }) => {
  return <List>{props.children}</List>
}
const li = (props: { children?: ReactNode }) => {
  return <ListItem>{props.children}</ListItem>
}
const blockquote = (props: { children?: ReactNode }) => {
  return <Blockquote>{props.children}</Blockquote>
}

export const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  em,
  p,
  ul,
  li,
  blockquote
}
