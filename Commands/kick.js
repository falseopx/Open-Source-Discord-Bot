const { execute } = require("./ban");

module.exports = {
    name:"kick",

    execute(message, args, bot){
        const Discord = require('discord.js')
        
        let person = message.guild.member(message.mentions.users.first());

        if(!person) return message.channel.send('bruh who do you wanna kick');
        if(!person.kickable) return message.channel.send('lmao you can\'t kick this person u loser');
        if(person.id === message.author.id) return ('no');
        if (!member.hasPermission('KICK_MEMBERS')){
            message.delete();
            message.reply('no');
            return;
        }
        
        let reason = 'no reason specified';
        if(args[2]) reason = args.splice(2).join (" ");
        if(!person.user.bot) {
            person.send(`lmfao you just got kicked for ${reason}, god you're a loser`);
        }
        person.kick({
            reason: reason
        });

        const embed = new Discord.MessageEmbed()
        .setTitle('`Kick:`')
        .setDescription(`\`Reason:\` \`${reason}\``)
        .setAuthor(message.member.displayName)
        .setColor('YELLOW')
        .setThumbnail(person.user.avatarURL())
        .addFields({
            name: 'Member',
            value: person.id,
            inline: true
        })
        .setTimestamp();

        bot.channels.cache.get('748556371871662210').send(embed);
    }
}