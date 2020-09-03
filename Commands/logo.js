module.exports = {
    name: "logo",

    execute(message){
        const Discord = require ('discord.js')

        const attachment = new Discord.MessageAttachment('./SaintPFP.png');
            message.channel.send(attachment);
    }
}