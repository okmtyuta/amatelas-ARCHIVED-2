import fs from "fs";
import { outlinedMaterialTextfieldPrefixed } from "./material-textfield-prefixed";
import { color } from "@src/theme/color/color";

const base = /* css */ `
.${outlinedMaterialTextfieldPrefixed()} {
  --blur-outline-color: gray;
  --focus-outline-color: ${color.info};
  --blur-color: gray;
  --focus-color: ${color.info};
  --transition-time: 0.3s;
  --base-z-index: 0;
  --blur-placeholder-z-index: 0;
  --input-z-index: 10;
  --placeholder-background-z-index: 20;
  --focus-placeholder-z-index: 30;
}

.${outlinedMaterialTextfieldPrefixed()} {
  position: relative;
  height: 52px;
  margin-top: 4px;
}
.${outlinedMaterialTextfieldPrefixed("placeholder")} {
  position: absolute;
  margin: 0 10px;
  padding: 0 2px;
  transform-origin: 0;
  transition: all var(--transition-time);
  pointer-events: none;
  color: var(--blur-color);
  z-index: var(--blur-placeholder-z-index);
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
}
.${outlinedMaterialTextfieldPrefixed("input")} {
  position: absolute;
  bottom: 0;
  padding: 12px;
  width: 100%;
  height: 100%;
  z-index: var(--input-z-index);
  border: var(--blur-outline-color) solid 1px;
  border-radius: 4px;
}
.${outlinedMaterialTextfieldPrefixed("input")}:focus {
  border: var(--focus-outline-color) solid 1px;
}
.${outlinedMaterialTextfieldPrefixed(
  "input"
)}:focus + .${outlinedMaterialTextfieldPrefixed("placeholder")},
.${outlinedMaterialTextfieldPrefixed(
  "input"
)}:not(:placeholder-shown) + .${outlinedMaterialTextfieldPrefixed(
  "placeholder"
)} {
  transform: scale(0.8);
  top: -0.5lh;
  transition: all var(--transition-time);
  pointer-events: none;
  z-index: var(--focus-placeholder-z-index);
}
.${outlinedMaterialTextfieldPrefixed(
  "input"
)}:focus + .${outlinedMaterialTextfieldPrefixed("placeholder")} {
  color: var(--focus-color);
}
.${outlinedMaterialTextfieldPrefixed(
  "input"
)}:not(:placeholder-shown):not(:focus) + .${outlinedMaterialTextfieldPrefixed(
  "placeholder"
)} {
  color: var(--blur-color);
}
.${outlinedMaterialTextfieldPrefixed("placeholder-background")} {
  position: absolute;
  margin: 0 10px;
  padding: 0 2px;
  transform-origin: 0;
  pointer-events: none;
  color: var(--blur-color);
  transform: scale(0.8);
  top: -0.5px;
  transition: all var(--transition-time);
  pointer-events: none;
  color: transparent;

  background-color: transparent;
  height: 2px;
  z-index: var(--placeholder-background-z-index);
}
.${outlinedMaterialTextfieldPrefixed(
  "input"
)}:focus ~ .${outlinedMaterialTextfieldPrefixed("placeholder-background")},
.${outlinedMaterialTextfieldPrefixed(
  "input"
)}:not(:placeholder-shown) ~ .${outlinedMaterialTextfieldPrefixed(
  "placeholder-background"
)} {
  background-color: white;
}

.${outlinedMaterialTextfieldPrefixed(
  "validate"
)} > .${outlinedMaterialTextfieldPrefixed("input")}:invalid {
  border: ${color.alert} solid 1px;
}
.${outlinedMaterialTextfieldPrefixed(
  "validate"
)} > .${outlinedMaterialTextfieldPrefixed(
  "input"
)}:invalid + .${outlinedMaterialTextfieldPrefixed("placeholder")} {
  color: ${color.alert};
}

.${outlinedMaterialTextfieldPrefixed("helper-text")} {
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

export const generateOutlinedMaterialTextfield = () => {
  const dir = "./dist/components/textfield/material";
  fs.mkdirSync(dir, { recursive: true });
  const fd = fs.openSync(`${dir}/outlined-material-textfield.css`, "w");
  fs.writeSync(fd, base);

  // for (const colorVariation of colorVariations()) {
  //   fs.writeSync(fd, colorVariation)
  // }
  // for (const sizeVariation of sizeVariations()) {
  //   fs.writeSync(fd, sizeVariation)
  // }
};

export const outlinedMaterialTextfieldStyles = () => {
  const styles = [base];
  return styles;
};
