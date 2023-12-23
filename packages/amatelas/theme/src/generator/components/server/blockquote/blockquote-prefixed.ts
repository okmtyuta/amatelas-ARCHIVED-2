/**
 * Attach prefix: AMUI-components_blockquote_
 */
export const blockquotePrefixed = (target?: string) => {
  const prefix = 'AMUI-components_blockquote_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
