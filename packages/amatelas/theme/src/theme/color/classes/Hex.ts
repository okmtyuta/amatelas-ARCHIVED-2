import { NotHexStringError } from '../error/NotHexStringError'
import { isHexString } from '../guards/isHexString'
import { HexString } from '../types/HexString'
import { RGBArray } from '../types/RGBArray'
import { RGB } from './RGB'

export class Hex {
  private _hexString: HexString
  private _rgbArray: RGBArray

  constructor(hexString: string) {
    if (!isHexString(hexString)) {
      throw new NotHexStringError(`${hexString} is not a hex string.`)
    }
    this._hexString = hexString
    this._rgbArray = this.toRGBArray()
  }

  toRGBArray(): RGBArray {
    const red = parseInt(this._hexString.slice(1, 3), 16)
    const green = parseInt(this._hexString.slice(3, 5), 16)
    const blue = parseInt(this._hexString.slice(5, 7), 16)

    return [red, green, blue]
  }

  getHexString() {
    return this._hexString
  }
  getRGBArray() {
    return this._rgbArray
  }

  getDarken(amount: number) {
    return new Hex(
      new RGB(this.getRGBArray()).getLighten(amount).getHexString()
    )
  }
  getLighten(amount: number) {
    return new Hex(new RGB(this.getRGBArray()).getDarken(amount).getHexString())
  }
  getSaturated(amount: number) {
    return new Hex(
      new RGB(this.getRGBArray()).getSaturated(amount).getHexString()
    )
  }
}
