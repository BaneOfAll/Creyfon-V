module.exports ={
    permissions: "gamma",
    help: `Pats someone.`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `/me pats ${args.join(' ')}`);
    }
}