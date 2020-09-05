module.exports = {
    name: "help",

    execute(message){
        const Discord = require ('discord.js')

        const embed = new Discord.MessageEmbed()
        .setTitle('`Commands:`')
        .addFields(
            { name: 'Help Mod', value: 'Miscellaneous Commands, usage: ~mod', inline: true },
            { name: 'Help Fun', value: 'Miscellaneous Commands, usage: ~fun', inline: true },
            { name: 'Help Misc', value: 'Miscellaneous Commands, usage: ~misc', inline: true }
        )
        .setAuthor('Cub')
        .setColor('BLUE')
        .setTimestamp();

        message.channel.send(embed);
    }
}
