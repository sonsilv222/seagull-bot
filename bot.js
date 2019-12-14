const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NjU1NDM3ODgyMzI0MDI1MzU1.XfUGWQ.CRggYTK7h3n8zm4ZSyRcO_6jyOQ'

client.login(token);

client.on('message', message => {
    
        if(message.content.toLowerCaser() === 'hello')
            message.channel.send('I am a seagull' + message.author);

        else if(message.content.toLowerCase() === 'Squawk')
            message.reply('Squawk');
});

client.login(process.env.NjU1NDM3ODgyMzI0MDI1MzU1.XfVR6A.uzhJDa_3QStdoQiXV0UfijKY6XQ);
