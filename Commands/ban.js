module.exports = {
    name: "ban",

    execute(message, args, bot){
        const Discord = require('discord.js')
        
        let person = message.guild.member(message.mentions.users.first());

        if(!person) return message.channel.send('bruh who do you wanna ban');
        if(!person.bannable) return message.channel.send('lmao you can\'t ban this person u loser');
        if(person.id === message.author.id) return ('why tf would u wanna ban urself lol');
        if (!member.hasPermission('BAN_MEMBERS')){
            message.delete();
            message.reply('you dont have perms for that command you fuckin normie');
            return;
        }
        
        let reason = 'no reason specified';
        if(args[2]) reason = args.splice(2).join (" ");
        if(!person.user.bot) {
            person.send(`lmfao you just got banned for ${reason}, god you're a loser`);
        }
        person.ban({
            reason: reason
        });

        const embed = new Discord.MessageEmbed()
        .setTitle('`Ban:`')
        .setDescription(`\`Reason:\` \`${reason}\``)
        .setAuthor(message.member.displayName)
        .setColor('RED')
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