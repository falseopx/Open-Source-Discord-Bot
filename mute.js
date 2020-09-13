const { MessageEmbed } = require("discord.js");
let person = message.guild.member(message.mentions.users.first());

module.exports.run = async (message, args) => {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('748566228104118453');
        let verifiedRole = message.guild.roles.cache.get('750020276028178592');
        if(mutedRole) {
            member.roles.add(mutedRole);
            member.roles.remove(verifiedRole);
            
            const embed = new MessageEmbed()

            .setTitle('User has been muted')
            .setFields({
                name: 'Member',
                value: person.id,
                inline: true
            })
            .setColor("RANDOM")
            .setThumbnail(person.user.avatarURL())
            .setTimestamp();

            bot.channels.cache.get('752126984678801489').send(embed);
        }
}