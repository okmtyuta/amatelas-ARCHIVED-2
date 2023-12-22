/**
 * Attach prefix: AMUI-effect_ripple_
 */
export const ripplePrefixed = (target?: string) => {
  const prefix = 'AMUI-effect_ripple_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}