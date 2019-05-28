module.exports = {
	permissions: 'admin',
	help: 'Adds an Alpha user.',
	commandFunction: function (Bot, room, by, args, client) {
		if (!args[0]) return Bot.say(room, 'Who?');
		let tbpro = toId(args.join(' '));
		if (admin.includes(tbpro)) return Bot.say(room, 'That person is an Admin!');
		if (alpha.includes(tbpro)) return Bot.say(room, 'That person is already an Alpha!');
		if (!beta.includes(tbpro)) return Bot.say(room, 'One must be a Beta to be promoted to Alpha.');
		beta.splice(beta.indexOf(tbpro));
		alpha.push(tbpro);
		Bot.say(room, 'Added to Alpha.');
		Bot.log(`${args.join(' ')} was promoted to Alpha.`);
	}
}