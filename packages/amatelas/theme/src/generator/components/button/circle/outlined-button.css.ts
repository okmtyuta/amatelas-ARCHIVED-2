// import { outlinedButtonPrefixed } from './button-prefixed'
// import { Hex } from '@src/theme/color/classes/Hex'
// import { color } from '@src/theme/color/color'

// const base = /* css */ `
// .${outlinedButtonPrefixed()} {
//   outline: none;
//   position: relative;
//   overflow: hidden;
//   padding: 12px 20px;
//   border-radius: 4px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 12px;
//   box-sizing: border-box;
//   cursor: pointer;
// }
// .${outlinedButtonPrefixed()}:disabled {
//   color: ${new Hex(color.neutral).getDarken(0.95).getHexString()};
//   background-color: ${new Hex(color.neutral).getLighten(0.9).getHexString()};
//   cursor: not-allowed;
//   border: ${new Hex(color.neutral).getDarken(0.95).getHexString()} 1px solid;
// }
// `
// const sizeVariations = () => {
//   const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 'auto']
//   const _sizeVariations: string[] = []

//   for (const size of sizes) {
//     _sizeVariations.push(/* css */ `
//     .${outlinedButtonPrefixed(size)} {
//       width: var(--AMUI-button-size-${size})
//     }
//     `)
//   }
//   return _sizeVariations
// }
// const colorVariations = () => {
//   const _colorVariations: string[] = []

//   for (const [_color, _code] of Object.entries(color)) {
//     const hex = new Hex(_code)
//     _colorVariations.push(/* css */ `
//     .${outlinedButtonPrefixed()}:not(:disabled).${outlinedButtonPrefixed(
//       _color
//     )} {
//         color: ${hex.getHexString()};
//         border: ${hex.getHexString()} solid 1px;
//         background-color: inherit;
    
//         &:hover {
//           background-color: ${hex.getLighten(0.95).getHexString()};
//         }
//       }
//     `)
//   }

//   return _colorVariations
// }

// export const outlinedButtonStyles = () => {
//   const styles = [base, ...colorVariations(), ...sizeVariations()]
//   return styles
// }
