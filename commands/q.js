module.exports ={
    permissions: "gamma",
    help: `Quotes. Syntax: ${prefix}q (add/list/amt/number[optional])`,
    commandFunction: function (Bot, room, by, args, client) {
      const qfol = './commands/quotes';
      if (!args[0]) {
        fs.readdir(qfol, (e, files) => {
          let randqn = (1 + Math.floor(Math.random()*(files.length - 1)));
          try {
            var fdata = fs.readFileSync(`./commands/quotes/q${randqn}.txt`, 'utf8');
            var rdata = fdata.toString();
            let noofl = rdata.split('\n');
            if (noofl.length == 1) return Bot.say(room, `\`\`${fdata.toString()}\`\``);
            else return Bot.say(room, `!code ${rdata.toString()}`);       
          }
          catch (e) {
            return console.log(e.stack);
          }
        });
      }

      else if (args[0] === 'amt') {
        if (args[1]) return Bot.say(room, 'Unexpected number of arguments.');
        fs.readdir(qfol, (e, files) => {
          try {
            if (files.length === 2) {
              return Bot.say(room, 'We have 1 quote, so far.');
            }
            else {
              return Bot.say(room, `We have ${files.length - 1} quotes, so far.`);
            }
          }
          catch (e) {
            return console.log(e.stack);
          }
        });
      }

      else if (args[0] === 'add') {
        if (!beta.includes(toId(by)) && !alpha.includes(toId(by)) && !admin.includes(toId(by))) return Bot.say(room, 'Access denied.');
        fs.readdir(qfol, (e, files) => {
          if (e) throw e;
          remone = args.shift();
          let quotepres = args.join(' ');
          let quotearr = quotepres.split('\\n ');
          let quotetba = quotearr.join('\n');
          fs.writeFile(`./commands/quotes/q${files.length}.txt`, quotetba, function (err) {
            if (err) throw err;
            Bot.say(room, 'Quote added.');
            return console.log(`Quote added by ${by}: ${quotetba}`);
          });
        });
      }

      else if (args[0] === 'list') {
        if (args[1]) return Bot.say(room, 'Unexpected number of arguments.');
        fs.readdir(qfol, (e, files) => {
          if (e) throw e;
          let qdata = [];
          for (var i = 1; i < files.length; i++) {
            var qtext = fs.readFileSync(`./commands/quotes/q${i}.txt`);
            qdata.push(`${i}: \n${qtext}`);
          }
          if(qdata.length == files.length-1) {
            Bot.say(room, `!code ${qdata.join('\n\n\n')}`);
          }
        });
      }

      else {
        if (!args[0]) return;
        fs.readdir(qfol, (e,files) => {
          try {
            var qu = parseInt(args[0], 10);
            if (qu < files.length) {
              var quotetbdd = fs.readFileSync(`./commands/quotes/q${qu}.txt`, 'utf8');
              var quotetbd = quotetbdd.toString();
              let noofl = quotetbd.split('\n');
              if (noofl.length == 1) Bot.say(room, `\`\`${quotetbdd.toString()}\`\``);
              else Bot.say(room, `!code ${quotetbd.toString()}`);
            }
            else Bot.say(room, 'Quote not found.');
          }
          catch (e) {
            console.log(e.stack);
          }
        });
      }
    }
}