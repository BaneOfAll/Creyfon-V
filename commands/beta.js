module.exports = {
	permissions: 'alpha',
	help: 'Adds a Beta user.',
	commandFunction: function (Bot, room, by, args, client) {
		if (!args[0]) return Bot.say(room, 'Who?');
		let tbpro = toId(args.join(' '));
		if (admin.includes(tbpro)) return Bot.say(room, 'That person is an Admin!');
		if (alpha.includes(tbpro)) return Bot.say(room, 'That person is an Alpha!');
		if (beta.includes(tbpro)) return Bot.say(room, 'That person is already a Beta!');
		if (!gamma.includes(tbpro)) return Bot.say(room, 'One must be a Gamma to be promoted to Beta.');
		gamma.splice(gamma.indexOf(tbpro));
 		beta.push(tbpro);
		Bot.say(room, 'Added to Beta.');
		Bot.log(`${args.join(' ')} was promoted to Beta.`);
	}
}