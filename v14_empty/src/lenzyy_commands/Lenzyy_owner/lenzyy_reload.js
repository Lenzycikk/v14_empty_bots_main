const emo = require("../../../emojies.json")
const config = require("../../../lenzy_config/config.json")
const { PermissionsBitField } = require("discord.js")
module.exports = {
    name: 'reload',
    description: 'botu yeniden baslatır',
    aliases: ['restart','reboot'],
    usage: '.reload',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */

    
async execute(message, args, client, lenzyy_embed) {

if (!config.Bot.OwnersID.includes(message.author.id)) {
message.react(emo.no)
return
}

message.channel.send({content: `**🤮 Bot yeniden başlatılıyor...**`}).then(x => {
console.log(`Bot yeniden başlatıldı!`)
process.exit(3)
})
}}