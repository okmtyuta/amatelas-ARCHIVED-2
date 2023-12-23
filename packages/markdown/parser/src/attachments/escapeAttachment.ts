import { Attachment, escapable } from '../parser'

export const escapeAttachment: Attachment = (_processed, _processing) => {
  if (_processing.at(0) !== '\\') {
    return {
      processed: _processed,
      processing: _processing,
      tokens: []
    }
  }

  const escaped = _processing.at(1)

  if (!escaped) {
    const processed = _processed + '\\'
    const processing = _processing.slice(1)
    return {
      processed,
      processing,
      tokens: []
    }
  }

  if (!escapable.includes(escaped)) {
    const processed = _processed + '\\' + escaped
    const processing = _processing.slice(2)
    return {
      processed,
      processing,
      tokens: []
    }
  }

  const processed = _processed + escaped
  const processing = _processing.slice(2)

  return {
    processed,
    processing,
    tokens: []
  }
}
