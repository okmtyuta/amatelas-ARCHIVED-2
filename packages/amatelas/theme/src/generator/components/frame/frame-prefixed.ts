export const framePrefixed = (target?: string) => {
  const prefix = 'AMUI-components_frame_'
  if (target) {
    return `${prefix}${target}`
  }

  return prefix
}
