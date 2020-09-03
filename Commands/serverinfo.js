const Discord = require('discord.js');

module.exports = {
    name: "serverinfo",

    execute(message, args, bot){

        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };

        let region = {
            "brazil": ":flag_br: Brazil",
            "eu-central": ":flag_eu: Central Europe",
            "singapore": ":flag_sg: Singapore",
            "us-central": ":flag_us: US Central",
            "sydney": ":flag_au: Sydney",
            "us-east": ":flag_us: US East"
        };

        let sicon = message.guild.iconURL;

        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.name} Info`)
        .setColor("RANDOM")
        .setFooter("Cub - Bot (A non-retarded bot)") 
        .addField("**Name:**", message.guild.name, true) 
        .addField("**Server ID:**", message.guild.id, true)
        .addField("**Owner:**", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("**Region:**", region[message.guild.region], true)                           
        .addField("**Total Members**",  message.guild.memberCount, true)
        .addField("**Creation Date:**", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(sicon);

        return message.channel.send(embed);
    } 
} 