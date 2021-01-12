require("express")().listen(1343);//yakupsonoyuncu
//yakupsonoyuncu
const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });//yakupsonoyuncu
client.login("NzkzOTE5ODczNjM3NTQ4MDQy.X-zRgA.aVNdVU-DLFr-iGRMTH_5fCyZqEE");
const fetch = require("node-fetch");//yakupsonoyuncu
const fs = require('fs')
//yakupsonoyuncu

//Uptime 
const oynuyor = "!ekle | Kral Uptime";//yakupsonoyuncu
const express = require('express');//yakupsonoyuncu
const app = express();
const http = require('http');//yakupsonoyuncu
    app.get("/", (request, response) => {
    console.log(`Uptimelanan botlardan birinde hata var! Uptimelayamıyorum!`);//yakupsonoyuncu
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

//Oynuyor

//yakupsonoyuncu
client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  console.log("Bot Aktif");

  client.user.setStatus("oynuyor");
  client.user.setActivity(oynuyor, {
    type: "PLAYİNG",
    url: "https://intagram.com/yakup_sonoyuncu"//yakupsonoyuncu
  });//yakupsonoyuncu
});

//yakupsonoyuncu
client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}
})
//yakupsonoyuncu
client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");//yakupsonoyuncu
  if(spl[0] == "!ekle") {
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("Botunuz Sistemimizde Zaten Var")//yakupsonoyuncu
    message.channel.send("Botunuz Sistemimize Başarıyla Eklendi.");//yakupsonoyuncu
    db.push("linkler", { url: link, owner: message.author.id})//yakupsonoyuncu
  }).catch(e => {
    return message.channel.send("Lütfen Bir Link Giriniz ")//yakupsonoyuncu
  })
  }
})

//yakupsonoyuncu
client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");//yakupsonoyuncu
  if(spl[0] == "!say") {
  var link = spl[1]
 message.channel.send(`${db.get("linkler").length} Bot Aktif Tutuluyor!`)//yakupsonoyuncu
}})
//yakupsonoyuncu
client.on("message", async message => {

  if(!message.content.startsWith("!eval")) return;//yakupsonoyuncu
  if(!["IDNIZ","YARDIMCINIZIN ID SI  YARDIMCINIZ FALAN YOKSA VİRGÜLLERİ TIRNAKLARI SİLİN"].includes(message.author.id)) return;//yakupsonoyuncu
  var args = message.content.split("!eval")[1]
  if(!args) return message.channel.send(":warning: | Kod?")//yakupsonoyuncu
  
      const code = args
//yakupsonoyuncu
    
      function clean(text) {
          if (typeof text !== 'string')//yakupsonoyuncu
              text = require('util').inspect(text, { depth: 3 })
          text = text
              .replace(/`/g, '`' + String.fromCharCode(8203))
              .replace(/@/g, '@' + String.fromCharCode(8203))
          return text;
      };
  
      var evalEmbed = ""
      try {
          var evaled = await clean(await eval(await code));//yakupsonoyuncu
          if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
          else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
          
  if(evaled.length < 1900) { 
     message.channel.send(`\`\`\`js\n${evaled}\`\`\``);//yakupsonoyuncu
  } else {
    var hast = await require("hastebin-gen")(evaled, { url: "https://hasteb.in" } )//yakupsonoyuncu
  message.channel.send(hast)
  }
      } catch (err) {
          message.channel.send(`\`\`\`js\n${err}\n\`\`\``);//yakupsonoyuncu
      }
  })
  //yakupsonoyuncu