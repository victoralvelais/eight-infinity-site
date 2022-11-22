import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MusicPlayer from "../components/music/player";
import 'antd/dist/antd.css';
import "./index.css"

export const Head = () => <SEO />

const fetchMusic = async () => {
  const response = await fetch('/.netlify/functions/music')
  const data = await response.json()
  console.log(data)
  return data
}

const MusicPage = () => {
  const [music, setMusic] = React.useState([])
  React.useEffect(() => {
    fetchMusic().then(data => setMusic(data.data))
  }, [])

  return (
    <Layout>
      <SEO />
      <section style={{ padding: 15 }}>
        <h1 style={{ textAlign: 'center' }}>Music</h1>
        <MusicPlayer links={music} />
      </section>
    </Layout>
  )
}

export default MusicPage
