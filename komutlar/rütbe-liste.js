const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${message.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);

  if (!veri) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Zaten herhangi bir rütbe ayarlanmamış!`)
      .setColor("BLACK")
    .setFooter("Berat 🖤 Artius")

    message.channel.send(embed);
  }
  ///////////////////
  if (veri) {
    if (!veri2) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `1 - Rol: **${
            message.guild.roles.get(veri).name
          }** - ${veri12} Davet!`
        )
        .setColor("BLACK")
    .setFooter("Berat 🖤 Artius")

      message.channel.send(embed);
      return;
    } else {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `1 - Rol: **${
            message.guild.roles.get(veri).name
          }** - ${veri12} Davet!\n2 - Rol: **${
            message.guild.roles.get(veri2).name
          }** - ${veri21} Davet!`
        )
        .setColor("BLACK")
    .setFooter("Berat 🖤 Artius")

      message.channel.send(embed);
      return;
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: "rütbe-liste",
  description: "rütbe-liste",
  usage: "rütbe-liste"
};
