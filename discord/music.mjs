export async function getMusic(client) {
  const channel = await client.channels.cache.find(chan => chan.name.match(/music$/)) // Designated Channel
  const musicLinks = await grabLinks(channel)
  return musicLinks
}

async function grabLinks(musicChannel) {
  const messages = await musicChannel.messages.fetch({ limit: 100 })
  const musicMessages = messages.filter(musicMatch)
  const musicArray = Array.from(musicMessages.values()) // Converts map: [id, data] to array
  const musicLinks = musicArray.map(musicMatch)
  return musicLinks.reverse()
}

const musicMatch = msg => {
  const ytRegex = /https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([A-Za-z0-9\-_]+)/
  const spotRegex = /https:\/\/open\.spotify\.com\/track\/(\w*)/
  const ytMatch = msg.content.match(ytRegex)
  const spotMatch = msg.content.match(spotRegex)

  if (ytMatch) return ytMatch[0]
  else if (spotMatch) return spotMatch[0]
  else return false
}
