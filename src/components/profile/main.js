import React from 'react'
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Card } from "antd"
import LinkSection from './links'

const { Meta } = Card

// const pic = image => {
//   return (
//     <GatsbyImage
//       src={getImage(image.location)}
//       width={300}
//       formats={["AUTO", "WEBP", "AVIF"]}
//       alt={image.alt}
//       style={{ borderRadius: '8%' }}
//     />
//   )
// }

const pic = () => (
  <StaticImage
    src="../../images/Gold-Smile.jpg"
    width={300}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="Great Face"
    style={{ borderRadius: '8%' }}
  />
)

const buildCred = ({ title, org, url }) => (
  <div key={org}>{title} at <a href={url}>{org}</a></div>
)

const Intro = data => {
  const { main, secondary, credentials } = data

  return (
    <div>
      <div>{main}</div>
      <div>{secondary}</div>
      <br />
      {credentials.map(buildCred)}
    </div>
  )
}

const Profile = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            intro {
              name
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

  console.log(site.siteMetadata.intro)
  const { main, secondary, credentials, name } = site.siteMetadata.intro
  
  return (
    <Card
      title={<span></span>}
      hoverable
      style={{ minWidth: 320 }}
      cover={pic()}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Meta style={{ textAlign: 'center', marginBottom: 10 }} title={name} description={Intro({ main, secondary, credentials })} />
        <LinkSection />
      </div>
    </Card>
  )
}

export default Profile
