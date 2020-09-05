module.exports = {
    name: "help mod",

    execute(message){
        const Discord = require ('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('`Moderation Commands:`')
        .addFields(
            { name: 'Ban', value: 'Ban Someone, usage: ~ban [username]', inline: true },
            { name: 'Tempban', value: 'Temporarily Ban Someone, usage: ~tempban [username]', inline: true },
            { name: 'Kick', value: 'Kick Someone, usage: ~kick [username]', inline: true },
            { name: 'Clear', value: 'Clear Messages (max 200), usage: ~clear [amount of messages]', inline: true },
            { name: 'User Info', value: 'Retrieves User Info, usage: ~userinfo', inline: true },
            { name: 'Server Info', value: 'Retrieves Server Info, usage: ~serverinfo', inline: true }
        )
        .setAuthor('Cub')
        .setColor('BLUE')
        .setTimestamp();

        message.channel.send(embed);
    }
}