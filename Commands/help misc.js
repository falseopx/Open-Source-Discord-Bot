module.exports = {
    name: "help misc",

    execute(message){
        const Discord = require ('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('`Misc Commands:`')
        .addFields(
            { name: 'Ping', value: 'Pings The Bot, usage: ~ping', inline: true },
            { name: 'Logo', value: 'Send The SaintCub Logo, usage: ~logo', inline: true },
            { name: 'Download', value: 'Bot Sends You The Download Link To SaintCub, usage: ~download', inline: true},
            { name: 'User Info', value: 'Retrieves User Info, usage: ~userinfo', inline: true },
            { name: 'Server Info', value: 'Retrieves Server Info, usage: ~serverinfo', inline: true },
            { name: 'Uptime', value: 'Replies With The Total Uptime Of The Bot, usage: ~uptime', inline: true }
        )
        .setAuthor('Cub')
        .setColor('BLUE')
        .setTimestamp();

        message.channel.send(embed);
    }
}