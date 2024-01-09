import { ClickEvent } from '@src/types'
import { RefObject, useState } from 'react'
import { _Ripple } from './_Ripple'
import { Ripple } from './types'

export const useRipple = <
  ClickElement extends HTMLElement,
  RefElement extends HTMLElement
>(
  ref: RefObject<RefElement>,
  radius: number
) => {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const onRipple = (event: ClickEvent<ClickElement>) => {
    if (ref.current) {
      const x =
        event.clientX - ref.current.getBoundingClientRect().x - radius / 2
      const y =
        event.clientY - ref.current.getBoundingClientRect().y - radius / 2

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

  const Ripples = () => {
    return (
      <>
        {ripples.map((ripple) => {
          return (
            <_Ripple radius={radius} center={ripple.center} key={ripple.key} />
          )
        })}
      </>
    )
  }

  return {
    ripples,
    setRipples,
    onRipple,
    Ripples
  }
}
