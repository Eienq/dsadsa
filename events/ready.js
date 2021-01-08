const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async client => {
  var oyun = ["Hayunn ♥ Ponçik"];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], { type: "WATCHING" });
  }, 12000);
  client.user.setStatus("online");
};
