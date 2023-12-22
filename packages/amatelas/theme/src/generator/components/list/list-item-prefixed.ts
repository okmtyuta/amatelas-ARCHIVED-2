export const listItemPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_list-item_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
