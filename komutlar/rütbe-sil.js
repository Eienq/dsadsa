const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);
  let e3 = await db.fetch(`roldavet2_${message.guild.id}`);
  let rol = message.mentions.roles.first();
  if (!rol) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Lütfen silinecek rütbenin rolünü etiketleyiniz!`)
      .setColor("BLACK")
.setFooter("Rawien 🖤 1940")
    message.channel.send(embed);
    return;
  }
  if (rol.id === veri) {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Başarıyla rütbeler arasında **${
          message.guild.roles.get(veri).name
        }** rolüne sahip rütbe silindi!`
      )
      .setColor("BLACK")
.setFooter("Rawien 🖤 1940")
    message.channel.send(embed);

    if (!veri) {
      await db.delete(`rol1_${message.guild.id}`);
      await db.delete(`roldavet1_${message.guild.id}`);
    } else {
      await db.set(`rol1_${message.guild.id}`, veri2);
      await db.set(`roldavet1_${message.guild.id}`, e3);
      await db.delete(`rol2_${message.guild.id}`);
      await db.delete(`roldavet2_${message.guild.id}`);
      return;
    }
  } else if (rol.id === veri2) {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Başarıyla rütbeler arasında **${
          message.guild.roles.get(veri2).name
        }** rolüne sahip rütbe silindi!`
      )
      .setColor("BLACK")
.setFooter("Rawien 🖤 1940")
    message.channel.send(embed);

    await db.delete(`rol2_${message.guild.id}`);
    await db.delete(`roldavet2_${message.guild.id}`);
    return;
  } else {
    const embed = new Discord.RichEmbed()
      .setDescription(`Rütbeler arasında böyle bir rütbe bulamadım!`)
      .setColor("BLACK")
.setFooter("Rawien 🖤 1940")
    message.channel.send(embed);
    return;
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: "rütbe-sil",
  description: "rütbe-sil",
  usage: "rütbe-sil"
};
//DEVTR