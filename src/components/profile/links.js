import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Icons from '../../assets/icons'

const socialLink = ({ url, org }) => {
  const Icon = Icons[org]
  console.log(Icon)
  return <a key={url} href={url} className='social-link'><Icon /></a>
}

const linkSection = ({ section, data }) => (
  <div>
    <h4 style={{ textAlign: 'center', margin: 0 }}>
      {section[0].toUpperCase() + section.substring(1)}
    </h4>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {data.map(s => socialLink({ url: `${s.link}${s.username}`, org: s.org }))}
    </div>
  </div>
)

function LinkSection() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            links {
              socials {
                username
                org
                link
              }
              shop {
                username
                org
                link
              }
              stream {
                username
                org
                link
              }
            }
          }
        }
      }
    `
  )

  const { links } = site.siteMetadata
  const sections = Object.keys(links)

  return (
    <>
      {sections.map(section => linkSection({ section, data: links[section] }))}
    </>
  )
}

export default LinkSection
