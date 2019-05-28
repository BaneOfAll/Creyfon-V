module.exports = {
	permissions: 'admin',
	help: `!code Adds persistent commands. Syntax: ${prefix}addcommand (commandname); (commandpermissions); (command help); (command output)\nThe permissions are to be entered as any ONE of the following: admin, alpha, beta, gamma, none. Rank permissions carry over to higher ranks.\nDo not include any non-alphanumeric characters in the command name, or any semicolons in the help. Do not use the " or ' characters.`,
	commandFunction: function (Bot, room, by, args, client) {
		const fs = require('fs');
		const cofol = './commands';
		if (!args[0]) return Bot.say(room, 'Invalid input.');
		let permarr = ['alpha', 'admin', 'beta', 'gamma', 'none'];
		let remma = args.join(' ');
		let remmargs = remma.split(';');
		let cspeco = remmargs.shift();
		let speco = toId(cspeco);
		fs.readdir(cofol, (e, files) => {
			let carr = [];
			files.forEach(function(element) {
				if (element.endsWith('.js')) {
					carr.push(element.slice(0,-3));
				}
			});
			if (carr.includes(speco)) return Bot.say(room, 'That command already exists.');
			if (!remmargs[2]) return Bot.say(room, unxa);
			let comper = remmargs.shift();
			if (!permarr.includes(toId(comper))) return Bot.say(room, 'Invalid permissions type.');
			let comhelp = remmargs.shift();
			let comout = remmargs.join(';');
			let remmes = args.join(' ');
		    let commandcontent = `module.exports ={\n    permissions: "${toId(comper)}",\n    help: \`${comhelp}\`,\n    commandFunction: function (Bot, room, by, args, client) {\n        Bot.say(room, \`${comout}\`);\n    }\n}`;
			fs.writeFile(`./commands/${speco}.js`, commandcontent, function(err) {
				if (err) console.log(err);
				Bot.say(room, 'Command added.');
				Bot.log(`The ${speco} command was added.`);
			})
		});
	}
}