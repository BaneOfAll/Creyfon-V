module.exports ={
    permissions: "none",
    help: `Lists all the Bot commands accessible to the user. Syntax: ${prefix}commands`,
    commandFunction: function (Bot, room, by, args, client) {
        if (args[0]) return Bot.say(room, unxa);
        fs.readdir('./commands', function(e, files) {
            if (e) console.log(e.stack);
            let larr = [];
            files.forEach(function(element) {
                if (!element.endsWith('.js')) return;
                if (element.charAt(0).toUpperCase() === element.charAt(0)) return;
                larr.push(element);
            });
            //Bot.say(room, `!code ${larr.join('\n')}`);
            let carradmin = [];
            let carralpha = [];
            let carrbeta = [];
            let carrgamma = [];
            let carrnone = [];
            larr.forEach(function(element) {
                var creq = require(`./${element}`);
                if (creq.permissions === 'admin') carradmin.push(element.slice(0,-3));
                else if (creq.permissions === 'alpha') carralpha.push(element.slice(0,-3));
                else if (creq.permissions === 'beta') carrbeta.push(element.slice(0,-3));
                else if (creq.permissions === 'gamma') carrgamma.push(element.slice(0,-3));
                else if (creq.permissions === 'none') carrnone.push(element.slice(0,-3));
                else return;
            });
            if (admin.includes(toId(by))) Bot.pm(by, `Admin commands: ${carradmin.join(', ')}`);
            if (admin.includes(toId(by)) || alpha.includes(toId(by))) Bot.pm(by, `Alpha commands: ${carralpha.join(', ')}`);
            if (admin.includes(toId(by)) || alpha.includes(toId(by)) || beta.includes(toId(by))) Bot.pm(by, `Beta commands: ${carrbeta.join(', ')}`);
            if (admin.includes(toId(by)) || alpha.includes(toId(by)) || beta.includes(toId(by)) || gamma.includes(toId(by))) Bot.pm(by, `Gamma commands: ${carrgamma.join(', ')}`);
            Bot.pm(by, `Commands: ${carrnone.join(', ')}`);
        });
    }
}