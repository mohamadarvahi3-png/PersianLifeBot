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
});client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ping") {
        return interaction.reply("🏓 Pong!");
    }

    if (interaction.commandName === "setup") {

        await interaction.reply({
            content: "⏳ در حال ساخت سرور...",
            ephemeral: true
        });

        const guild = interaction.guild;

        // اطلاعیه
        const info = await guild.channels.create({
            name: "📢 اطلاعیه",
            type: 4
        });

        await guild.channels.create({
            name: "📜-قوانین",
            type: 0,
            parent: info.id
        });

        await guild.channels.create({
            name: "📢-اعلانات",
            type: 0,
            parent: info.id
        });

        await guild.channels.create({
            name: "👋-خوش-آمدید",
            type: 0,
            parent: info.id
        });

        // عمومی
        const general = await guild.channels.create({
            name: "💬 عمومی",
            type: 4
        });

        await guild.channels.create({
            name: "💬-چت",
            type: 0,
            parent: general.id
        });

        await guild.channels.create({
            name: "😂-میم",
            type: 0,
            parent: general.id
        });

        await guild.channels.create({
            name: "📸-مدیا",
            type: 0,
            parent: general.id
        });

        // پشتیبانی
        const support = await guild.channels.create({
            name: "🛠 پشتیبانی",
            type: 4
        });

        await guild.channels.create({
            name: "🎫-تیکت",
            type: 0,
            parent: support.id
        });

        await guild.channels.create({
            name: "❓-سوالات",
            type: 0,
            parent: support.id
        });

        // مدیریت
        const staff = await guild.channels.create({
            name: "👑 مدیریت",
            type: 4
        });

        await guild.channels.create({
            name: "📋-لاگ",
            type: 0,
            parent: staff.id
        });

        await guild.channels.create({
            name: "⚙️-ادمین",
            type: 0,
            parent: staff.id
        });

        // ویس
        const voice = await guild.channels.create({
            name: "🎤 ویس",
            type: 4
        });

        await guild.channels.create({
            name: "🔊 General",
            type: 2,
            parent: voice.id
        });

        await guild.channels.create({
            name: "🎮 Gaming",
            type: 2,
            parent: voice.id
        });

        await guild.channels.create({
            name: "🎵 Music",
            type: 2,
            parent: voice.id
        });

        // رول‌ها
        await guild.roles.create({ name: "👑 Owner", color: "Red" });
        await guild.roles.create({ name: "🛡 Admin", color: "Blue" });
        await guild.roles.create({ name: "⚔ Moderator", color: "Green" });
        await guild.roles.create({ name: "⭐ VIP", color: "Yellow" });
        await guild.roles.create({ name: "👤 Member", color: "Grey" });

        await interaction.followUp("✅ سرور با موفقیت آماده شد.");
    }
});