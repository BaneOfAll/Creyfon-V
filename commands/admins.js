module.exports ={
    permissions: "none",
    help: `Displays a list of Bot admins. Syntax: ${prefix}admins`,
    commandFunction: function (Bot, room, by, args, client) {
    	if (args[0]) return Bot.say(room, unxa);
        Bot.say(room, `${admin.join(', ')}`);
    }
}