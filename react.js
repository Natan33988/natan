const commando = require('discord.js-commando');
const discord = require('discord.js');

class ReactCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'react',
            group: 'simple',
            memberName: 'react',
            description: 'React To The Last Message'
        });
    }     
async run(message,args) { 

let usr = message.mentions.users.first()||message.author;
let msg = message.channel.messages.filter(m => m.id === usr.lastMessage.id);
await message.react("✅");
await message.react("❎");

  }
}
module.exports = ReactCommand;

