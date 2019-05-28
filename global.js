const config = require('./config.js');

global.typelist = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];
global.unxa = 'Unexpected number of arguments.';
global.pollStat = 'inactive';
global.votarr = [];
global.voters = [];
global.votes = [];
global.tcroom = '1v1typechallenge';  
global.admin = [];
global.discordAdmin = [];
global.alpha = [];
global.beta = [];
global.gamma = [];
global.locked = [];
global.cfol = './commands';
global.dfol = './discordcommands';
global.logRooms = [];
global.prefix = config.prefix;
global.owner = config.owner;
global.nickName = config.nickName;
global.toId = function toId(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '');
}
global.fs = require('fs');
global.capitalize = function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.substr(1);
}
global.modeString = function modeString(array) {
    if (array.length == 0)
        return null;

    var modeMap = {},
        maxEl = array[0],
        maxCount = 1;

    for(var i = 0; i < array.length; i++)
        {
        var el = array[i];

        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;

        if (modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
        else if (modeMap[el] == maxCount)
        {
            maxEl += '&' + el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
global.DateString = function DateString() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return year + ":" + month + ":" + day + "::" + hour + ":" + min + ":" + sec;
}