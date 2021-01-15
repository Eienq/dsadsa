const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ".";
  const embed = new Discord.RichEmbed()
    .setDescription(`Prefix: **${prefix}**`)
    .addField(
      `Davetler`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`, \`davetlerim\`, \`davet-oluştur\``
    )
    .addField(`Rütbeler`, `\`rütbe-ekle\`, \`rütbe-sil\`, \`rütbe-liste\``)

    .setColor("BLACK")
.setFooter("Berat 🖤 Artius") 
message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};

exports.help = {
  name: "iyardım"
};
//DevTR Kodlayan The Journey