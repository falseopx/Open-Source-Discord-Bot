module.exports = {
    name: "fun",

    execute(message){
        const Discord = require ('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('`Fun Commands:`')
        .addFields(
            { name: 'urmom', value: 'Bot Tells You A Yo Momma Joke, usage: ~urmom', inline: true },
            { name: 'Memes', value: 'Sends A Dank Meme, usage: ~meme', inline: true },
            { name: 'Uptime', value: 'Replies With The Total Uptime Of The Bot, usage: ~uptime', inline: true },
            { name: '8ball', value: 'Replies With Your Future, usage: ~8ball [question]', inline: true },
            { name: 'Rate', value: 'Rates A Person Of Your Choosing, usage: ~rate [person]', inline: true },
            { name: 'Kill', value: 'Get The Bot To Kill Someone, usage: ~kill [person', inline: true },
            { name: 'Coin', value: 'Flip A Coin, usage: ~coin', inline: true }
        )
        .setAuthor('Cub')
        .setColor('BLUE')
        .setTimestamp();

        message.channel.send(embed);
    }
}
