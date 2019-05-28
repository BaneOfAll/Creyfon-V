module.exports ={
    permissions: "gamma",
    help: `Displays the OM Intro.`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, '!htmlbox <CENTER><IMG src="https://i.ibb.co/x5S1mDT/DRUD.png" usemap="#image-map" height="195" width="417"><MAP name="image-map"><AREA target="" alt="Introduction" title="Introduction" name="send" value="INTRO" coords="37,23,170,50" shape="rect"><AREA target="" alt="Tiers List" title="Tiers List" name="send" value="TIERS" coords="30,154,114,191" shape="rect"><AREA target="" alt="Smogon" title="Smogon" href="https://www.smogon.com/forums/threads/1v1-oms.3648454/" coords="127,154,249,190" shape="rect"><AREA target="" alt="Roomauth" title="Roomauth" name="send" value="ROOMAUTH" coords="264,155,390,189" shape="rect"></MAP></CENTER>');
    }
}