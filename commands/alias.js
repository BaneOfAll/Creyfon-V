module.exports ={
    permissions: "admin",
    help: `Adds an alias to an existing command. Syntax: ${prefix}alias (base command) (alias name)`,
    commandFunction: function (Bot, room, by, args, client) {
    	if (!args[1]) return Bot.say(room, unxa);
    	if (args[2]) return Bot.say(room, unxa);
    	let basecom = args[0].toLowerCase();
    	let alitba = args[1].toLowerCase();
        fs.readdir('./commands', (e, files) => {
        	if (e) console.log(e.stack);
        	if (!files.includes(`${basecom}.js`)) return Bot.say(room, "That command doesn't exist.");
        	if (files.includes(`${alitba}.js`)) return Bot.say(room, "That alias already exists.");
        	let comdata  =fs.readFileSync(`./commands/${basecom}.js`);
        	fs.writeFile(`./commands/${alitba}.js`, comdata, function(e) {
        		if (e) console.log(e.stack);
        		Bot.say(room, 'Alias has been added.');
        		Bot.log(`The ${alitba} alias was added to ${basecom}.`);
        	});
        });
    }
}