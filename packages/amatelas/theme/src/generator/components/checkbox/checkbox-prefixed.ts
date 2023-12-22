export const checkboxPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_checkbox_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
