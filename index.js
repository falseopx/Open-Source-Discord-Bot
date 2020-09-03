const Discord = require('discord.js');
const bot = new Discord.Client();

const { prefix, token } = require('./Data/config.json');

const fs = require('fs');

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./Commands/${file}`);
    bot.commands.set(command.name, command);
};

bot.on('ready', () => {
    console.log('beep boop im a retarded fuck');
    bot.user.setActivity('Mario Kart With Branta and SaintClub').catch(console.error);
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    if(message.author.bot) return;

    if (message.content === 'stfu'){
        message.reply ('no u stfu');
    }

    if(!message.content.startsWith(prefix)) return;

    switch(args[0]){
        case 'ping':
            bot.commands.get('ping').execute(message);
            break;
        case 'clear':
            bot.commands.get('clear').execute(message, args);
            break;
        case 'logo':
            bot.commands.get('logo').execute(message);
            break;
        case 'ban':
            bot.commands.get('ban').execute(message, args, bot);
            break;
        case 'tempban':
            bot.commands.get('tempban').execute(message, args, bot);
            break;
        case 'kick':
            bot.commands.get('kick').execute(message, args, bot);
            break;
        case 'help':
            bot.commands.get('help').execute(message);
            break;
        case 'urmom':
            bot.commands.get('urmom').execute(message);
            break;
        case 'download':
            bot.commands.get('download').execute(message);
            break;
        case 'avatar':
            bot.commands.get('avatar').execute(message);
            break;
        case 'serverinfo':
            bot.commands.get('serverinfo').execute(message);
            break;
        case 'userinfo':
            bot.commands.get('userinfo').execute(message);
            break;
        case 'meme':
            bot.commands.get('meme').execute(message);
            break;
        case 'rps':
            bot.commands.get('rps').execute(message, args, bot);
            break;
        case 'uptime':
            bot.commands.get('uptime').execute(message, args, bot);
            break; 
    }
})

bot.login(token)