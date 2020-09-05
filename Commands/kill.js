module.exports = {
    name: "kill",

    execute(message){
        let user = message.mentions.users.first();
        if (!user) {
            return message.channel.send('bruh who you wanna kill')
        }
        return message.channel.send(message.author.username + ' Killed ' + user.username)
    }
}