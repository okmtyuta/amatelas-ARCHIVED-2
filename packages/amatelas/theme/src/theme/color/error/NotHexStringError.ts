export class NotHexStringError extends Error {
  static {
    this.prototype.name = 'NotHexStringError'
  }
  constructor(message: string) {
    super(message)
  }
}
