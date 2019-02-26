const commando = require('discord.js-commando');
const discord = require('discord.js');


class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rolladice',
            group: 'simple',
            memberName: 'rolladice',
            description: 'Rolls a Dice With Six Sides'
        });

    }        

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        var embed = new discord.RichEmbed();
        embed.setColor(0x0000ff)
        embed.setDescription("Your Dice Has Landed On " + diceRoll )
    message.channel.send(embed);
    }
}

module.exports = DiceRollCommand;