const Discord = require('discord.js');

let botid = ('581596432780361750') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Komutları`)
.addField('l!tr', 'Avatarınıza Türkiye Bayrağı Ekler')
.addField('l!otorolaç', 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.')
.addField('l!otorolkapat', 'Otorol kapatır')
.addField('l!otorolmkapat', 'Otorol mesajını kapatır')
.addField('l!ping', 'Botun pingini gösterir')
.addField('l!sunucubilgi', 'Sunucu hakkında bilgi verir.')
.addField('l!slots', 'Slots oyunu oynatır')
.addField('l!steamfiyat', 'Aradağınız oyunun steamdaki fiyatına bakmanızı sağlar')
.addField('l!sustur', 'İstediğiniz kişiyi  susturur.')
.addField('l!csgo', 'CS:GO kasa açma simülasyonu')
.addField('l!unban', 'İstediğiniz kişinin banını kaldırır.')
.addField('l!uyar', 'İstediğiniz kişiyi uyarır.')
.addField('l!komut', 'Tüm komutları listeler')
.addField('l!çekilişyap', 'Çekiliş yapar.')
.addField('l!öneri', 'bot hakkındaki önerilerinizi bot sahiplerine ulaştırır')
.addField('l!yazı-kanal-aç', 'Bir metin kanalı açar')
.addField('l!saat', 'Şuan saat kaç')
.addField('l!speedtest', 'İnternet Hızınızı Ölçer')
.addField('l!gta', 'GTA Efekti')
.addField('l!intihar-et', 'İntihar Et')
.addField('l!davet-sıralaması', 'En Çok Davet Atanlar')
.addField('l!kapaklaflar', 'Kapak Laflar Koyar')
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/ND4kQkv) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'komut2',
  description: '',
  usage: ''
};
   