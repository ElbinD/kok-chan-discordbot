require('dotenv').config();
const { Routes, REST} = require('discord.js')

const commands = [
    {
        name:"command",
        description:"voert een command uit"
    }
];

const rest = new REST ({ version:'10' }).setToken(process.env.TOKEN);

(async () => {
    try{
        console.log('slash command')
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands}
        )

        console.log('gelukt')

    } catch(error){
   console.log(`er is een error ${error}`)

    }   
})();