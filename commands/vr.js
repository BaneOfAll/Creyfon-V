module.exports ={
    permissions: "beta",
    help: `Displays the VR for a given type. Syntax: ${prefix}vr (type)`,
    commandFunction: function (Bot, room, by, args, client) {
    	const vrt = require('./VRF.js');
        if (!args[0]) return Bot.say(room, unxa);
        if (args[1]) return Bot.say(room, unxa);
        let giventype = args[0].toLowerCase();
        if (!typelist.includes(giventype)) return Bot.say(room, 'Type not found.');
        let ftype = vrt[giventype];
        if (ftype == undefined) return Bot.say(room, 'Type has not been added yet. Please contact the Type Expert and ask them to add it, soon.');
        let tbdis = ['sp', 's', 'sm', 'ap', 'a', 'am', 'bp', 'b', 'bm', 'cp', 'c', 'cm', 'd', 'unt', 'e'];
        let pctbdis = [];
        tbdis.forEach(function(element) {
          if (ftype[element] == "undefined") return;
          if (ftype[element].length == 0) return;            
          pctbdis.push(element);
        });
        let ftr = [];
        var texpert = '';
        var bans = '';
        if (pctbdis.includes('sp')) ftr.push('S+: ' + ftype.sp.join(', '));
        if (pctbdis.includes('s')) ftr.push('S: ' + ftype.s.join(', '));
        if (pctbdis.includes('sm')) ftr.push('S-: ' + ftype.sm.join(', '));
        if (pctbdis.includes('ap')) ftr.push('A+: ' + ftype.ap.join(', '));
        if (pctbdis.includes('a')) ftr.push('A: ' + ftype.a.join(', '));
        if (pctbdis.includes('am')) ftr.push('A-: ' + ftype.am.join(', '));
        if (pctbdis.includes('bp')) ftr.push('B+: ' + ftype.bp.join(', '));
        if (pctbdis.includes('b')) ftr.push('B: ' + ftype.b.join(', '));
        if (pctbdis.includes('bm')) ftr.push('B-: ' + ftype.bm.join(', '));
        if (pctbdis.includes('cp')) ftr.push('C+: ' + ftype.cp.join(', '));
        if (pctbdis.includes('c')) ftr.push('C: ' + ftype.c.join(', '));
        if (pctbdis.includes('cm')) ftr.push('C-: ' + ftype.cm.join(', '));
        if (pctbdis.includes('d')) ftr.push('D: ' + ftype.d.join(', '));
        if (pctbdis.includes('e')) ftr.push('E: ' + ftype.e.join(', '));
        if (pctbdis.includes('unt')) ftr.push('Untiered: ' + ftype.unt.join(', '));
        if (ftype.expert.length == 1) texpert = `Expert: ${ftype.expert[0]}`;
        else if (ftype.expert.length == 0) texpert = 'Experts: None';
        else texpert = `Experts: ${ftype.expert.join(', ')}`;
        if (ftype.bans.length == 0) bans = 'None';
        else bans = ftype.bans.join(', ');
        Bot.say(room, `/addhtmlbox <DETAILS><SUMMARY>${args[0].charAt(0).toUpperCase() + args[0].slice(1)} VR</SUMMARY><HR>${ftr.join('<BR>')}<BR><BR>Bans: ${bans}<BR><BR>${texpert}</DETAILS>`);
    }
}