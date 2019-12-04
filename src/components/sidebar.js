/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => {
  return (
    <div
      sx={{
        color: `secondary`,
        backgroundColor: `primary`,
      }}
    >
      <p>This is the sidebar</p>
      <audio
        src="http://traffic.libsyn.com/atpfm/atp354.mp3?download=true"
        controls
      />
    </div>
  )
}
