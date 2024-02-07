import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import { components } from './components'

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
      components={components}
    >
      {children}
    </ReactMarkdown>
  )
}
