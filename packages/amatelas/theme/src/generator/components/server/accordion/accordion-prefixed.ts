/**
 * Attach prefix: AMUI-components_accordion_
 */
export const accordionPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_accordion_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
