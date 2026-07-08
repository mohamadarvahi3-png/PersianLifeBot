require("dotenv").config();

const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("Bot is online!");

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

client.login(process.env.TOKEN);