module.exports ={
    permissions: "none",
    help: `Displays a list of Alpha users. Syntax: ${prefix}alphas`,
    commandFunction: function (Bot, room, by, args, client) {
    	if (args[0]) return Bot.say(room, unxa);
        Bot.say(room, `${alpha.join(', ')}`);
    }
}