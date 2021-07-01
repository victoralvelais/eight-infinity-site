import React from 'react'
import Facebook from './Facebook.svg'
import Instagram from './Instagram.svg'
import Twitch from './Twitch.svg'
import Twitter from './Twitter.svg'
import YouTube from './YouTube.svg'
import Spotify from './Spotify.svg'
import Audius from './Audius.svg'
import OpenSea from './OpenSea.svg'

const formatIcon = ({ color, Icon }) => {
  return <Icon style={{ fill: color }} />
}

const Icons = {
  Facebook: () => formatIcon({ color: null, Icon: Facebook }),
  Instagram: () => formatIcon({ color: null, Icon: Instagram }),
  Twitch: () => formatIcon({ color: null, Icon: Twitch }),
  Twitter: () => formatIcon({ color: null, Icon: Twitter }),
  YouTube: () => formatIcon({ color: 'red', Icon: YouTube }),
  Spotify: () => formatIcon({ color: '#1DB954', Icon: Spotify }),
  Audius: () => formatIcon({ color: null, Icon: Audius }),
  OpenSea: () => formatIcon({ color: null, Icon: OpenSea }),
}

export default Icons
