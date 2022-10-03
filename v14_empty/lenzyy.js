const Discord = require("discord.js")
const { Client, GatewayIntentBits } = require('discord.js');
const config = require("./lenzy_config/config.json")
const client = new Client({
	intents: [98303, 
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
    ]
});

require("./src/handlers/commandHandler")(client)
require("./src/handlers/eventHandler")(client)


client.login(config.Bot.Token)



