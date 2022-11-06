import client from '../discord/client'
import { getMusic } from '../discord/music'

const discordReady = new Promise(resolve => client.on('ready', () => resolve(true)))

const handler = async (req, res) => {
  if (!client.isReady()) {
    client.login(process.env.BOT_TOKEN)
    await discordReady
  }

  const musicLinks = await getMusic(client)
  res.status(200).json({ data: musicLinks })
}

export default handler