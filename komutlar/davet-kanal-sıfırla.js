const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
      .setDescription("```Vah Vah Vah Gariban Bu Komutu Kullanamıyoo.```")
    .setFooter("Dvice 🖤 Scylla")
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }

  let kanal = await db.fetch(`davetkanal_${message.guild.id}`)

  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("Davet kanalı zaten ayarlanmamış!")
    .setFooter("Dvice 🖤 Scylla")
        .setColor("BLACK")
    );
  }
  db.delete(`davetkanal_${message.guild.id}`)
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setFooter("Dvice 🖤 Scylla")
    .setDescription(`Davet kanalı başarıyla sıfırlandı!`);
  message.channel.send(embed);
return
  
};

module.exports.conf = {
  aliases: ["davetkanalsıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal-sıfırla",
  description: "davet-kanal-sıfırla",
  usage: "davet-kanal-sıfırla"
};
