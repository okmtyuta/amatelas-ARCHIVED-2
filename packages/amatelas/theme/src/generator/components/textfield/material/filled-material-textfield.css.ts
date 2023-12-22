import fs from "fs";
import { filledMaterialTextfieldPrefixed } from "./material-textfield-prefixed";
import { Hex } from "@src/theme/color/classes/Hex";
import { color } from "@src/theme/color/color";

const base = /* css */ `
.${filledMaterialTextfieldPrefixed()} {
  --blur-outline-color: gray;
  --focus-outline-color: ${color.info};
  --blur-color: gray;
  --focus-color: ${color.info};
  --transition-time: 0.3s;
  --base-z-index: 0;
  --error-underline-z-index: 10;
}

.${filledMaterialTextfieldPrefixed()} {
  position: relative;
  height: 52px;
  background-color: ${new Hex(color.neutral).getLighten(0.8).getHexString()};
}
.${filledMaterialTextfieldPrefixed()}::after {
  border-bottom: 1px solid var(--focus-outline-color);
  left: 0px;
  bottom: 0px;
  content: '';
  position: absolute;
  right: 0px;
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;
}
.${filledMaterialTextfieldPrefixed()}:has(.${filledMaterialTextfieldPrefixed(
  "input"
)}:focus)::after {
  transform: scaleX(1);
}
.${filledMaterialTextfieldPrefixed()}:not(:has(.${filledMaterialTextfieldPrefixed(
  "input"
)}:focus))::after {
  transform: scaleX(0);
}

.${filledMaterialTextfieldPrefixed("placeholder")} {
  position: absolute;
  margin: 0 12px;
  transform-origin: 0;
  transition: all var(--transition-time);
  pointer-events: none;
  color: var(--blur-color);

  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
}
.${filledMaterialTextfieldPrefixed("input")} {
  position: absolute;
  bottom: 0;
  padding: 13px 12px 0 12px;
  width: 100%;
  height: 100%;
  z-index: var(--base-z-index);
  border-bottom: var(--blur-outline-color) solid 1px;
}
.${filledMaterialTextfieldPrefixed(
  "input"
)}:focus + .${filledMaterialTextfieldPrefixed("placeholder")},
.${filledMaterialTextfieldPrefixed(
  "input"
)}:not(:placeholder-shown) + .${filledMaterialTextfieldPrefixed(
  "placeholder"
)} {
  transform: scale(0.8);
  top: -2px;
  transition: all var(--transition-time);
  pointer-events: none;
}
.${filledMaterialTextfieldPrefixed(
  "input"
)}:not(:placeholder-shown):not(:focus) + .${filledMaterialTextfieldPrefixed(
  "placeholder"
)} {
  color: var(--blur-color);
}
.${filledMaterialTextfieldPrefixed(
  "input"
)}:focus + .${filledMaterialTextfieldPrefixed("placeholder")} {
  color: var(--focus-color);
}

.${filledMaterialTextfieldPrefixed(
  "validate"
)} > .${filledMaterialTextfieldPrefixed("input")}:invalid {
  border-bottom: ${color.alert} solid 1px;
  z-index: var(--error-underline-z-index);
}
.${filledMaterialTextfieldPrefixed(
  "validate"
)} > .${filledMaterialTextfieldPrefixed(
  "input"
)}:invalid + .${filledMaterialTextfieldPrefixed("placeholder")} {
  color: ${color.alert};
}

.${filledMaterialTextfieldPrefixed("helper-text")} {
  color: gray;
  padding: 4px 12px;
  /* @include use-caption-font-size(); */
}

`;
// const sizeVariations = () => {
//   const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 'auto']
//   const _sizeVariations: string[] = []

//   for (const size of sizes) {
//     _sizeVariations.push(/* css */ `
//     .AMUI_amatelas-material-textfield_.AMUI_amatelas-material-textfield_${size} {
//       width: var(--AMUI-material-textfield-size-${size})
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
//     .AMUI_amatelas-material-textfield_.AMUI_amatelas-material-textfield_outlined:not(:disabled).AMUI_amatelas-material-textfield_${_color} {
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

export const generateFilledMaterialTextfield = () => {
  const dir = "./dist/components/textfield/material";
  fs.mkdirSync(dir, { recursive: true });
  const fd = fs.openSync(`${dir}/filled-material-textfield.css`, "w");
  fs.writeSync(fd, base);

  // for (const colorVariation of colorVariations()) {
  //   fs.writeSync(fd, colorVariation)
  // }
  // for (const sizeVariation of sizeVariations()) {
  //   fs.writeSync(fd, sizeVariation)
  // }
};

export const filledMaterialTextfieldStyles = () => {
  const styles = [base];
  return styles;
};
