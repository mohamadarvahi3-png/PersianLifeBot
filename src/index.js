require("dotenv").config();
require("../server");

const {
  Client,
  GatewayIntentBits,
  Events,
  ChannelType,
} = require("discord.js");
const commandHandler = require("./handlers/commandHandler");
const client = new Client({
commandHandler(client);
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (c) => {
  console.log(`${c.user.tag} آنلاین شد`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    return interaction.reply("🏓 Pong!");
  }

  if (interaction.commandName === "setup") {
    await interaction.reply({
      content: "⏳ در حال ساخت سرور...",
      ephemeral: true,
    });

    const guild = interaction.guild;

    // اطلاعیه
    const info = await guild.channels.create({
      name: "📢 اطلاعیه",
      type: ChannelType.GuildCategory,
    });

    await guild.channels.create({
      name: "📜-قوانین",
      type: ChannelType.GuildText,
      parent: info.id,
    });

    await guild.channels.create({
      name: "📢-اعلانات",
      type: ChannelType.GuildText,
      parent: info.id,
    });

    await guild.channels.create({
      name: "👋-خوش-آمدید",
      type: ChannelType.GuildText,
      parent: info.id,
    });

    // عمومی
    const general = await guild.channels.create({
      name: "💬 عمومی",
      type: ChannelType.GuildCategory,
    });

    await guild.channels.create({
      name: "💬-چت",
      type: ChannelType.GuildText,
      parent: general.id,
    });

    await guild.channels.create({
      name: "😂-میم",
      type: ChannelType.GuildText,
      parent: general.id,
    });

    await guild.channels.create({
      name: "📸-مدیا",
      type: ChannelType.GuildText,
      parent: general.id,
    });

    // پشتیبانی
    const support = await guild.channels.create({
      name: "🛠 پشتیبانی",
      type: ChannelType.GuildCategory,
    });

    await guild.channels.create({
      name: "🎫-تیکت",
      type: ChannelType.GuildText,
      parent: support.id,
    });

    await guild.channels.create({
      name: "❓-سوالات",
      type: ChannelType.GuildText,
      parent: support.id,
    });

    // مدیریت
    const staff = await guild.channels.create({
      name: "👑 مدیریت",
      type: ChannelType.GuildCategory,
    });

    await guild.channels.create({
      name: "📋-لاگ",
      type: ChannelType.GuildText,
      parent: staff.id,
    });

    await guild.channels.create({
      name: "⚙️-ادمین",
      type: ChannelType.GuildText,
      parent: staff.id,
    });

    // ویس
    const voice = await guild.channels.create({
      name: "🎤 ویس",
      type: ChannelType.GuildCategory,
    });

    await guild.channels.create({
      name: "🔊 General",
      type: ChannelType.GuildVoice,
      parent: voice.id,
    });

    await guild.channels.create({
      name: "🎮 Gaming",
      type: ChannelType.GuildVoice,
      parent: voice.id,
    });

    await guild.channels.create({
      name: "🎵 Music",
      type: ChannelType.GuildVoice,
      parent: voice.id,
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

client
  .login(process.env.TOKEN)
  .then(() => console.log("Login موفق"))
  .catch(console.error);