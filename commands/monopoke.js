module.exports ={
    permissions: "beta",
    help: `Starts a Monopoke Tour. Syntax: ${prefix}monopoke (name [optional])`,
    commandFunction: function (Bot, room, by, args, client) {
        var pkmn = require('pokemon');
         if (!args[0]) {
            var randpoken = Math.floor(Math.random() * 805) + 1;
            var pokemonname = pkmn.getName(randpoken);
            return Bot.say(room, `/tour create 1v1, rr, 64, 2\n/tour rules -OU, -UU, -RU, -NU, -PU, -ZU, -NFE, -LC, -Uber, -UUBL, -RUBL, -NUBL, -PUBL, -NFE, -LC Uber, +${pokemonname}, !Team Preview\n/tour autostart 5\n/tour autodq 3\n/tour name Monopoke ${pokemonname}\n/wall Monopoke ${pokemonname}!`);
        }
        else {
            var pokemonnam = args.join(' ');
            Bot.say(room, `/tour create 1v1, rr, 64, 2\n/tour rules -OU, -UU, -RU, -NU, -PU, -ZU, -NFE, -LC, -Uber, -UUBL, -RUBL, -NUBL, -PUBL, -NFE, -LC Uber, +${pokemonnam.charAt(0).toUpperCase() + pokemonnam.slice(1)}, !Team Preview\n/tour autostart 5\n/tour autodq 3\n/tour name Monopoke ${pokemonnam.charAt(0).toUpperCase() + pokemonnam.slice(1)}\n/wall Monopoke ${pokemonnam.charAt(0).toUpperCase() + pokemonnam.slice(1)}!`);
        }
    }
}