module.exports ={
    permissions: "alpha",
    help: `Agrees.`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `I agree.`);
    }
}