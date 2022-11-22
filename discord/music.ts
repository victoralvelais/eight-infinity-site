const { parse, stringify } = require('flatted')

async function getMusic(client) {
  const messages = await getMusicMessages(client)
  const links = grabLinks(messages)
  return links
}

async function getMusicMessages(client) {
  const channel = await client.channels.cache.find(chan => chan.name.match(/music$/)) // Designated Channel
  const messages = await channel.messages.fetch({ limit: 100 })
  const messageArray = Array.from(messages.values())
  return parseMessages(messageArray)
}

function parseMessages(messages) {
  return messages.map(msg => {
    const { channelId, content, id, author, createdTimestamp, embeds } = msg
    const message = { channelId, content, id, author, createdTimestamp, embeds }
    return Object.assign({}, parse(stringify(message)))
  })
}

function grabLinks(messages) {
  return messages.reduce(musicMatch, [])
}

const musicMatch = (list, msg) => {
  const ytRegex = /https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([A-Za-z0-9\-_]+)/
  const spotRegex = /https:\/\/open\.spotify\.com\/track\/(\w*)/
  const ytMatch = msg.content.match(ytRegex)
  const spotMatch = msg.content.match(spotRegex)

  if (ytMatch || spotMatch) {
    const music = ytMatch ? ytMatch[0] : spotMatch[0]
    list.push({ music, ...msg })
  }

  return list
}

export { getMusic, getMusicMessages, parseMessages, grabLinks }
