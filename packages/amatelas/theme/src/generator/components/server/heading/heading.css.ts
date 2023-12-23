import { headingPrefixed } from './heading-prefixed'

const base = /* css */ `
.${headingPrefixed()} {
  --heading1-top-space: 64px;
  --heading1-bottom-space: 24px;
  --heading2-top-space: 64px;
  --heading2-bottom-space: 24px;
  --heading3-top-space: 40px;
  --heading3-bottom-space: 24px;
  --heading4-top-space: 40px;
  --heading4-bottom-space: 16px;
  --heading5-top-space: 40px;
  --heading5-bottom-space: 16px;
  --heading6-top-space: 24px;
  --heading6-bottom-space: 16px;

  &.${headingPrefixed('h1')} {
    margin-top: var(--heading1-top-space);
    margin-bottom: var(--heading1-bottom-space);
    font-size: var(--heading1-size);
    font-weight: var(--heading1-weight);
  }
  &.${headingPrefixed('h2')} {
    margin-top: var(--heading2-top-space);
    margin-bottom: var(--heading2-bottom-space);
    font-size: var(--heading2-size);
    font-weight: var(--heading2-weight);
  }
  &.${headingPrefixed('h3')} {
    margin-top: var(--heading3-top-space);
    margin-bottom: var(--heading3-bottom-space);
    font-size: var(--heading3-size);
    font-weight: var(--heading3-weight);
  }
  &.${headingPrefixed('h4')} {
    margin-top: var(--heading4-top-space);
    margin-bottom: var(--heading4-bottom-space);
    font-size: var(--heading4-size);
    font-weight: var(--heading4-weight);
  }
  &.${headingPrefixed('h5')} {
    margin-top: var(--heading5-top-space);
    margin-bottom: var(--heading5-bottom-space);
    font-size: var(--heading5-size);
    font-weight: var(--heading5-weight);
  }
  &.${headingPrefixed('h6')} {
    margin-top: var(--heading6-top-space);
    margin-bottom: var(--heading6-bottom-space);
    font-size: var(--heading6-size);
    font-weight: var(--heading6-weight);
  }
}
`

export const headingStyles = () => {
  const styles = [base]
  return styles
}
