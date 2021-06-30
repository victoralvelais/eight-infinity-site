import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Card, Icon } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { StaticImage } from "gatsby-plugin-image"
import { FB2Icon, IGIcon, TwitchIcon, TwitterIcon, YTIcon, SpotifyIcon, AudiusIcon } from '../assets/icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from '../components/profile/main'
import 'antd/dist/antd.css';
import "./index.css"

const { Meta } = Card

const buildCred = ({ title, org, url }) => (
  <div key={org}>{title} at <a href={url}>{org}</a></div>
)

const Intro = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            intro {
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

  const { main, secondary, credentials } = site.siteMetadata.intro

  return (
    <div>
      <div>{main}</div>
      <div>{secondary}</div>
      <br />
      {credentials.map(buildCred)}
    </div>
  )
}

const section = ({ category, links }) => (
  <div>
    <h4 style={{ textAlign: 'center', margin: 0 }}>{category}</h4>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Tracking */}
      {/* Pass link info here */}
      {/* {links.map(link => socialLink({ Icon: link.icon, url: 'https://twitter.com/vca_iii' }))} */}
      {socialLink({ color: null, Icon: TwitterIcon, url: 'https://twitter.com/vca_iii' })}
      {socialLink({ color: null, Icon: FB2Icon, url: 'https://www.facebook.com/vcaiii' })}
      {socialLink({ color: null, Icon: IGIcon, url: 'https://www.instagram.com/vca.iii' })}
      {/* {socialLink({ color: null, Icon: TwitchIcon, url: 'https://www.twitch.tv/vcaiii' })} */}
      {/* {socialLink({ color: '#1DB954', Icon: SpotifyIcon, url: 'https://audius.co/vcaiii' })} */}
      {/* {socialLink({ color: null, Icon: AudiusIcon, url: 'https://audius.co/vcaiii' })} */}
      {socialLink({ color: 'red', Icon: YTIcon, url: 'https://www.youtube.com/channel/UCfkT4qmHn2JaS_K-Exf1XzQ' })}
    </div>
  </div>
)

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

const pic = () => (
  <StaticImage
    src="../images/Gold-Smile.jpg"
    width={300}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="Great Face"
    style={{ borderRadius: '8%' }}
  />
)

const socialLink = ({ url, color, Icon }) => {
  return (
    <a href={url} className='social-link'>
      <Icon style={{ fill: color }} />
    </a>
  )
}

export default IndexPage
