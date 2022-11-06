import Discord, { GatewayIntentBits } from 'discord.js'

// Developer Portal: https://discord.com/developers/applications
const client = new Discord.Client({
	intents: [ // https://discord.com/developers/docs/topics/gateway#list-of-intents
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
})

export default client
