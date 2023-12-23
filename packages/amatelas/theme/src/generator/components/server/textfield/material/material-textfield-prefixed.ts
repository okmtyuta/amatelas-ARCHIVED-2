export const standardMaterialTextfieldPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_material-textfield_standard_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
export const outlinedMaterialTextfieldPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_material-textfield_outlined_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
export const filledMaterialTextfieldPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_material-textfield_filled_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
