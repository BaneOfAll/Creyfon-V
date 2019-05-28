module.exports ={
    permissions: "none",
    help: "Ping!",
    commandFunction: function (Bot, room, by, args, client) {
    	if (args[0]) return Bot.say(room, unxa);
    	let pongc = Math.floor(Math.random()*1000);
    	if (pongc < 50) return Bot.say(room, 'You win!');
    	if (pongc > 900) return Bot.say(room, 'You lose.');
        Bot.say(room, "Pong!");
    }
}