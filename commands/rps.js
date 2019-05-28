module.exports ={
    permissions: "none",
    help: `Plays RPS! Syntax: ${prefix}rps (choice)`,
    commandFunction: function (Bot, room, by, args, client) {
    	if (!args) return Bot.say(room, unxa);
        function rpswin(type) {
        	if (type === 'rock') return 'Paper';
        	else if (type === 'paper') return 'Scissors';
        	else if (type === 'scissor' || type === 'scissors') return 'Rock';
        	else if (type === 'cradily') return 'Kartana';
        	else if (type === 'kartana') return 'Scizor';
        	else if (type === 'scizor') return 'Cradily';
        	else return 'something';
        }
        function rpslose(type) {
        	if (type === 'rock') return 'Scissors';
        	else if (type === 'paper') return 'Rock';
        	else if (type === 'scissor' || type === 'scissors') return 'Paper';
        	else if (type === 'cradily') return 'Scizor';
        	else if (type === 'kartana') return 'Cradily';
        	else if (type === 'scizor') return 'Kartana';
        }
        let chosenopt = args.join(' ').toLowerCase();
        let choicesarr = ['rock', 'paper', 'scissor', 'scissors', 'gun', 'scizor', 'cradily', 'kartana'];
        if (chosenopt === 'justice') return Bot.say(room, 'Only I may use Justice.');
        if (!choicesarr.includes(chosenopt)) return Bot.say(room, "It doesn't look like that option exists.");
        if (chosenopt === 'gun') return Bot.say(room, 'I chose Justice, so I win!');
        let rando = Math.floor(Math.random()*10);
        if (rando > 6) return Bot.say(room, `I chose ${rpslose(chosenopt)}, so I lost...`);
        else return Bot.say(room, `I chose ${rpswin(chosenopt)}, so I won!`);
    }
}