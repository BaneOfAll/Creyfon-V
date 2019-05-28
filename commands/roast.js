module.exports ={
    permissions: "gamma",
    help: `Roasts someone!`,
    commandFunction: function (Bot, room, by, args, client) {
    	if (!args[0]) return Bot.say(room, unxa);
    	let tbroa = args.join(' ');
    	if (toId(tbroa) === toId(nickName)) return Bot.say(room, 'No thanks.');
    	if (toId(tbroa) === toId(owner)) tbroa = by;
        let roasts = [`It isn't worth roasting ${tbroa}; it's way too easy.`, `I wonder why you'd ask me to roast ${tbroa}. Their very existence is enough of one.`, `${tbroa}, if I said you were a decent human being, I'd be wrong.`, `If I had to choose between saying 'UwU' to ${tbroa} and kissing an anaconda, we'd have a new snake-human hybrid species.`, `If I were in a room with a gun, two bullets, ${tbroa}, the Devil, and Hitler, I'd shoot ${tbroa} - twice.`, `I cant roast ${tbroa}, I already took out the trash`, `I'd rather not stoop to ${tbroa}'s' level, thank you very much.`, ``];
        Bot.say(room, roasts[Math.floor(Math.random()*roasts.length)]);
    }
}