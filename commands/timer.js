module.exports ={
    permissions: "gamma",
    help: `Sets a timer. Syntax: ${prefix}timer (time in minutes), (output)`,
    commandFunction: function (Bot, room, by, args, client) {
        function newTimer(room, output) {
          Bot.say(room, output);
        }
        msgcon = args.join(' ');
        msgspl = msgcon.split(',');
        if (msgspl.length < 2) return Bot.say(room, unxa);
        ttime = msgspl.shift();
        if (isNaN(ttime)) return Bot.say(room, 'Invalid time.');
       
        setTimeout(newTimer, parseInt(ttime)*60000, room, ` ${msgspl.join(', ')}`);
        Bot.say(room, `Timer set for ${ttime} minute(s).`);
    }
}