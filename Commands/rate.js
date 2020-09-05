module.exports = {
    name: "rate",

    execute(message, args){
        let number = Math.floor(Math.random() * 101);
        if (!args[1]) {
            return message.channel.send('I would rate you a ' + number + '/100')
        } else {
            let user = message.mentions.users.first();
            if (!user) {
                return message.channel.send('bruh who are you rating')
            }
            return message.channel.send('I would rate ' + user.username + ' a ' + number + '/100')
    }
}}