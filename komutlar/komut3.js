const Discord = require('discord.js');

let botid = ('581596432780361750') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Komutları`)
.addField('l!rolinfo', 'Rol hakkında info verir')
    .addField('l!boks-maknesi', 'Boks Makinesine vurur')
    .addField('l!kedi', 'Rastgele Kedi resmi atar')
    .addField('l!15tem-çerçeve', '15 Temmuz Çerçevesi Ekler')
    .addField('l!seviye', 'Seviye sistemi')
    .addField('l!sunucumutanıt', 'Sunucunuzu Destek Sunucumuzda Tanıtır')
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
  name: 'komut3',
  description: '',
  usage: ''
};
   