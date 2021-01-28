const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('MyFirstBot is online');
});

client.on('message', message =>{
if(!message.content.startsWith(prefix) || message.author.bot) return; 

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();


if(command ==='ping'){
    client.commands.get('ping').execute(message, args);
}else if(command =='sarahbains'){
        client.commands.get('youtube').execute(message, args);
    } else if(command == 'jason'){
        client.commands.get('jason').execute(message, args);
    } else if(command == 'dailytext'){
        client.commands.get('dailytext').execute(message, args);
    } else if(command == 'goodnight'){
        client.commands.get('goodnight').execute(message, args);

    }

});
 





client.login('ODA0MTAzMjMzNTQ2MjIzNjc3.YBHdfg.KWkwOjUnDwglSYY32irdScc6W4Y');
