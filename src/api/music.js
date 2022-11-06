import client from '../discord/client'
import { getMusic } from '../discord/music'

const discordReady = new Promise(resolve => client.on('ready', () => resolve(true)))

const handler = async (event, context) => {
  console.log(process.env.BOT_TOKEN, 'test')
  if (!client.isReady()) {
    client.login(process.env.BOT_TOKEN)
    await discordReady
  }

  const musicLinks = await getMusic(client)
  console.log(musicLinks, 'musicLinks')

  return {
    statusCode: 200,
    body: JSON.stringify({ data: musicLinks }),
  }
}

// const handler = (req, res) => {
//   res.status(200).json({ hello: `world` })
// }

// export default handler
export default handler