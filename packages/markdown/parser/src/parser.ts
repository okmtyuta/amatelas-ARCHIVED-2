import { escapeAttachment } from './attachments/escapeAttachment'
import { italicAttachment } from './attachments/italicAttachment'
import { mathAttachment } from './attachments/mathAttachment'
import { strongAttachment } from './attachments/strongAttachment'

type ParseTarget = 'inline' | 'paragraph' | 'body'
export type Attachment = (
  _processed: string,
  _processing: string,
  option: {
    parser: Parser
    childParser: Parser
  }
) => {
  processed: string
  processing: string
  tokens: any[]
}
export const escapable = ['*', '_', '$']

export class Parser {
  attachments: {
    target: ParseTarget
    tokenizer: Attachment
  }[]
  text: string = ''
  processing: string = ''
  processed: string = ''
  tokens: any[] = []
  isReady: boolean = false

  constructor(
    attachments?: {
      target: ParseTarget
      tokenizer: Attachment
    }[]
  ) {
    this.attachments = attachments || []
  }

  set(text: string) {
    this.text = text
    this.processing = text
    this.isReady = true
    return this
  }
  register(attachment: Attachment, option?: { target?: ParseTarget }) {
    this.attachments.push({
      target: option?.target || 'inline',
      tokenizer: attachment
    })
    return this
  }

  isToTerminate() {
    return this.processing.length === 0 && this.processed.length === 0
  }
  consume() {
    const current = this.processing.at(0)
    if (current) {
      this.processed = this.processed + current
      this.processing = this.processing.slice(1)
    }

    if (!current && this.processed.length > 0) {
      this.tokens.push({
        type: 'text',
        content: this.processed
      })
      this.processed = ''
    }
  }

  process() {
    if (!this.isReady) {
      throw new Error()
    }

    for (const attachment of this.attachments) {
      const childParser = new Parser(this.attachments)
      const { processed, processing, tokens } = attachment.tokenizer(
        this.processed,
        this.processing,
        { parser: this, childParser: childParser }
      )

      this.processed = processed
      this.processing = processing
      this.tokens = [...this.tokens, ...tokens]
    }

    this.consume()
  }

  do() {
    while (!this.isToTerminate()) {
      this.process()
    }

    this.isReady = false
    return this.tokens
  }
}

const test = '\\* ecaped: AB**C_D_E**F__G__HI*J*KL $\\int a + b$'

const parser = new Parser()
parser.set(test)
parser
  .register(escapeAttachment)
  .register(strongAttachment)
  .register(italicAttachment)
  .register(mathAttachment)
  .do()

console.log(JSON.stringify(parser.tokens))
