import { SVGBaseProps } from './types/SVGBaseProps'

type NorthEastSVGProps = {
  weight?: 200 | 300 | 500 | 700
} & SVGBaseProps

export const NorthEastSVG = ({ weight, ...props }: NorthEastSVGProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      {weight === 200 ? (
        <path d="M228.308-200 200-228.308 651.692-680H360v-40h360v360h-40v-291.692L228.308-200Z" />
      ) : weight === 300 ? (
        <path d="m222.154-180.001-42.153-42.153L637.847-680H360v-59.999h379.999V-360H680v-277.847L222.154-180.001Z" />
      ) : weight === 700 ? (
        <path d="m214-128-88-88 451-451H345v-126h446v446H665v-232L214-128Z" />
      ) : weight === 500 ? (
        <path d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z" />
      ) : (
        <path d="M228.308-200 200-228.308 651.692-680H360v-40h360v360h-40v-291.692L228.308-200Z" />
      )}
    </svg>
  )
}
