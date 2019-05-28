module.exports ={
    permissions: "none",
    help: `Displays a list of Beta users. Syntax: ${prefix}betas`,
    commandFunction: function (Bot, room, by, args, client) {
    	if (args[0]) return Bot.say(room, unxa);
        Bot.say(room, `${beta.join(', ')}`);
    }
}