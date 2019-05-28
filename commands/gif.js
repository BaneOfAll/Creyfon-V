module.exports ={
    permissions: "gamma",
    help: `Dispays the gif of a given Pokémon. Does not support periods. Syntax: ${prefix}gif (Pokémon)`,
    commandFunction: function (Bot, room, by, args, client) {
    	var pkmnlink = require('./POKEMON.js');
    	if (!args[0]) return Bot.say(room, unxa);
    	let pokemonnam = args.join(' ').toLowerCase();
        if (pokemonnam === 'vanish') return Bot.say(room, '/adduhtml PKMNGIF, <COMMENT>');
    	if (pokemonnam === 'deg') pokemonnam = 'gengar-mega';
    	if (pokemonnam === 'uop' || pokemonnam === 'unleashourpassion' || pokemonnam === 'mez') pokemonnam = 'durant';
    	if (pokemonnam === 'toppy' || pokemonnam === 'toppytopic' || pokemonnam === 'tapioca' || pokemonnam === 'tapiocatopic') pokemonnam = 'mew';
    	if (pokemonnam === 'cabbbages') pokemonnam = 'clefable';
    	if (pokemonnam === 'vg' || pokemonnam === 'vgjungle' || pokemonnam === 'vg jungle') pokemonnam = 'kyurem';
    	if (pokemonnam === 'partbot') pokemonnam = 'gengar';
    	if (pokemonnam === 'armaldlo') pokemonnam = 'armaldo';
    	if (pokemonnam === 'partman') pokemonnam = 'chandelure';
    	if (pokemonnam === 'our lord and saviour') pokemonnam = 'dwebble';
        if (pokemonnam === 'tlouk') pokemonnam = 'nosepass';
        if (pokemonnam === '1v1sp') pokemonnam = 'exeggutor-alola';
        if (pokemonnam === 'ape711' || pokemonnam === 'ape') pokemonnam = 'castform';
        if (pokemonnam === 'vrbot') pokemonnam = 'arbok';
        //if (pokemonnam === 'krytocon') pokemonnam = 'sylveon';
        if (pokemonnam === 'ayedan') pokemonnam = 'skarmory';
        if (pokemonnam === 'gmfc') pokemonnam = 'breloom';
        //if (pokemonnam === 'praise groudonism') pokemonnam = 'groudon-primal';
        if (pokemonnam === 'ic' || pokemonnam === 'iron crusher' || pokemonnam === 'ironcrusher') pokemonnam = 'bastiodon';
        if (pokemonnam === 'tally' || pokemonnam === 'talldaorangez') pokemonnam = 'wartortle';
        //if (pokemonnam === 'screwcario') pokemonnam = 'riolu';
        if (pokemonnam === 'smajet') pokemonnam = 'jolteon';
        if (pokemonnam === 'smajbot') pokemonnam = 'unown';
        if (pokemonnam === 'xfix') pokemonnam = 'xatu';
        if (pokemonnam === 'theseelgoesmeow') pokemonnam = 'seel';
        if (pokemonnam === 'freddy kyogre' || pokemonnam === 'freddy') pokemonnam = 'kyogre';
        if (pokemonnam === 'the minty altoids' || pokemonnam === 'themintyaltoids' || pokemonnam === 'minty' || pokemonnam === 'mint') pokemonnam = ''
        if (pokemonnam === 'princessnature' || pokemonnam === 'princess nature') pokemonnam = 'gardevoir-mega';
        if (pokemonnam === 'raj.shoot' || pokemonnam === 'raj') pokemonnam = 'charizard-megax';
    	if (pokemonnam === 'yech' || pokemonnam === 'yeche') return Bot.say(room, 'Pokémon not found. Did you mean: Touhou Addict?');
        if (pokemonnam === 'touhou addict') return Bot.say(room, 'Pokémon not found. Did you mean: Yech E?');
    	if (!pkmnlink.pokemon.includes(pokemonnam)) return Bot.say(room, 'Pokémon not found.');
    	Bot.say(room, `/adduhtml PKMNGIF,<CENTER><IMG src="https://play.pokemonshowdown.com/sprites/xyani/${pokemonnam}.gif" height="0" width="0" style="width:auto;height:auto"></CENTER>`);
    }
}