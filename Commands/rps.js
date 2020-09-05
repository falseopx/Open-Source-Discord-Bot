module.exports = {
    name: "rps",

    execute(message, args, bot){
        if(!args[1]){
            return message.channel.send('choose rock paper or scissors you moron')
        }

        let choices = ['rock', 'paper', 'scissors'];
        if(choices.includes((args[1]).toLowerCase())){
            let number = Math.floor(Math.random() * 3);
            if(number == 1){
                return message.channel.send('fuck it was a tie, rematch or you\'re gay')
            }
            if(number == 2){
                return message.channel.send('LOL FUCKING RETARDED BITCH I WONNNNN')
            }
            if(number == 0){
                return message.channel.send('oh fuck you little fat bitch, rematch or mega gay')
            }
        } else {
            return message.channel.send('choose rock paper or scissors you moron')
        }
    }
}
