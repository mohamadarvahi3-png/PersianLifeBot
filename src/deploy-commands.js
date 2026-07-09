require("dotenv").config();

const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Check bot response"
  }
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Commands registered!");
  } catch (error) {
    console.error(error);
  }
})();{
    name: "setup",
    description: "ساخت خودکار کانال‌ها و رول‌های سرور"
}