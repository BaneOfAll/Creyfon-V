module.exports = {
	permissions: 'alpha',
	help: `Unlocks a user. Syntax: ${prefix}unlock (user)`,
	commandFunction: function (Bot, room, by, args, client) {
		if (!args[0]) return Bot.say(room, 'Who?');
		let tbloc = toId(args.join(' '));
		if (!locked.includes(tbloc)) return Bot.say(room, "That person isn't locked.");
		locked.splice(locked.indexOf(tbloc), 1);
		Bot.say(room, 'User has been unlocked.');
		Bot.log(`${tbloc} has been unlocked.`);
	}
}