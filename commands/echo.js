module.exports ={
    permissions: "beta",
    help: `Sends the given statement. Syntax: ${prefix}echo (line)`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, ` ${args.join(' ')}`);
    }
}