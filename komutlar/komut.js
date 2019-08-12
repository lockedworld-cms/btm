const Discord = require('discord.js');

let botid = ('581596432780361750') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Komutları`)
    .addField('l!sunucu-kur', 'Sunucuyu otomatik kurar odalar oluşturur')
 .addField('l!reklam-taraması', 'Kullanıcıların Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar.')
.addField('l!atatürk', 'Atatürk')
.addField('l!avatar', 'Avatarınızı gösterir')
.addField('l!aze', 'Avatarınıza Azerbaycan Bayrağı Ekler')
.addField('l!aşkölçer', 'İki Kullanıcı Arasındaki Aşkı Ölçer.')
.addField('l!ban', 'İstediğiniz kişiyi banlar.')
.addField('l!başvuru', 'Kullanıcıyı terfi ettirir.')
.addField('l!kullanıcıbilgim', 'Komutu kullanan kişi hakkında bilgi verir.')
.addField('l!duyuruyap', 'Sunucuda Duyuru yapmanızı sağlar.')
.addField('l!emojiyaz', 'Mesajınızı emoji haline getirir')
.addField('l!espri', 'Espri yapar.')
.addField('l!sahtemesaj', 'Kullanıcıların Adına Sahte Mesaj Gönderebilirsiniz.')
.addField('l!hg-kanal', 'Resimli hoş geldin ayarlar')
    .addField('l!bb-kanal', 'Resimli Hoş çakal ayarlar')
.addField('l!kayıtol', 'Sunucuya kayıt olursunuz!')
.addField('l!kick', 'İstediğiniz kişiyi sunucudan atar.')
.addField('l!kilit', 'Kanalı istediğiniz kadar süreyle kitler.')
.addField('l!temizle', 'Belirlenen miktar mesajı siler.')
    .addField('l!canlı-destek', 'Botla ilgili sıkıntılarda anında destek almanızı sağlar')
    .addField('l!sayaçayarla', 'Sayaç ayarlar')
    .addField('l!sayaçkapat', 'Sayaç sıfırlar')
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/ND4kQkv) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'komut',
  description: '',
  usage: ''
};
   