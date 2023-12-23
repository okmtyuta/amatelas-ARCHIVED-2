export const fontSize = {
  title: {
    pc: 48,
    tab: 45,
    sp: 42
  },
  heading1: {
    pc: 36,
    tab: 30,
    sp: 30
  },
  heading2: {
    pc: 30,
    tab: 26,
    sp: 26
  },
  heading3: {
    pc: 26,
    tab: 22,
    sp: 22
  },
  heading4: {
    pc: 24,
    tab: 20,
    sp: 20
  },
  heading5: {
    pc: 22,
    tab: 18,
    sp: 18
  },
  heading6: {
    pc: 18,
    tab: 16,
    sp: 16
  },
  subtitle1: {
    pc: 16,
    tab: 16,
    sp: 16
  },
  subtitle2: {
    pc: 14,
    tab: 14,
    sp: 14
  },
  body1: {
    pc: 16,
    tab: 16,
    sp: 16
  },
  body2: {
    pc: 14,
    tab: 14,
    sp: 14
  },
  button: {
    pc: 14,
    tab: 14,
    sp: 14
  },
  caption: {
    pc: 12,
    tab: 12,
    sp: 12
  },
  overline: {
    pc: 10,
    tab: 10,
    sp: 10
  }
} as const

export type FontSizeType = keyof typeof fontSize
