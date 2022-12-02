import React from "react"
import './player.css'

const insertEmbed = (link, provider) => {
  if (provider === 'YouTube') {
    const regex = /https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|playlist\?list=)?([A-Za-z0-9\-_]+)/
    const match = link.match(regex)
    return `https://youtube.com/${match[3]}${match[4]}`
  }

  else {
    const match = link.match(/https:\/\/open\.spotify\.com\/(track|album)\/(\w*)/)
    return `https://open.spotify.com/embed/${match[1]}/${match[2]}`
  }
}

const MusicLink = ({ link }: { link: any }) => {
  const { music, author, embeds } = link
  try {
    const player: string = embeds[0].provider.name
    const embedLink: string = embeds[0]?.video?.url || insertEmbed(music, player)

    return (
      <li className={embedLink.match(/album|playlist/) ? 'playlist' : 'track'}>
        <iframe
          title={`${player} Web Player`}
          loading="lazy"
          src={embedLink}
          frameBorder='0'
          allow="encrypted-media"
          allowFullScreen
        />
      </li>
    )
  } catch(e) {
    console.log(e, link)
    return <li><a href={music}>Error</a></li>
  }
}

const MusicPlayer = ({ links }) => {
  return (
    <section id='music-player'>
      <ul className="music-list">
        {links.map((music, index) => <MusicLink link={music} key={index} />)}
      </ul>

      <br />
      <section style={{ display: 'flex', justifyContent: 'center', borderRadius: 10, maxWidth: 400 }}>
        <button style={{ background: 'red', color: 'white', width: 60, height: 40 }}>
          {'|>'}
        </button>
      </section>
    </section>
  )
}

export default MusicPlayer
