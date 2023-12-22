/**
 * Attach prefix: AMUI-components_material-button-standard_
 */
export const standardMaterialButtonPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_material-button_standard_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}

/**
 * Attach prefix: AMUI-components_material-button-outlined_
 */
export const outlinedMaterialButtonPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_material-button_outlined_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}

/**
 * Attach prefix: AMUI-components_material-button-filled_
 */
export const filledMaterialButtonPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_material-button_filled_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
