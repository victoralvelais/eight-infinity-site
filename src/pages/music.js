import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'antd/dist/antd.css';
import "./index.css"

const fetchMusic = async () => {
  const response = await fetch('/.netlify/functions/music')
  // const response = await fetch('/api/music')
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
        <ul style={{ maxHeight: 400 }}>
          {music.map((music, index) => (
            <li key={index}>
              <a href={music}>{music}</a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default MusicPage
