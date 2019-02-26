const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix:'n!',
    disableEveryone: true,
    unknownCommandResponse: false});

const TOKEN = 'NTQ1MjgyNzkyMzM5Mjc1Nzc2.D0XaAw.5cMAZ8fjFNgmWkds-zIzEkJBxX0'

bot.registry.registerGroup('simple', 'Simple')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello Test ' + message.author + ', Hello This is a test');
    }

});

bot.on('ready' ,function(){
    console.log("Ready"); 
})

bot.login(TOKEN);

