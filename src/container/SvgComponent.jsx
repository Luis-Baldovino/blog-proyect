import * as React from "react"
export const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <circle cx={23} cy={22.5} r={22.5}/>
  </svg>
)