export const outlinedMaterialChipPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_material-chip_outlined_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
export const filledMaterialChipPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_material-chip_filled_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
