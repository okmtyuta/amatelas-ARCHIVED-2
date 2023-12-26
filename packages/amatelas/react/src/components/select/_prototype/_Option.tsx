import { ComponentProps, useContext, useRef, useState } from 'react'
import { SelectProvider } from '../useSelect/useSelect'
import { _Ripple } from '@src/components/ripple/_Ripple'
import { selectClasses } from '@okmtyuta/amatelas-theme'

type DefaultOptionProps = ComponentProps<'option'>
type DefaultDivProps = ComponentProps<'div'>
type _CommonOptionProps = {
  type: 'material' | 'native'
  material?: boolean
}
interface _OptionOptionProps extends _CommonOptionProps, DefaultOptionProps {
  type: 'native'
  children: string
  material?: false
}
interface _DivOptionProps extends _CommonOptionProps, DefaultDivProps {
  type: 'material'
  children: string
  material: true
}

type ClickEvent = React.MouseEvent<
  HTMLDivElement | HTMLOptionElement,
  MouseEvent
>
type Ripple = {
  center: {
    x: number
    y: number
  }
  key: string
}

const classes = selectClasses

export const _Option = ({
  children,
  material,
  ...props
}: _OptionOptionProps | _DivOptionProps) => {
  const _material = !!material
  const _label = children
  const _rippleRadius = 100
  const { setSelected, setFocus, setBlur, setQuery, query, as } =
    useContext(SelectProvider)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const ref = useRef<HTMLDivElement>(null)

  const onSelect = (e: ClickEvent) => {
    if (setSelected) {
      setSelected(_label)
    }
    if (setFocus) {
      setFocus(false)
    }
    if (setBlur) {
      setBlur(true)
    }
    if (setQuery && as === 'input') {
      setTimeout(() => {
        setQuery(_label)
      }, 300)
    }

    if (ref.current) {
      const x =
        e.clientX - ref.current.getBoundingClientRect().x - _rippleRadius / 2
      const y =
        e.clientY - ref.current.getBoundingClientRect().y - _rippleRadius / 2

      const key = crypto.randomUUID()

      setRipples((current) => [...current, { center: { x, y }, key }])
      setTimeout(() => {
        setRipples((current) => {
          return current.filter((ripple) => {
            return ripple.key !== key
          })
        })
      }, 800)
    }
  }

  if (props.type === 'material') {
    if (!_label.includes(query || '') && as === 'input') {
      return <></>
    }
    return (
      <div {...props} className={classes.option} onClick={onSelect} ref={ref}>
        {_label}
        {_material &&
          ripples.map((ripple) => {
            return (
              <_Ripple
                radius={_rippleRadius}
                center={ripple.center}
                key={ripple.key}
              />
            )
          })}
      </div>
    )
  }

  return (
    <option {...props} className={classes.option} onClick={onSelect}>
      {_label}
    </option>
  )
}
