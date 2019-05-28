module.exports ={
    permissions: "admin",
    help: `Reloads commands. Syntax: ${prefix}reload (command)`,
    commandFunction: function (Bot, room, by, args, client) {
        fs.readdir('./commands', (e, files) => {
        	let commandName = toId(args.join(' '));
        	if (e) console.log(e);
        	if (commandName === 'eval' || commandName === 'help' || commandName === 'reload') return Bot.say(room, 'This command cannot be reloaded.');
        	if (!files.includes(`${commandName}.js`)) return Bot.say(room, 'That command does not exist.');
        	let recached = require(`./${commandName}.js`);
        	delete require.cache[require.resolve(`./${commandName}.js`)];
        	Bot.say(room, 'Command has been reloaded.');
            Bot.log(`The ${commandName} command was reloaded.`);
        });
    }  	
}