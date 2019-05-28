module.exports ={
    permissions: "gamma",
    help: `Guess.`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `/me pokes ${args.join(' ')}`);
    }
}