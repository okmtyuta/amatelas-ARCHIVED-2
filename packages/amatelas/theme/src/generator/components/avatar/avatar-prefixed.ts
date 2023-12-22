/**
 * Attach prefix: AMUI-components_avatar_
 */
export const avatarPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_avatar_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
