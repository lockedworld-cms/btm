const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
	client.appInfo = await client.fetchApplication();
    setInterval( async () => {
      client.appInfo = await client.fetchApplication();
    }, 60000);
    
    require("../util/dashboard.js")(client);
};
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "Yapmcım : LockedWorld#7083",
        "Destek sunucumuza gelmek için l!desteksunucum yazabilirsiniz",
        "💪 7/24 Aktif!",  
        "💡 l!davet | Botumuzu ekleyin",
        "👨  2788 Kullanıcı!",
        "🌍  7 Sunucuda Hizmet!",
        "l!yardım 🔥 + l!davet 🔥 + l!otorolaç"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.youtube.com/lockedworld");
        }, 2 * 2500);
}