import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from '../components/profile/main'
import 'antd/dist/antd.css';
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="@vcaiii" />
    <Profile />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
