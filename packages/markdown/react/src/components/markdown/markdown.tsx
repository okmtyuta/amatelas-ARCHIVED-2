import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import {
  Blockquote,
  Heading,
  List,
  ListItem,
  Paragraph
} from '@okmtyuta/amatelas-react/server'

export const Markdown = ({
  children,
  className
}: {
  children?: string
  className?: string
}) => {
  if (!children) {
    return <></>
  }
  return (
    <ReactMarkdown
      className={className}
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      components={{
        h1(props) {
          return <Heading element="h1">{props.children}</Heading>
        },

        h2(props) {
          return <Heading element="h2">{props.children}</Heading>
        },
        h3(props) {
          return <Heading element="h3">{props.children}</Heading>
        },
        h4(props) {
          return <Heading element="h4">{props.children}</Heading>
        },
        h5(props) {
          return <Heading element="h5">{props.children}</Heading>
        },
        h6(props) {
          return <Heading element="h6">{props.children}</Heading>
        },
        strong(props) {
          return <span>{props.children}</span>
        },
        em(props) {
          return <span>{props.children}</span>
        },
        p(props) {
          return <Paragraph>{props.children}</Paragraph>
        },
        ul(props) {
          return <List>{props.children}</List>
        },
        li(props) {
          return <ListItem>{props.children}</ListItem>
        },
        blockquote(props) {
          return <Blockquote>{props.children}</Blockquote>
        }
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
