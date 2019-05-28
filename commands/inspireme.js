module.exports ={
    permissions: "none",
    help: `Gives a random viable Pokémon from the given type. Syntax: ${prefix}inspireme (type)`,
    commandFunction: function (Bot, room, by, args, client) {
        var randarr = require('./RANDPOKE.js');
        if (!args[0]) return Bot.say(room, '!randpoke !uber, weight > 1.1 | weight < 1.1, !electric surge, !teravolt, !lc, !lcuber, !nfe, !deltastream, hp > 160 | hp < 160, !disguise');
        if (typelist.includes(args[0].toLowerCase())) {
            let gtype = randarr[args[0].toLowerCase()];
            if (gtype == undefined) return Bot.say(room, 'Type has not been added yet. Blame PartMan for being a Slowpoke.')
            let grandp = gtype[Math.floor(Math.random()*gtype.length)];
            if (admin.includes(toId(by)) || alpha.includes(toId(by)) || beta.includes(toId(by)) || gamma.includes(toId(by))) return Bot.say(room, `!dt ${grandp}`);
            else return Bot.pm(by, `!dt ${grandp}`);
        }
        if (isNaN(parseInt(args[0]))) {
        	if (admin.includes(toId(by)) || alpha.includes(toId(by)) || beta.includes(toId(by)) || beta.includes(toId(by))) return Bot.say(room, 'Invalid argment. Please enter a number/type.');
        	else return Bot.pm(by, 'Invalid argment. Please enter a number/type.');
        }
        else {
        	if (admin.includes(toId(by)) || alpha.includes(toId(by)) || beta.includes(toId(by)) || beta.includes(toId(by))) return Bot.say(room, `!randpoke ${args[0]}, !uber, weight > 1.1 | weight < 1.1, !electric surge, !teravolt, !lc, !lcuber, !nfe, !deltastream, hp > 160 | hp < 160, !disguise`);
        	else return Bot.pm(by, `!randpoke ${args[0]}, !uber, weight > 1.1 | weight < 1.1, !electric surge, !teravolt, !lc, !lcuber, !nfe, !deltastream, hp > 160 | hp < 160, !disguise`);
        }
    }
}