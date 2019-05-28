module.exports ={
    permissions: "beta",
    help: `Starts standard Type Challenge Tours. Syntax: ${prefix}tc (random/[type]) (e[n]/rr/drr)`,
    commandFunction: function (Bot, room, by, args, client) {
    	const tours = require('./TOURS.js');
    	if (!args[0]) return Bot.say(room, unxa);
    	if (args[2]) return Bot.say(room, unxa);
    	if (args[0] === 'r' || args[0] === 'random') {
    	    randomtype = typelist[Math.floor(Math.random()*typelist.length)];
            args.shift();
            args.unshift(randomtype);
        }
        let giventype = args[0].toLowerCase();
    	if (!typelist.includes(giventype)) return Bot.say(room, 'Type not found.');
    	let tourtype = '';
    	if (!args[1]) tourtype = '1v1, rr, 128, 2';
    	else if (args[1] === 'drr') tourtype = '1v1, rr, 128, 2';
    	else if (args[1] === 'rr') tourtype = '1v1, rr, 128, 1';
    	else if (args[1].startsWith('e')) {
    		let nomb = args[1].slice(1);
    		let elnum = parseInt(nomb);
    		if (isNaN(elnum)) tourtype = '1v1, elim, 128, 1';
    		else tourtype = `1v1, elim, 128, ${elnum}`;
    	}
    	else return Bot.say(room, 'Invalid Tour type.');

    	Bot.say(room, `/tour create ${tourtype}`);
    	if (useDiscord) client.channels.get('CHANNEL_ID').send(`Type: ${giventype.charAt(0).toUpperCase() + giventype.slice(1)} Tour started!`);
    	Bot.say(room, `/tour autodq 3\n/tour autostart 3`);
    	function staggerSay(Bot, room, message, giventype) {
    		Bot.say(room, message);
    		Bot.say(room, `$settype ${giventype.charAt(0).toUpperCase() + giventype.slice(1)}`);
    	}
    	setTimeout(staggerSay, 1200, Bot, room, tours[giventype], giventype);
    }
}