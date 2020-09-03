module.exports = {
    name: "ping",

    execute(message){
        message.channel.send('pinging...').then(pingMessage => {

            const start = message.createdTimestamp;
            const end = pingMessage.createdTimestamp;
            const subtraction = end - start;

            pingMessage.edit(`PONG, that took ${subtraction} ms`)
        });
    }
}