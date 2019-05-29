module.exports = {
    permissions: "admin",
    help: `Toggles chat logging in the room.`,
    commandFunction: function (Bot, room, by, args, client) {
        if (logRooms.includes(room)) {
            Bot.say(room, `Chat logging disabled for ${room}.`);
            logRooms.splice(logRooms.indexOf(room), 1);
            Bot.log(`Chat logging disabled for: ${room}.`);
        }
        else if (!logRooms.includes(room)) {
            Bot.say(room, `Chat logging enabled for ${room}.`);
            logRooms.push(room);
            Bot.log(`Chat logging enabled for: ${room}.`);
        }
        else return Bot.say(room, 'Error occurred.');
    }
}
