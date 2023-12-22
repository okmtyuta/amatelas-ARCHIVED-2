import { HexString } from '../types/HexString'

export const isHexString = (source: unknown): source is HexString => {
  if (typeof source !== 'string') {
    return false
  }
  if (!source.startsWith('#')) {
    return false
  }

  const hexRegExp = new RegExp('^#[0-9a-fA-F]{6}$')

  if (!hexRegExp.test(source)) {
    return false
  }

  return true
}
