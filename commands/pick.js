module.exports ={
    permissions: "gamma",
    help: `Picks so you don't have to. Syntax: ${prefix}pick (option1), (option2)...`,
    commandFunction: function (Bot, room, by, args, client) {
          msgcon = args.join(' ');
          choices = msgcon.split(',');
          rchoice = choices[Math.floor(Math.random()*choices.length)];
          Bot.say(room, `My pick: ${rchoice}`);
    }
}