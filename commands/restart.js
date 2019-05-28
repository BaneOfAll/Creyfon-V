module.exports ={
    permissions: "admin",
    help: `Restarts the Bot. Syntax: ${prefix}restart`,
    commandFunction: function (Bot, room, by, args, client) {
        if (args[0]) return Bot.say(room, unxa);
        function BotReconnect() {
        	Bot.connect;
        } 
        Bot.disconnect();
        setTimeout(BotReconnect, 10000);
    }
}