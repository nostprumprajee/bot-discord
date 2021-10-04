const {Client, Intents} = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
);

const random_num = () =>{
    return Math.floor(Math.random()*10);
}

client.on('ready', ()=>{
    console.log('your bot is ready')
})

client.on('messageCreate', msg=>{
    if (msg.content == 'หิว'){
        msg.reply('สั่งข้าวดิ')
    }
    console.log(msg)
})

client.login(process.env.TOKEN)