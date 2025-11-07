require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
        

        
    ]
})

client.on('ready', (c) => {
    console.log(`${c.user.tag}`)
})

client.login(process.env.TOKEN)

client.on('messageCreate', (message) => {
    if(message.author.bot){
        return;
    }
    if(message.content === "hallo"){
        message.reply("Stem kok chan")
    }
})