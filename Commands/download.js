module.exports = {
    name: "download",

    execute(message){
        const Discord = require ('discord.js')

        const embed = new Discord.MessageEmbed()
        .setTitle('`Download`')
        .setDescription('As Of Right Now, SaintCub Is Not Released.')
        .setFooter('Sorry!')
        .setAuthor('Cub')
        .setColor('BLUE')
        .setTimestamp();

        message.channel.send(embed);
    }
}