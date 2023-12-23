export const listPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_list_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
