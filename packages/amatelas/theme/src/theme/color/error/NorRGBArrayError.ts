export class NotRGBArrayError extends Error {
  static {
    this.prototype.name = 'NotRGBArrayError'
  }
  constructor(message?: string) {
    super(message)
  }
}
