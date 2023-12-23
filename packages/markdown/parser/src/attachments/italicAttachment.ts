import { Attachment } from '../parser'

export const italicAttachment: Attachment = (
  _processed,
  _processing,
  option
) => {
  if (_processing.length < 1) {
    return {
      processed: _processed,
      processing: _processing,
      tokens: []
    }
  }

  if (!['*', '_'].includes(_processing.slice(0, 1))) {
    return {
      processed: _processed,
      processing: _processing,
      tokens: []
    }
  }

  if (_processing.at(0) === '*') {
    if (_processing.at(1) === '*') {
      return {
        processed: _processed,
        processing: _processing,
        tokens: []
      }
    }
    const matched = _processing.match(/\*(.+?)\*/)

    if (!matched) {
      const processed = _processed + '*'
      const processing = _processing.slice(1)

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
      type: 'italic',
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
  } else if (_processing.at(0) === '_') {
    if (_processing.at(1) === '_') {
      return {
        processed: _processed,
        processing: _processing,
        tokens: []
      }
    }
    const matched = _processing.match(/_(.+?)_/)

    if (!matched) {
      const processed = _processed + '_'
      const processing = _processing.slice(1)

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
      type: 'italic',
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
