import { ComponentPropsWithoutRef, ElementType } from 'react'
import { FormatListBulletedSVG } from '@src/svg/FormatListBulletedSVG'
import { blogCardClasses } from '@okmtyuta/amatelas-theme'

type BlogCardProps<T extends ElementType> = {
  element?: T
  title?: string
  tags?: string[]
  author?: string
  description?: string
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const classes = blogCardClasses

export const BlogCard = <T extends ElementType = 'h1'>({
  element,
  title,
  tags = [],
  author,
  description,
  ...props
}: BlogCardProps<T>) => {
  const Element = element ?? 'div'
  return (
    <Element {...props} className={classes.blogCard}>
      <div className={classes.date}>2024/01/01</div>
      <h5 className={classes.title}>{title}</h5>
      <div className={classes.tags}>
        {tags.map((tag) => {
          return (
            <span className={classes.tag}>
              <FormatListBulletedSVG className={classes.tagIcon} />
              <span>{tag}</span>
            </span>
          )
        })}
      </div>
      <div className={classes.author}>Author: {author}</div>
      <p className={classes.description}>{description}</p>
    </Element>
  )
}
