/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "./components/layout"
import Sidebar from "./components/sidebar"

export default ({ element, props }) => (
  <Layout {...props}>
    <Sidebar />
    <div sx={{ flex: `1` }}>{element}</div>
  </Layout>
)
