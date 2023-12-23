import { avatarPrefixed } from './avatar-prefixed'

const base = /* css */ `
.${avatarPrefixed()} {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  flex-shrink: 0;
}
.${avatarPrefixed()} .${avatarPrefixed('image')} {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: var(--color-accents3) solid 1px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.${avatarPrefixed()} .${avatarPrefixed('name')} {
  font-size: var(--body1-size);
}
.${avatarPrefixed()} .${avatarPrefixed('account')} {
  font-size: var(--caption-size);
  color: var(--color-accents6);
}
.${avatarPrefixed()} .${avatarPrefixed('info')} {
  display: inline-flex;
  flex-direction: column;
}
`

export const avatarStyles = () => {
  const styles = [base]
  return styles
}
