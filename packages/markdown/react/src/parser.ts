type TokenType = 'root' | 'text' | 'strong' | 'italic'

export interface Token {
  type: TokenType
  content: string
  children: Token[]
}

// interface RootToken extends Token {
//   type: 'root'
// }
// interface TextToken extends Token {
//   type: 'text'
// }
// interface StrongToken extends Token {
//   type: 'strong'
// }
// interface ItalicToken extends Token {
//   type: 'italic'
// }

const str = 'My name is **okmtyuta**, from _Kumamoto_!!'

export class Parser {
  text: string
  rest: string
  processing: string
  nodes: Token[]

  SPECIAL_CHARACTERS = ['*', '_', '\\']

  constructor(text: string) {
    this.text = text
    this.rest = text
    this.processing = ''
    this.nodes = []
  }

  includesSpecialCharacters(text?: string) {
    if (!text) {
      return false
    }
    return this.SPECIAL_CHARACTERS.includes(text)
  }
  clearProcessing() {
    this.processing = ''
  }
  canProcess() {
    return this.rest.length !== 0
  }
  hasProcessing() {
    return this.processing.length !== 0
  }
  hasNext() {
    return this.rest.length > 1
  }
  pushProcessing(char: string) {
    this.processing = this.processing + char
  }
  sliceRest(amount: number) {
    this.rest = this.rest.slice(amount)
  }
  pushAsTextToken(text: string) {
    this.nodes.push({
      type: 'text',
      content: text,
      children: []
    })
  }
  pushAsStrongToken(childTokens: Token[]) {
    this.nodes.push({
      type: 'strong',
      content: '',
      children: childTokens
    })
  }
  pushAsItalicToken(childTokens: Token[]) {
    this.nodes.push({
      type: 'italic',
      content: '',
      children: childTokens
    })
  }
  starProcess() {
    const next = this.rest.at(1)
    if (!next) {
      this.pushProcessing('*')
      this.sliceRest(1)
      return
    }

    if (next === '*') {
      const matched = this.rest.match(/\*\*(.+?)\*\*/)

      if (!matched) {
        this.pushProcessing('**')
        this.sliceRest(2)
        return
      }

      const strongWithDelimiter = matched[0]
      const strong = matched[1]
      const childTokens = new Parser(strong).do()
      this.pushAsStrongToken(childTokens)
      this.rest = this.rest.slice(strongWithDelimiter.length)
      return
    }

    const matched = this.rest.match(/\*(.+?)\*/)
    if (!matched) {
      this.pushProcessing('*')
      this.sliceRest(1)
      return
    }

    const italicWithDelimiter = matched[0]
    const italic = matched[1]
    const childTokens = new Parser(italic).do()
    this.pushAsItalicToken(childTokens)
    this.rest = this.rest.slice(italicWithDelimiter.length)

    return
  }
  underscoreProcess() {
    const next = this.rest.at(1)
    if (!next) {
      this.pushProcessing('_')
      this.sliceRest(1)
      return
    }

    if (next === '_') {
      const matched = this.rest.match(/__(.+?)__/)

      if (!matched) {
        this.pushProcessing('__')
        this.sliceRest(2)
        return
      }

      const strongWithDelimiter = matched[0]
      const strong = matched[1]

      const childTokens = new Parser(strong).do()
      this.pushAsStrongToken(childTokens)
      this.rest = this.rest.slice(strongWithDelimiter.length)
      return
    }

    const matched = this.rest.match(/_(.+?)_/)

    if (!matched) {
      this.pushProcessing('_')
      this.sliceRest(2)
      return
    }

    const italicWithDelimiter = matched[0]
    const italic = matched[1]
    const childTokens = new Parser(italic).do()
    this.pushAsItalicToken(childTokens)
    this.rest = this.rest.slice(italicWithDelimiter.length)
  }
  escapeProcess() {
    const next = this.rest.at(1)
    if (!next) {
      this.pushProcessing('\\')
      this.sliceRest(1)
      return
    }
    this.pushProcessing(next)
    this.sliceRest(2)
  }

  process() {
    if (!this.canProcess()) {
      if (this.hasProcessing()) {
        this.pushAsTextToken(this.processing)
        this.clearProcessing()
      }
      return
    }

    const current = this.rest[0]

    if (this.includesSpecialCharacters(current)) {
      this.pushAsTextToken(this.processing)
      this.clearProcessing()

      if (current === '*') {
        this.starProcess()

        return
      } else if (current === '_') {
        this.underscoreProcess()

        return
      } else if (current === '\\') {
        this.escapeProcess()

        return
      }
    }

    this.processing += current
    this.rest = this.rest.slice(1)
  }

  do(): Token[] {
    while (this.canProcess()) {
      this.process()
    }
    this.process()

    return this.nodes
  }
}

const p = new Parser(str)
p.do()
console.log(JSON.stringify(p.nodes))
