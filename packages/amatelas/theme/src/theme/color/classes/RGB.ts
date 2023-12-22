import { CannotComplementZeroError } from '../error/CannotComplementZeroError'
import { NotRGBArrayError } from '../error/NorRGBArrayError'
import { isRGBArray } from '../guards/isRGBArray'
import { HexString } from '../types/HexString'
import { RGBArray } from '../types/RGBArray'

const complementZero = (target: string) => {
  if (target.length > 2) {
    throw new CannotComplementZeroError()
  } else if (target.length === 2) {
    return target
  }

  return `0${target}`
}

export class RGB {
  private _hexString: HexString
  private _rgbArray: RGBArray

  constructor(rgbArray: RGBArray) {
    if (!isRGBArray(rgbArray)) {
      throw new NotRGBArrayError()
    }

    this._rgbArray = rgbArray
    this._hexString = this.toHexString()
  }

  toHexString(): HexString {
    const [_red, _green, _blue] = this.getRGBArray()
    const red = complementZero(_red.toString(16))
    const green = complementZero(_green.toString(16))
    const blue = complementZero(_blue.toString(16))

    return `#${red}${green}${blue}`
  }

  getHexString() {
    return this._hexString
  }
  getRGBArray() {
    return this._rgbArray
  }

  getLighten(amount: number) {
    const _lighten = (color: number) => {
      const _color = Math.trunc(color * (1 - amount))
      if (_color > 255) {
        return 255
      } else if (_color < 0) {
        return 0
      }

      return _color
    }

    const [_red, _green, _blue] = this.getRGBArray()
    const rgbArray: RGBArray = [
      _lighten(_red),
      _lighten(_green),
      _lighten(_blue)
    ]

    return new RGB(rgbArray)
  }

  getDarken(amount: number) {
    const _darken = (color: number) => {
      const _color = Math.trunc((255 - color) * amount + color)
      if (_color > 255) {
        return 255
      } else if (_color < 0) {
        return 0
      }

      return _color
    }

    const [_red, _green, _blue] = this.getRGBArray()
    const rgbArray: RGBArray = [_darken(_red), _darken(_green), _darken(_blue)]

    return new RGB(rgbArray)
  }

  getSaturated(amount: number) {
    const [_red, _green, _blue] = this.getRGBArray()
    if (Math.max(...this.getRGBArray()) === _red) {
      const _rgbArray: RGBArray = [
        Math.trunc(_red),
        Math.trunc(_green * amount),
        Math.trunc(_blue * amount)
      ]
      return new RGB(_rgbArray)
    } else if (Math.max(...this.getRGBArray()) === _green) {
      const _rgbArray: RGBArray = [
        Math.trunc(_red * amount),
        Math.trunc(_green),
        Math.trunc(_blue * amount)
      ]
      return new RGB(_rgbArray)
    }
    const _rgbArray: RGBArray = [
      Math.trunc(_red * amount),
      Math.trunc(_green * amount),
      Math.trunc(_blue)
    ]
    return new RGB(_rgbArray)
  }
}
