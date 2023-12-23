export const paragraphPrefixed = (target?: string) => {
  const prefix = 'AMUI-components_paragraph_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
