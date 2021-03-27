import * as React from "react"
import { Link } from "gatsby"
import { Card, Icon } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { StaticImage } from "gatsby-plugin-image"
import { FB2Icon, IGIcon, TwitchIcon, TwitterIcon, YTIcon, SpotifyIcon, AudiusIcon } from '../assets/icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'antd/dist/antd.css';
import "./index.css"

const { Meta } = Card

const IndexPage = () => (
  <Layout>
    <SEO title="@vcaiii" />
    <Card
      title={<span></span>}
      hoverable
      style={{ minWidth: 320 }}
      cover={pic()}
      // actions={[
      //   <SettingOutlined key="setting" />,
      //   <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis" />,
      // ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <Meta style={{ textAlign: 'center' }} title="Lord Vz" description="Artist, Creator, Web Dev, Smart Ass, Gamer, Gluten Free, Solarpunk" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {socialLink({ color: null, Icon: TwitterIcon, url: 'https://twitter.com/vca_iii' })}
          {socialLink({ color: null, Icon: FB2Icon, url: 'https://www.facebook.com/vcaiii' })}
          {socialLink({ color: null, Icon: IGIcon, url: 'https://www.instagram.com/vca.iii' })}
          {socialLink({ color: null, Icon: TwitchIcon, url: 'https://www.twitch.tv/vcaiii' })}
          {/* {socialLink({ color: '#1DB954', Icon: SpotifyIcon, url: 'https://audius.co/vcaiii' })} */}
          {socialLink({ color: null, Icon: AudiusIcon, url: 'https://audius.co/vcaiii' })}
          {socialLink({ color: 'red', Icon: YTIcon, url: 'https://www.youtube.com/channel/UCfkT4qmHn2JaS_K-Exf1XzQ' })}
        </div>
      </div>
    </Card>
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
    <Link to={url} className='social-link'>
      <Icon style={{ fill: color }} />
    </Link>
  )
}

export default IndexPage
