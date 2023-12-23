import { Attachment } from '../parser'

export const strongAttachment: Attachment = (
  _processed,
  _processing,
  option
) => {
  if (_processing.length < 2) {
    return {
      processed: _processed,
      processing: _processing,
      tokens: []
    }
  }

  if (!['**', '__'].includes(_processing.slice(0, 2))) {
    return {
      processed: _processed,
      processing: _processing,
      tokens: []
    }
  }

  if (_processing.slice(0, 2) === '**') {
    const matched = _processing.match(/\*\*(.+?)\*\*/)

    if (!matched) {
      const processed = _processed + '**'
      const processing = _processing.slice(2)

      return {
        processed: processed,
        processing: processing,
        tokens: []
      }
    }

    const strongWithDelimiter = matched[0]
    const strong = matched[1]

    const childTokens = option.childParser.set(strong).do()
    const textToken = {
      type: 'text',
      content: _processed,
      childTokens: []
    }
    const strongToken = {
      type: 'strong',
      content: '',
      childTokens
    }

    const processed = ''
    const processing = _processing.slice(strongWithDelimiter.length)

    return {
      processed,
      processing,
      tokens: [textToken, strongToken]
    }
  }
  if (_processing.slice(0, 2) === '__') {
    const matched = _processing.match(/__(.+?)__/)

    if (!matched) {
      const processed = _processed + '__'
      const processing = _processing.slice(2)

      return {
        processed: processed,
        processing: processing,
        tokens: []
      }
    }

    const strongWithDelimiter = matched[0]
    const strong = matched[1]

    const childTokens = option.childParser.set(strong).do()
    const textToken = {
      type: 'text',
      content: _processed,
      childTokens: []
    }
    const strongToken = {
      type: 'strong',
      content: '',
      childTokens
    }

    const processed = ''
    const processing = _processing.slice(strongWithDelimiter.length)

    return {
      processed,
      processing,
      tokens: [textToken, strongToken]
    }
  }

  return {
    processed: _processed,
    processing: _processing,
    tokens: []
  }
}
