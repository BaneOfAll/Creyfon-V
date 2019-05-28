module.exports = {
	permissions: 'admin',
	help: 'Kills the Bot.',
	commandFunction: function (Bot, room, by, args, client) {
		Bot.disconnect();
	}
}