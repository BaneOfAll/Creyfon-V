module.exports ={
    permissions: "gamma",
    help: `Logs stuff. ${prefix}log (text)`,
    commandFunction: function (Bot, room, by, args, client) {
    	if (!args[0]) return Bot.say(room, 'Nothing to log.');
        Bot.log(args.join(' '));
    }
}