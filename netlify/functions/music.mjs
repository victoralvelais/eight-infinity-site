import client from '../../discord/client.mjs'
import { getMusic } from "../../discord/music.mjs"

const discordReady = new Promise(resolve => client.on('ready', () => resolve(true)))
client.login(process.env.BOT_TOKEN)

const handler = async (event, context) => {
  await discordReady
  const musicLinks = await getMusic(client)

  return {
    statusCode: 200,
    body: JSON.stringify({ data: musicLinks }),
  }
}

export { handler }
