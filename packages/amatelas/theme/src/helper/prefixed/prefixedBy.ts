type PrefixType = 'component' | 'effect' | "keyframes"

export const prefixedBy = (prefix: string, type?: PrefixType) => {
  const prefixed = (target?: string) => {
    const _type = type || 'component'
    const _prefix = `AMUI-${_type}-${prefix}_`
    if (target) {
      return `${_prefix}${target}`
    }

    return _prefix
  }

  return prefixed
}
