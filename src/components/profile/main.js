import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Card } from "antd"
import LinkSection from './links'
import { DownOutlined, UpOutlined } from '@ant-design/icons'

const { Meta } = Card

// Tracking
// Make dynamic
const pic = ({ image, expand }) => (
  <img
    src={image.location}
    style={{ borderRadius: expand ? '50%' : '8%', maxWidth: expand ? 150 : 300 }}
    // width={300}
    // quality={95}
    // formats={["AUTO", "WEBP", "AVIF"]}
    alt={image.alt}
  />
)

const buildCred = ({ title, org, url }) => (
  <div key={org}>{title} at <a href={url}>{org}</a></div>
)

const Intro = data => {
  const { main, secondary, credentials, expand } = data

  return (
    <div>
      <div>{main} | {secondary}</div>
      {expand && credentials.map(buildCred)}
    </div>
  )
}

const Profile = () => {
  const [expand, setExpand] = useState(false)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            intro {
              name
              image {
                location
                alt
              }
              main
              secondary
              credentials {
                title
                org
                url
              }
            }
          }
        }
      }
    `
  )

  const { main, secondary, credentials, name, image } = site.siteMetadata.intro
  const ExpandIcon = expand ? UpOutlined : DownOutlined
  
  return (
    <Card
      title={null}
      hoverable
      style={{ minWidth: 320, padding: 20 }}
      cover={pic({ image, expand })}
      onClick={e => setExpand(!expand)}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Meta style={{ textAlign: 'center', marginBottom: 10 }} title={name} description={Intro({ main, secondary, credentials, expand })} />
        <LinkSection expand={expand} />
        <ExpandIcon id='expand-icon' key="setting" />
      </div>
    </Card>
  )
}

export default Profile
