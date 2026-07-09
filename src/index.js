require("dotenv").config();
require("./server");
const {Client,GatewayIntentBits,ActivityType,Events}=require("discord.js");
const client=new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMembers]});
client.once(Events.ClientReady,c=>{console.log(`${c.user.tag} is online!`);c.user.setPresence({activities:[{name:"Persian Life",type:ActivityType.Playing}],status:"online"});});
client.login(process.env.TOKEN).catch(console.error);
