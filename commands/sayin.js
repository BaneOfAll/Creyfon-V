module.exports = {
	permissions: 'admin',
	help: `Repeats input in a given location. Syntax: ${prefix}sayin (room), (output)`,
	commandFunction: function (Bot, room, by, args, client) {
		let messagecon = args.join(' ');
		let nmarr = messagecon.split(',');
		if (!nmarr[1]) return Bot.say(room, unxa);
		let roomtsin = nmarr.shift();
		Bot.say(roomtsin, nmarr.join(','));
	}
}