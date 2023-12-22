import { clsx } from 'clsx'
import { AccountSVG } from '@src/svg'
import { ComponentProps } from 'react'

import { avatarPrefixed } from '@okmtyuta/amatelas-theme/prefixed'

type DefaultSpanProps = ComponentProps<'span'>
type AvatarProps = {
  name?: string
  account?: string
  iconUrl?: string
} & DefaultSpanProps

const getIcon = (iconUrl?: string) => {
  if (iconUrl) {
    return <img className={avatarPrefixed('image')} src={iconUrl} />
  }

  return <AccountSVG className={avatarPrefixed('image')} />
}

export const Avatar = ({ name, account, iconUrl, ...props }: AvatarProps) => {
  const icon = getIcon(iconUrl)
  return (
    <span {...props} className={clsx(avatarPrefixed(), props.className)}>
      <span>
        <div>{icon}</div>
      </span>
      <span className={avatarPrefixed('info')}>
        <span className={avatarPrefixed('name')}>{name}</span>
        <span className={avatarPrefixed('account')}>{account}</span>
      </span>
    </span>
  )
}
