module.exports = {
    name: "help",

    execute(message){
        const Discord = require ('discord.js')

        const embed = new Discord.MessageEmbed()
        .setTitle('`Commands:`')
        .addFields(
            { name: 'Ping', value: 'Pings The Bot, usage: ~ping', inline: true },
            { name: 'urmom', value: 'Bot Tells You A Yo Momma Joke, usage: ~urmom', inline: true },
            { name: 'Logo', value: 'Send The SaintCub Logo, usage: ~logo', inline: true },
            { name: 'Download', value: 'Bot Sends You The Download Link To SaintCub, usage: ~download', inline: true},
            { name: 'Ban', value: 'Ban Someone, usage: ~ban [username]', inline: true },
            { name: 'Tempban', value: 'Temporarily Ban Someone, usage: ~tempban [username]', inline: true },
            { name: 'Kick', value: 'Kick Someone, usage: ~kick [username]', inline: true },
            { name: 'Clear', value: 'Clear Messages (max 200), usage: ~clear [amount of messages]', inline: true },
            { name: 'User Info', value: 'Retrieves User Info, usage: ~userinfo', inline: true },
            { name: 'Server Info', value: 'Retrieves Server Info, usage: ~serverinfo', inline: true },
            { name: 'Memes', value: 'Sends A Dank Meme, usage: ~meme', inline: true },
            { name: 'Uptime', value: 'Replies With The Total Uptime Of The Bot, usage: ~uptime', inline: true },
            { name: '8Ball', value: 'Replies With Your Future, usage: ~8ball [question]', inline: true },
            { name: 'Rate', value: 'Rates A Person Of Your Choosing, usage: ~rate [person]', inline: true }
        )
        .setAuthor('Cub')
        .setColor('BLUE')
        .setTimestamp();

        message.channel.send(embed);
    }
}
