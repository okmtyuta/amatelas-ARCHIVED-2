export const standardButtonPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_button_standard_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
export const outlinedButtonPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_button_outlined_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
export const filledButtonPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_button_filled_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
