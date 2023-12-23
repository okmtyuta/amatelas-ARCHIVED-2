import { Attachment } from "../parser"

export const mathAttachment: Attachment = (_processed, _processing, option) => {
  if (_processing.length < 1) {
    return {
      processed: _processed,
      processing: _processing,
      tokens: []
    }
  }

  if (!['$'].includes(_processing.slice(0, 1))) {
    return {
      processed: _processed,
      processing: _processing,
      tokens: []
    }
  }

  if (_processing.at(0) === '$') {
    const matched = _processing.match(/\$(.+?)\$/)

    if (!matched) {
      const processed = _processed + '$'
      const processing = _processing.slice(1)

      return {
        processed: processed,
        processing: processing,
        tokens: []
      }
    }

    const mathWithDelimiter = matched[0]
    const math = matched[1]

    const childTokens = option.childParser.set(math).do()
    const textToken = {
      type: 'text',
      content: _processed,
      childTokens: []
    }
    const mathToken = {
      type: 'math',
      content: '',
      childTokens
    }

    const processed = ''
    const processing = _processing.slice(mathWithDelimiter.length)

    return {
      processed,
      processing,
      tokens: [textToken, mathToken]
    }
  }

  return {
    processed: _processed,
    processing: _processing,
    tokens: []
  }
}
