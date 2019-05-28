module.exports = {
	permissions: 'alpha',
	help: 'Adds a Gamma user.',
	commandFunction: function (Bot, room, by, args, client) {
		if (!args[0]) return Bot.say(room, 'Who?');
		let tbpro = toId(args.join(' '));
		if (admin.includes(tbpro)) return Bot.say(room, 'That person is an Admin!');
		if (alpha.includes(tbpro)) return Bot.say(room, 'That person is an Alpha!');
		if (beta.includes(tbpro)) return Bot.say(room, 'That person is a Beta!');
		if (gamma.includes(tbpro)) return Bot.say(room, 'That person is already a Gamma!');
		gamma.push(tbpro);
		Bot.say(room, 'Added to Gamma.');
		Bot.log(`${args.join(' ')} was promoted to Gamma.`);
	}
}