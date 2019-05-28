module.exports ={
    permissions: "gamma",
    help: `Displays the information of the type-resistance Berries. Syntax: ${prefix}berry (type)`,
    commandFunction: function (Bot, room, by, args, client) {
        if (!args[0]) return Bot.say(room, unxa);
        if (args[1]) return Bot.say(room, unxa);
        let giventype = args[0].toLowerCase();
        if (giventype === 'grass') Bot.say(room, '!dt Rindo Berry');
        if (giventype === 'bug') Bot.say(room, '!dt Tanga Berry');
        if (giventype === 'fire') Bot.say(room, '!dt Occa Berry');
        if (giventype === 'dark') Bot.say(room, '!dt Colbur Berry');
        if (giventype === 'dragon') Bot.say(room, '!dt Haban Berry');
        if (giventype === 'electric') Bot.say(room, '!dt Wacan Berry');
        if (giventype === 'fairy') Bot.say(room, '!dt Roseli Berry');
        if (giventype === 'fighting') Bot.say(room, '!dt Chople Berry');
        if (giventype === 'flying') Bot.say(room, '!dt Coba Berry');
        if (giventype === 'ghost') Bot.say(room, '!dt Kasib Berry');
        if (giventype === 'ground') Bot.say(room, '!dt Shuca Berry');
        if (giventype === 'ice') Bot.say(room, '!dt Yache Berry');
        if (giventype === 'normal') Bot.say(room, '!dt Chilan Berry');
        if (giventype === 'poison') Bot.say(room, '!dt Kebia Berry');
        if (giventype === 'psychic') Bot.say(room, '!dt Payapa Berry');
        if (giventype === 'rock') Bot.say(room, '!dt Charti Berry');
        if (giventype === 'steel') Bot.say(room, '!dt Babiri Berry');
        if (giventype === 'water') Bot.say(room, '!dt Passho Berry');
    }
}