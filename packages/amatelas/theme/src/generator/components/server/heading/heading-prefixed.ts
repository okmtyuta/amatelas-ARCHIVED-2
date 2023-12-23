export const headingPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_heading_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
