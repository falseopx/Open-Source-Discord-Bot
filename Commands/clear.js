module.exports = {
    name: "clear",

    execute(message, args){
        if(!message.member.roles.cache.get('750054570163437578')){ //this is the role id
            message.reply('You Do Not Have Permission To Do That!'); //if they dont have the role stated above, delete the message and do not execute
            return;
        }
        if(!args[1]) return message.channel.send(`How Many Messages Do You Want To clear? You Provided None`)// if they did not provide a number, do not execute
        if(isNaN(args[1])) return message.channel.send(`${args[1]} is not a number!}`); //if the argument is not a number, do not execute
        message.channel.bulkDelete(args[1]) //if all is good, bulk delete.
    }
} 