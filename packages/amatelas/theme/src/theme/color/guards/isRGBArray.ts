import { RGBArray } from '../types/RGBArray'

export const isRGBArray = (source: unknown): source is RGBArray => {
  if (!Array.isArray(source)) {
    return false
  }
  if (source.length !== 3) {
    return false
  }

  return source.every((item) => Number.isInteger(item))
}
