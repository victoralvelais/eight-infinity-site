const client = require('../../discord/client.js')
const { getMusic } = require('../../discord/music.js')

const discordReady = new Promise(resolve => client.on('ready', () => resolve(true)))

const handler = async (event, context) => {
  if (!client.isReady()) {
    client.login(process.env.BOT_TOKEN)
    await discordReady
  }

  const musicLinks = await getMusic(client)

  return {
    statusCode: 200,
    body: JSON.stringify({ data: musicLinks }),
  }
}

module.exports = { handler }
