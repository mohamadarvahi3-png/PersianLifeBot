console.log("Bot is starting...");
require("./server");
require("./deploy-commands");
require("dotenv").config();
console.log("TOKEN:", process.env.TOKEN ? "OK" : "Missing");
console.log("CLIENT_ID:", process.env.CLIENT_ID);
console.log("GUILD_ID:", process.env.GUILD_ID);
const {
  Client,
  GatewayIntentBits,
  ActivityType
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", () => {
  console.log(`${client.user.tag} is online!`);

  client.user.setPresence({
    activities: [
      {
        name: "Persian Life",
        type: ActivityType.Playing
      }
    ],
    status: "online"
  });
});

console.log("TOKEN:", process.env.TOKEN);
console.log("Length:", process.env.TOKEN?.length);

client.login(process.env.TOKEN);
console.log(JSON.stringify(process.env.TOKEN));