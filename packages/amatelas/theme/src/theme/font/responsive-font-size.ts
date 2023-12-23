import { FontSizeType, fontSize } from './font-size'

export const responsiveFontSize = (fontSizeType: FontSizeType) => {
  const style = /* css */ `
    /* mobile */
    @media screen and (max-width: 767px) {
      font-size: ${fontSize[fontSizeType].sp}px;
    }

    /* tablet */
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: ${fontSize[fontSizeType].tab}px;
    }

    /* pc */
    @media screen and (min-width: 1025px) {
      font-size: ${fontSize[fontSizeType].pc}px;
    }
  `

  return style
}
