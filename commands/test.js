module.exports ={
    permissions: "admin",
    help: `BLANK`,
    commandFunction: function (Bot, room, by, args, client) {
        function testing(stuff, morestuff) {
        	console.log(stuff);
        	console.log(morestuff);
        }
        function changing(blah) {
        	first = blah;
        }
        var first = 'init';
        var second = 'INIT';
        setTimeout(changing, 1000, 'final');
        setTimeout(testing, 2000, first, second);
        console.log(first);
        console.log(second);
    }
}