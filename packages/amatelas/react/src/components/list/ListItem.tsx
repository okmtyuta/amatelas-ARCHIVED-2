import { ComponentProps, ReactNode } from 'react'

type MarkerType = 'done' | 'dangerous'
type Marker = MarkerType

type DefaultListItemProps = ComponentProps<'li'>
type MarkerListItemProps = DefaultListItemProps & {
  marker?: ReactNode
}
type ListItemProps = DefaultListItemProps & {
  marker?: Marker
}

import { listItemClasses } from '@okmtyuta/amatelas-theme'
import { DoneSVG, DangerousSVG, DiscSVG } from '@src/svg'

const classes = listItemClasses

const getMarker = (marker?: Marker) => {
  if (marker === 'done') {
    return <DoneSVG className={classes.done} />
  }

  if (marker === 'dangerous') {
    return <DangerousSVG className={classes.dangerous} />
  }

  return <DiscSVG className={classes.disc} />
}

export const MarkerListItem = ({ marker, ...props }: MarkerListItemProps) => {
  return (
    <li {...props} className={classes.listItem}>
      <span className={classes.marker}>{marker}</span>
      <span>{props.children}</span>
    </li>
  )
}

export const ListItem = ({ marker, ...props }: ListItemProps) => {
  const _marker = getMarker(marker)
  return (
    <li {...props} className={classes.listItem}>
      <span className={classes.marker}>{_marker}</span>
      <span>{props.children}</span>
    </li>
  )
}
