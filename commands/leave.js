module.exports ={
    permissions: "alpha",
    help: `Leaves a given room. Syntax: ${prefix}leave (room)`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `/leave ${args.join(' ')}`);
    }
}