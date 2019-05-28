module.exports ={
    permissions: "beta",
    help: `Indicates the system uptime. Syntax: ${prefix}uptime`,
    commandFunction: function (Bot, room, by, args, client) {
        if (args[0]) return Bot.say(room, unxa);
        let upt = process.uptime()/60;
        let upts = upt.toString();
        let uptsa = upts.split('.');
        if (uptsa[0]==='1') Bot.say(room, `System has been up for 1 minute.`);
        else Bot.say(room, `System has been up for ${uptsa[0]} minutes.`);
    }
}