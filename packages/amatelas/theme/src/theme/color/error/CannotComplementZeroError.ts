export class CannotComplementZeroError extends Error {
  static {
    this.prototype.name = 'CannotComplementZeroError'
  }
  constructor(message?: string) {
    super(message)
  }
}
