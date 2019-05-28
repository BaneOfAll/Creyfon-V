module.exports ={
    permissions: "none",
    help: `Casts a vote while a Type Poll is running! Syntax: ${prefix}vote (type)`,
    commandFunction: function (Bot, room, by, args, client) {
    	global.finaltype = '';
        if (pollStat === 'inactive') return Bot.say(room, 'There are no polls currently active.');
        if (pollStat === 'active') {
        	if (!args[0]) return Bot.say(room, unxa);
        	let votedtype = args[0].toLowerCase();
        	if (!typelist.includes(votedtype)) return Bot.say(room, 'Invalid type.');
        	if (voters.includes(toId(by))) return Bot.say(room, 'You have already voted for this poll!');
        	voters.push(toId(by));
        	votes.push(votedtype);
        	Bot.say(room, 'Your vote has been cast.');
        }
    }
}