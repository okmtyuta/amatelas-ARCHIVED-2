// Refer to https://mui.com/material-ui/react-chip/

import { ComponentPropsWithoutRef, ElementType } from 'react'
import { clsx } from 'clsx'

import { Color, MaterialChipVariant } from '@okmtyuta/amatelas-theme/types'
import { getMaterialChipPrefixed } from '@okmtyuta/amatelas-theme/helper'

type ChipColor = Color

type MaterialChipProps<T extends ElementType> = {
  as?: T
  variant?: MaterialChipVariant
  color?: ChipColor
  shade?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const getColor = (color?: Color) => {
  if (color) {
    return color
  }

  return 'info'
}

export const MaterialChip = <T extends ElementType = 'span'>({
  as,
  variant,
  color,
  ...props
}: MaterialChipProps<T>) => {
  const prefixed = getMaterialChipPrefixed(variant)
  const _Chip = as ?? 'span'
  const _color = getColor(color)
  return (
    <_Chip {...props} className={clsx(prefixed(), prefixed(_color))}>
      <span className={prefixed('text')}>{props.children}</span>
    </_Chip>
  )
}
