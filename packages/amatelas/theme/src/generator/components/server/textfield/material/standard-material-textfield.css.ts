import fs from "fs";
import { standardMaterialTextfieldPrefixed } from "./material-textfield-prefixed";
import { color } from "@src/theme/color/color";
import { responsiveFontSize } from "@src/theme/font/responsive-font-size";

const base = /* css */ `
.${standardMaterialTextfieldPrefixed()} {
  --blur-outline-color: gray;
  --focus-outline-color: ${color.info};
  --blur-color: gray;
  --focus-color: ${color.info};
  --transition-time: 0.3s;
  --base-z-index: 0;
  --error-underline-z-index: 10;
}

.${standardMaterialTextfieldPrefixed()} {
  position: relative;
  height: 52px;
  margin-top: 4px;

  &::after {
    border-bottom: 1px solid var(--focus-outline-color);
    left: 0px;
    bottom: 0px;
    content: '';
    position: absolute;
    right: 0px;
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    pointer-events: none;
  }
  &:has(.${standardMaterialTextfieldPrefixed("input")}:focus)::after {
    transform: scaleX(1);
  }

  &:not(:has(.${standardMaterialTextfieldPrefixed("input")}:focus))::after {
    transform: scaleX(0);
  }
}

.${standardMaterialTextfieldPrefixed("placeholder")} {
  position: absolute;
  transform-origin: 0;
  margin: 0 12px;
  transition: all var(--transition-time);
  pointer-events: none;
  color: var(--blur-color);

  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);

  ${responsiveFontSize("body1")}
}
.${standardMaterialTextfieldPrefixed("input")} {
  position: absolute;
  bottom: 0;
  padding: 13px 12px 0 12px;
  width: 100%;
  height: 100%;
  z-index: var(--base-z-index);
  border-bottom: var(--blur-outline-color) solid 1px;
}
.${standardMaterialTextfieldPrefixed(
  "input"
)}:focus + .${standardMaterialTextfieldPrefixed("placeholder")},
.${standardMaterialTextfieldPrefixed(
  "input"
)}:not(:placeholder-shown) + .${standardMaterialTextfieldPrefixed(
  "placeholder"
)} {
  transform: scale(0.8);
  top: -2px;
  transition: all var(--transition-time);
  pointer-events: none;
}
.${standardMaterialTextfieldPrefixed(
  "input"
)}:not(:placeholder-shown):not(:focus) + .${standardMaterialTextfieldPrefixed(
  "placeholder"
)} {
  color: var(--blur-color);
}
.${standardMaterialTextfieldPrefixed(
  "input"
)}:focus + .${standardMaterialTextfieldPrefixed("placeholder")} {
  color: var(--focus-color);
}

.${standardMaterialTextfieldPrefixed(
  "validate"
)} > .${standardMaterialTextfieldPrefixed("input")}:invalid {
  border-bottom: ${color.alert} solid 1px;
  z-index: var(--error-underline-z-index);
}
.${standardMaterialTextfieldPrefixed(
  "validate"
)} > .${standardMaterialTextfieldPrefixed(
  "input"
)}:invalid + .${standardMaterialTextfieldPrefixed("placeholder")} {
  color: ${color.alert};
}

.${standardMaterialTextfieldPrefixed("helper-text")} {
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
//     .AMUI_amatelas-material-textfield_.AMUI_amatelas-material-textfield_standard:not(:disabled).AMUI_amatelas-material-textfield_${_color} {
//       border: none;
//       color: ${hex.getHexString()};
//       background-color: transparent;
//       border: solid 1px transparent;
//       &:hover {
//         background-color: ${hex.getLighten(0.95).getHexString()};
//         border: solid 1px ${hex.getLighten(0.95).getHexString()};
//       }
//     }
//     `)
//   }

//   return _colorVariations
// }

export const generateStandardMaterialTextfield = () => {
  const dir = "./dist/components/textfield/material";
  fs.mkdirSync(dir, { recursive: true });
  const fd = fs.openSync(`${dir}/standard-material-textfield.css`, "w");
  fs.writeSync(fd, base);

  // for (const colorVariation of colorVariations()) {
  //   fs.writeSync(fd, colorVariation)
  // }
  // for (const sizeVariation of sizeVariations()) {
  //   fs.writeSync(fd, sizeVariation)
  // }
};

export const standardMaterialTextfieldStyles = () => {
  const styles = [base];
  return styles;
};
