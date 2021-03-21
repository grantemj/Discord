// Resource site: https://www.smashingmagazine.com/2021/02/building-discord-bot-discordjs/

const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready');
});

client.login(process.env.BOT_TOKEN)