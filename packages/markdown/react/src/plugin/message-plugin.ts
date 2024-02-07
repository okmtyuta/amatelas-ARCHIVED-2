// import { visit } from 'unist-util-visit'

// const infoRegExp = /^i&gt;|i>\s/
// const warningRegExp = /^w&gt;|w>\s/
// const errorRegExp = /^e&gt;|e>\s/
// const successRegExp = /^s&gt;|s>\s/

// export const messageRemarkPlugin = () => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const visiter = (node: any) => {
//     const children = node.children

//     if (children.length === 0) {
//       return node
//     }

//     const firstChild = children[0]

//     if (infoRegExp.test(firstChild.value)) {
//       const symbolRemovedFirstChild = {
//         ...firstChild,
//         value: firstChild.value.replace(infoRegExp, '')
//       }
//       children[0] = symbolRemovedFirstChild
//       node.data = node.data || {}
//       node.data.hProperties = { children: children, variant: 'info' }
//       node.data.hName = 'message'

//       return node
//     } else if (warningRegExp.test(firstChild.value)) {
//       const symbolRemovedFirstChild = {
//         ...firstChild,
//         value: firstChild.value.replace(warningRegExp, '')
//       }
//       children[0] = symbolRemovedFirstChild
//       node.data = node.data || {}
//       node.data.hProperties = { children: children, variant: 'warning' }
//       node.data.hName = 'message'

//       return node
//     } else if (errorRegExp.test(firstChild.value)) {
//       const symbolRemovedFirstChild = {
//         ...firstChild,
//         value: firstChild.value.replace(errorRegExp, '')
//       }
//       children[0] = symbolRemovedFirstChild
//       node.data = node.data || {}
//       node.data.hProperties = { children: children, variant: 'error' }
//       node.data.hName = 'message'

//       return node
//     } else if (successRegExp.test(firstChild.value)) {
//       const symbolRemovedFirstChild = {
//         ...firstChild,
//         value: firstChild.value.replace(successRegExp, '')
//       }
//       children[0] = symbolRemovedFirstChild
//       node.data = node.data || {}
//       node.data.hProperties = { children: children, variant: 'success' }
//       node.data.hName = 'message'

//       return node
//     }

//     return node
//   }
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const transformer = (tree: any) => {
//     visit(tree, 'paragraph', visiter)
//   }

//   return transformer
// }