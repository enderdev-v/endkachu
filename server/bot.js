const Discord = require(`discord.js`)
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })

client.on(`ready`, () => {
	console.log(`bot en la web`)
})

client.login(process.env[`token`])

module.exports = client;