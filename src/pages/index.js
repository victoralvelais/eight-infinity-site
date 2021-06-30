import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from '../components/profile/main'
import 'antd/dist/antd.css';
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Profile />
  </Layout>
)

export default IndexPage
