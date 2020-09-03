module.exports = {
    name: "uptime",

    execute(message, args, bot){
        const Discord = require('discord.js')
        let days = 0
        let week = 0
        let uptime = ``;
        let totalseconds = (bot.uptime / 1000)
        let hours = Math.floor(totalseconds / 3600)
        totalseconds %= 3600
        let minutes = Math.floor(totalseconds / 60)
        let seconds = Math.floor(totalseconds % 60)

        if(hours > 23){
            days = days + 1
            hours = 0
        }

        if(week > 0) {
            uptime += `${week} week,`
        }

        if(minutes > 60){
            minutes = 0;
        }

        uptime += `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`

        let uptimeembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField('Total Uptime:', uptime)

    message.channel.send(uptimeembed)
    }
}