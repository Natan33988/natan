const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn More About Me'
        });

    }        

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("All About Me")
        .addField("About Me", "Hello My Name Is Natan And This is My First Bot", true)
        .addField("Side Test", "Why are u reading This Even" , true)
        .addField("Some Other Text", "Idk What To Type Here")
        .setColor("#3a85ff")
        .setThumbnail(message.author.avatarURL)
        .setURL("https://www.youtube.com/channel/UC_CK5QtxdH3m_3zSvN9o3Pg?view_as=subscriber")

        message.channel.sendEmbed(myInfo);
    }
        
}

module.exports = InfoAboutMeCommand;