module.exports ={
    permissions: "none",
    help: `Displays a list of locked users. Syntax: ${prefix}locked`,
    commandFunction: function (Bot, room, by, args, client) {
    	if (args[0]) return Bot.say(room, unxa);
        Bot.say(room, `${locked.join(', ')}`);
    }
}