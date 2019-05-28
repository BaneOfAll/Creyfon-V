module.exports ={
    permissions: "gamma",
    help: `Starts a game of Hangman with a random Pokémon. Syntax: ${prefix}hangman`,
    commandFunction: function (Bot, room, by, args, client) {
        var pkmn = require('pokemon');
        var randPokeNum = Math.floor(Math.random() * 808) + 1;
        var hint = '';
        if (randPokeNum >= 1 && randPokeNum <= 151) hint = '1';
        if (randPokeNum >= 152 && randPokeNum <= 251) hint = '2';
        if (randPokeNum >= 252 && randPokeNum <= 386) hint = '3';
        if (randPokeNum >= 387 && randPokeNum <= 493) hint = '4';
        if (randPokeNum >= 494 && randPokeNum <= 649) hint = '5';
        if (randPokeNum >= 650 && randPokeNum <= 721) hint = '6';
        if (randPokeNum >= 722 && randPokeNum <= 909) hint = '7';
        var randPoke = pkmn.getName(randPokeNum);
        Bot.say(room, `/hangman create ${randPoke}, Generation: ${hint}`);
    }
}