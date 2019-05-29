module.exports ={
    permissions: "alpha",
    help: `Checks memory usage.`,
    commandFunction: function (Bot, room, by, args, client) {
    	let usageno = process.memoryUsage().heapUsed / 1024 / 1024;
    	let usagestr = usageno.toString();
    	let usagearr = usagestr.split('.');
        Bot.say(room, `${usagearr[0]}.${usagearr[1].substr(0,1)} MB`);
    }
}