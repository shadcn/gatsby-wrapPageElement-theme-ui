/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          words
        }
      }
    }
  `)
  return (
    <div
      sx={{
        color: `secondary`,
        backgroundColor: `primary`,
      }}
    >
      <p>This is the sidebar</p>
      <ul>
        {data.site.siteMetadata.words.map(word => (
          <li>{word}</li>
        ))}
      </ul>
      <audio
        src="http://traffic.libsyn.com/atpfm/atp354.mp3?download=true"
        controls
      />
    </div>
  )
}
