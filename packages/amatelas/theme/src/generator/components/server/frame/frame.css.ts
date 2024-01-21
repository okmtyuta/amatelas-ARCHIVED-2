import { prefixedBy } from '@src/helper'

const _prefixed = prefixedBy('frame')

const frame = _prefixed()
const sizes = {
  xl: _prefixed('xl'),
  lg: _prefixed('lg'),
  md: _prefixed('md'),
  sm: _prefixed('sm'),
  xs: _prefixed('xs')
}

const base = /* css */ `
.${frame} {
  margin: 0 auto;
  padding: 0 24px;
}
`
const sizeVariations = () => {
  const _sizes = {
    xs: 860,
    sm: 860,
    md: 860,
    lg: 860,
    xl: 860
  } as const
  const _sizeKeys = ['xs', 'sm', 'md', 'lg', 'xl'] as const
  const _sizeVariations: string[] = []

  for (const key of _sizeKeys) {
    _sizeVariations.push(/* css */ `
      .${sizes[key]} {
        max-width: ${_sizes[key]}px;
      }
    `)
  }
  return _sizeVariations
}

export const frameClasses = { frame, sizes }

export const frameStyles = () => {
  const styles = [base, ...sizeVariations()]
  return styles
}
