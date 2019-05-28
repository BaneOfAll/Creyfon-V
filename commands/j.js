module.exports ={
    permissions: "alpha",
    help: `Joins a given room. Syntax: ${prefix}j (room)`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `/j ${args.join(' ')}`);
    }
}