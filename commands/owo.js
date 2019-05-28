module.exports ={
    permissions: "gamma",
    help: `Says OwO.`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `OwO`);
    }
}