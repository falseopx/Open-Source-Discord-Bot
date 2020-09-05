module.exports = {
    name: "8ball",

    execute(message, args, bot){
        if (!args[2]) {
            return message.channel.send('bruh ask a real question smh')
        }
        let number = Math.floor(Math.random() * 6);
        if (number == 0) {
            return message.channel.send('oh yeah 100%')
        }
        if (number == 1) {
            return message.channel.send('lmao no')
        }
        if (number == 2) {
            return message.channel.send('im not anwsering that bitch, ask again later smh')
        }
        if (number == 3) {
            return message.channel.send('bruh idk')
        }
        if (number == 4) {
            return message.channel.send('meh, probably')
        }
        if (number == 5) {
            return message.channel.send('idk, maybe')
        }
    }
}