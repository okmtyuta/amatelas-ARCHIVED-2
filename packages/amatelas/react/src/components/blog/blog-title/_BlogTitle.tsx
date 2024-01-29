import { blogTitleClasses } from '@okmtyuta/amatelas-theme'

type _BlogTitleProps = {
  title?: string
  author?: string
  // posted?: Date
}

const classes = blogTitleClasses

export const _BlogTitle = ({ title, author }: _BlogTitleProps) => {
  return (
    <div className={classes.blogTitle}>
      <time>2024/01/30</time>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.author}>Author: {author}</div>
    </div>
  )
}
