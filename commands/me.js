module.exports ={
    permissions: "none",
    help: `Displays the rank of the user in the Bot. Syntax: ${prefix}me`,
    commandFunction: function (Bot, room, by, args, client) {
    	if (args[0]) return Bot.say(room, unxa);
    	let rankarr = '';
        if (admin.includes(toId(by))) rankarr = 'a Bot Admin';
        else if (alpha.includes(toId(by))) rankarr = 'an Alpha';
        else if (beta.includes(toId(by))) rankarr = 'a Beta';
        else if (gamma.includes(toId(by))) rankarr = 'a Gamma';
        else rankarr = 'a pleb';
        Bot.say(room, `You are ${rankarr}.`);
    }
}