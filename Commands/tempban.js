module.exports = {
    name:"tempban",

    execute(message, args, bot){
        const Discord = require('discord.js')
        let person = message.guild.member(message.mentions.users.first());
        let time = args[2];
        if(!person) return message.channel.send('bruh who do you wanna tempban');
        if (!member.hasPermission('BAN_MEMBERS')){
            message.delete();
            message.reply('you dont have perms for that command you fuckin normie');
            return;
        }
        if(!person.bannable) return message.channel.send('lmao you can\'t ban this person u loser');
        if(person.id === message.author.id) return ('why tf would u wanna ban urself lol');
        if(!time) return message.channel.send('bruh you gotta specify how long in days');
        if(isNaN(time)) return message.channel.send(`${args[2]} isn\'t a number you idiot`);
        if(!isNaN(time)) time = parseFloat(args[3]);
        let reason = 'no reason specified';
        if(args[2]) reason = args.splice(3).join (" ");

        if(!person.user.bot) {
            person.send(`lmfao you just got banned for ${time} day(s) for ${reason}, god you're a loser`);
        }
        person.ban({
            reason: reason,
            time: time
        });

        const embed = new Discord.MessageEmbed()
        .setTitle('`Tempban:`')
        .setDescription(`\`Time:\` \`${time} day(s)\`, \`Reason:\` \`${reason}\``)
        .setAuthor(message.member.displayName)
        .setColor('ORANGE')
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