module.exports = (client) => {

const requestEvent = (event) => require(`../events/${event}`)
client.on('ready', (ready) => requestEvent('ready')(ready, client))
client.on('messageCreate', (messageCreate) => requestEvent('commandHandler')(messageCreate, client))
}