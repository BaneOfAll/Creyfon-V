module.exports ={
    permissions: "gamma",
    help: `Suggests a random type. Syntax: ${prefix}rt`,
    commandFunction: function (Bot, room, by, args, client) {
        let randomtypelc = typelist[Math.floor(Math.random()*typelist.length)];
        let captype = randomtypelc.charAt(0).toUpperCase() + randomtypelc.slice(1);
        Bot.say(room, `/addhtmlbox Random Type: <B>${captype}</B>`);
    }
}