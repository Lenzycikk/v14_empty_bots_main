const emo = require("../../../emojies.json")
const config = require("../../../lenzy_config/config.json")
const { ButtonBuilder } = require("@discordjs/builders")
const { ButtonStyle, ActionRowBuilder, PermissionsBitField, EmbedBuilder } = require("discord.js")

module.exports = {
    name: 'taslak',
    description: 'Taslak komutu loooo',
    aliases: ['tslk'],
    usage: '.taslak',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */

    
async execute(message, args, client, lenzyy_embed) {



message.channel.send({embeds: [lenzyy_embed.setDescription(`🤮 Al sana taslak komutu looo`)]})


}}