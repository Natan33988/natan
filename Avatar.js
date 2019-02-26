const commando = require('discord.js-commando');
const discord = require('discord.js');

class AvatarCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'simple',
            memberName: 'avatar',
            description: 'Shows Your Avatar'
        });

    }        

    async run(message, args)
    {
        var Avatar = new discord.RichEmbed()
        .setTitle("All About Me")
        message.reply(message.author.avatarURL)
    }
        
}

module.exports = AvatarCommand;