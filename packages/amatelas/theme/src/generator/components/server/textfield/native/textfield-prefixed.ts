export const standardTextfieldPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_textfield_standard_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
export const outlinedTextfieldPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_textfield_outlined_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
export const filledTextfieldPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_textfield_filled_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
