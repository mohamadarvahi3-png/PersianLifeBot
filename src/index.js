require("dotenv").config();
require("./server");

console.log("شروع برنامه");

const {
  Client,
  GatewayIntentBits,
  Events
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, c => {
  console.log(`${c.user.tag} آنلاین شد`);
});

client.login(process.env.TOKEN)
  .then(() => console.log("Login موفق"))
  .catch(err => console.error("Login Error:", err));client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong!");
  }
});