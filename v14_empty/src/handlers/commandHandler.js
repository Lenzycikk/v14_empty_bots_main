const { Collection } = require("discord.js")

module.exports = function (client) {

client.commands = new Collection()
client.aliases  = new Collection()
client.cooldowns = new Collection()
    
const fs = require("fs")

      fs.readdir('./src/lenzyy_commands/', (err, files) => {
        if (err) console.error(err);
        files.forEach(f => {
            fs.readdir("./src/lenzyy_commands/" + f, (err2, files2) => {
                files2.forEach(file => {
                    let props = require(`../lenzyy_commands/${f}/` + file);
                    console.log(` ${props.name} komutu yüklendi!`);
                    client.commands.set(props.name, props);
                    props.aliases.forEach(alias => {
                        client.aliases.set(alias, props.name);
                    });
                })
            })
        });
      });

}