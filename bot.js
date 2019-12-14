const Discord = require('discord.js');
const client = new Discord.Client();

client.login(token);

client.on('message', message => {
    
        if(message.content.toLowerCaser() === 'hello')
            message.channel.send('I am a seagull' + message.author);

        else if(message.content.toLowerCase() === 'Squawk')
            message.reply('Squawk');
});

client.login(process.env.BOT_TOKEN);
