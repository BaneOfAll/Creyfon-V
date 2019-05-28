module.exports ={
    permissions: "beta",
    help: `OVERPAY!`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `/wall OVERPAY!`);
    }
}