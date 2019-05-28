module.exports ={
    permissions: "gamma",
    help: `Says UwU.`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `UwU`);
    }
}