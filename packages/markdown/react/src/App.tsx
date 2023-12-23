import { Parser, Token } from './parser'

const parser = new Parser('My name is **okm_t_yuta**, from _Kumamoto_!!')
const tokens = parser.do()

const compose = (tokens: Token[]) => {
  const _compose = (token: Token) => {
    if (token.type === 'text') {
      return <span>{token.content}</span>
    } else if (token.type === 'strong') {
      const texts = token.children.map((c) => _compose(c))
      return <strong>{texts}</strong>
    } else if (token.type === 'italic') {
      const texts = token.children.map((c) => _compose(c))
      return <i>{texts}</i>
    }

    return <span>root</span>
  }

  return tokens.map((t) => _compose(t))
}

export const App = () => {
  const components = compose(tokens)
  return <div>{components}</div>
}
