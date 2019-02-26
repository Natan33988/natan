const commando = require('discord.js-commando');
const discord = require('discord.js');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flipacoin',
            group: 'simple',
            memberName: 'flip',
            description: 'Flips a Coin, Landing On Either Heads Or Tails'
        });

    }        

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2) + 1;
        var embed = new discord.RichEmbed();
        embed.setColor(0x0000ff)
        if(chance == '1')
           embed.setDescription(message.author +"Your Coin Has Landed on Heads!", {files: [__dirname + "/CoinPics/heads.png"]});

        if (chance == '2')
            embed.setDescription(message.author +"Your Coin Has Landed On Tails", {files: [__dirname + "/CoinPics/tails.png"]});
    message.channel.send(embed);
        }
    }


module.exports = CoinFlipCommand;