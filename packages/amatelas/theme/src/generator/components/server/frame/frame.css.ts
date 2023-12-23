import { framePrefixed } from './frame-prefixed'

const base = /* css */ `
.${framePrefixed()} {
  margin: 0 auto;
  padding: 0 24px;
}
`
const sizeVariations = () => {
  const sizes = {
    xs: 860,
    sm: 860,
    md: 860,
    lg: 860,
    xl: 860
  }
  const _sizeVariations: string[] = []

  for (const [size, width] of Object.entries(sizes)) {
    _sizeVariations.push(/* css */ `
    .${framePrefixed(size)} {
      max-width: ${width}px;
    }
    `)
  }
  return _sizeVariations
}

export const frameStyles = () => {
  const styles = [base, ...sizeVariations()]
  return styles
}
