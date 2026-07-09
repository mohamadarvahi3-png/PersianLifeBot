module.exports = {
  name: "help",
  description: "نمایش دستورات ربات",

  async execute(interaction) {
    await interaction.reply({
      embeds: [
        {
          color: 0xFFD700,
          title: "🦁 Persian Life Bot",
          description:
`**دستورات موجود**

🏓 /ping
📜 /help
👤 /user
🖥️ /server
🎫 /ticket
🛡️ /ban
👢 /kick
🧹 /clear
🔒 /lock
🔓 /unlock
📢 /announce
⚙️ /setup`
        }
      ]
    });
  }
};