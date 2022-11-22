import React from "react"

const MusicLink = ({ link }: { link: any }) => {
  const { music, author, embeds } = link
  const artist: string = embeds[0]?.author?.name || embeds[0]?.description?.match(/^(.*?)·/)[1] || 'Playlist'
  const title: string = embeds[0]?.title || embeds[0]?.title

  return (
    <li>
      <a href={music}>{artist} - {title}</a>
    </li>
  )
}

const MusicPlayer = ({ links }) => {
  return (
    <section style={{ background: '#222', height: 500, padding: '20px 0', borderRadius: 10, maxWidth: 400 }}>
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