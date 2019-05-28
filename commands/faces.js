module.exports ={
    permissions: "gamma",
    help: `Makes random faces. Syntax: ${prefix}faces`,
    commandFunction: function (Bot, room, by, args, client) {
    	let facearr = ['\\(o_o)/', 'UwU', 'OwO', '-_-', 'o.o'];
    	let face = facearr[Math.floor(Math.random()*facearr.length)];
        Bot.say(room, `${face}`);
    }
}