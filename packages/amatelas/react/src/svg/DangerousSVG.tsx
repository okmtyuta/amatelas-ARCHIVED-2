import { SVGBaseProps } from './types/SVGBaseProps'

type DangerousProps = SVGBaseProps

export const DangerousSVG = ({ ...props }: DangerousProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M346.923-160 160-346.923v-266.154L346.923-800h266.154L800-613.077v266.154L613.077-160H346.923ZM366-337.692l114-114 114 114L622.308-366l-114-114 114-114L594-622.308l-114 114-114-114L337.692-594l114 114-114 114L366-337.692ZM364-200h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z" />
    </svg>
  )
}
