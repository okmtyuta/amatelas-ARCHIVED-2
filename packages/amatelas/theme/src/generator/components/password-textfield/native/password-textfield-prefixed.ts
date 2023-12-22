export const standardPasswordTextfieldPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_password-textfield_standard_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
export const outlinedPasswordTextfieldPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_password-textfield_outlined_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
export const filledPasswordTextfieldPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_password-textfield_filled_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
