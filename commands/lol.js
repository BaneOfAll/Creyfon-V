module.exports ={
    permissions: "none",
    help: "Laughs, I guess?",
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, "/me laughs");
    }
}