/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children }) => (
  <div
    sx={{
      color: `primary`,
      backgroundColor: `secondary`,
      display: `flex`,
    }}
  >
    {children}
  </div>
)
