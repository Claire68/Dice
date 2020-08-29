const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = '!';

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'roll') {
        if (!args.length) {
            return message.channel.send(`Use [# of dice]d[Value of dice] to roll`);
        }

        var input = `${args}`;

        if (input.charAt(0) === 'd'){
            var num = 1;
            var value = input.substring(1);
        } else {
        var die = input.split('d');
        
        var num = parseInt(die[0], 10);
        var value = parseInt(die[1], 10);
        }
        var rolls = [];
        var total = 0

        for (i = 0; i < num; i++){
            rolls[i] = Math.floor((Math.random() * value) + 1);
            total += rolls[i];
        }

        if (input.includes('d') === true){
            if (num === 1) {
                message.channel.send(`** You rolled a ` + total + "!**");
            }   else if (num > 1) {
                message.channel.send(`** You rolled a ` + total + "!** \n `" + rolls + "`");
            }
        }
        else {
            return message.channel.send(`Use [# of dice]d[Value of dice] to roll`);
        }
    }
});

client.login("NzQ5MDkwOTMzOTg3MDgyMzUw.X0m7TA.mKr1iACzZm5srzyCScaN8dj_Wik");