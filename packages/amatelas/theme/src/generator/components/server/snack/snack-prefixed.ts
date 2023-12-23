export const snackPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_snack'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}