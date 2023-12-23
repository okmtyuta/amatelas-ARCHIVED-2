/**
 * Attach prefix: AMUI-components_alert_
 */
export const alertPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_alert_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
