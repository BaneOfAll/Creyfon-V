module.exports ={
    permissions: "gamma",
    help: `Applauds.`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `/me applauds`);
    }
}