module.exports = {
    name: "userinfo",

    execute(message){
        const Discord = require ('discord.js')
        const moment = require ('moment')
        const user = message.mentions.members.first()
        require('moment-duration-format')

        const embed = new Discord.MessageEmbed()
        .setTitle('`User Info`')
        .setDescription(`User Information for ${user}`)
        .addField(`Username`, user.tag)
        .addField(`User ID`, user.id)
        .addField(`Joined`, `${moment(user.joinedAt).format("MM/DD/YYYY")}`)
        .addField(`Registered`, `${moment(user.createdAt).format("MM/DD/YYYY")}`)
        .setColor('PURPLE')
        .setTimestamp();

        message.channel.send(embed);
    }
}