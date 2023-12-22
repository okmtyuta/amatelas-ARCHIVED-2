import { SVGBaseProps } from './types/SVGBaseProps'

export type WarningProps = SVGBaseProps

export const WarningSVG = ({ ...props }: WarningProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M117.23-165.538 480-791.385l362.77 625.847H117.23Zm63.847-36.924h597.846L480-717.538 181.077-202.462Zm298.818-55.999q10.336 0 16.913-6.472t6.577-16.808q0-10.336-6.472-16.913t-16.808-6.577q-10.336 0-16.913 6.472-6.577 6.471-6.577 16.808 0 10.336 6.472 16.913t16.808 6.577Zm-18.049-86.154h36.923v-198.154h-36.923v198.154ZM480-460Z" />
    </svg>
  )
}
