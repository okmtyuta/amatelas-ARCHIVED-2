interface _Structure {
  type: 'element' | 'string'
}
interface ElementStructure extends _Structure {
  type: 'element'
  tag: string
  component: 'HTML' | 'Amatelas'
  spread?: boolean
  props: {
    [key: string]: any
  }
  children: Structure[]
}
interface VariableStructure extends _Structure {
  type: 'string'
  expression: string
}
type Structure = ElementStructure | VariableStructure
type Source = {
  name: string
  defaultProps: string
  props: {
    [key: string]: string
  }
  structure: Structure
}

const structure: Structure = {
  type: 'element',
  tag: 'div',
  component: 'HTML',
  spread: true,
  props: {},
  children: [
    {
      type: 'element',
      tag: 'Heading',
      component: 'Amatelas',
      props: {
        element: 'h1'
      },
      children: [
        {
          type: 'string',
          expression: '{title}'
        },
        {
          type: 'element',
          tag: 'Paragraph',
          component: 'Amatelas',
          props: {},
          children: [
            {
              type: 'string',
              expression: '{date}'
            }
          ]
        }
      ]
    }
  ]
}

const struct = (
  structure: Structure,
  amatelasComponents: string[] = []
): { amatelasComponents: string[]; content: string } => {
  if (structure.type === 'element') {
    const child = structure.children
      .map((c) => {
        const { content } = struct(c, amatelasComponents)
        return content
      })
      .join(' ')
    const props = []
    for (const [key, value] of Object.entries(structure.props)) {
      if (typeof value === 'string') {
        props.push(`${key}='${value}'`)
      } else {
        props.push(`${key}={${value}}`)
      }
    }

    if (structure.component === 'Amatelas') {
      amatelasComponents.push(structure.tag)
    }

    const spread = structure.spread ? '{...props}' : ''

    return {
      amatelasComponents,
      content: `<${structure.tag} ${spread} ${props.join(' ')}>${child}</${structure.tag}>`
    }
  } else {
    return {
      amatelasComponents,
      content: structure.expression
    }
  }
}

const _blogTitleComponent: Source = {
  name: '_BlogTitle',
  defaultProps: 'div',
  props: {
    title: 'string',
    date: 'Date'
  },
  structure
}

const createComponent = (source: Source) => {
  const defaultPropName = `Default${source.defaultProps}Props`
  const propsTypeName = `${source.name}Props`
  const props = []
  for (const [key, value] of Object.entries(_blogTitleComponent.props)) {
    props.push(`${key}: ${value}`)
  }
  const propsString = `{${props.join(', ')}}`
  const propsSpread = `{${Object.keys(_blogTitleComponent.props).join(', ')}, ...props}`
  const { amatelasComponents, content } = struct(structure)

  return `
    import { ${amatelasComponents.join(', ')} } from '@okmtyuta/amatelas-react/server'
    import { ComponentProps } from 'react'

    type ${defaultPropName} = ComponentProps<'${source.defaultProps}'>

    type ${propsTypeName} = ${propsString} & ${defaultPropName}
    export const ${source.name} = (${propsSpread}: ${propsTypeName}) => {
      return ${content}
    }
  `
}

const result = createComponent(_blogTitleComponent)

console.log(result)
