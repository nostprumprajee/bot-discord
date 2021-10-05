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

client.on('interactionCreate', interaction => {
	console.log(interaction);
});

client.on('messageCreate', msg=>{
    let foods = ['กะเพราหมูสับ','หมูกระเทียม','ไข่เจียวหมูสับ','มาม่าผัด','ส้มตำ','พิซซ่า'];
   
    if (msg.content == 'กินไรดี'){
        msg.reply(foods[random_num()])
    }
    console.log(msg)
});

client.login(process.env.TOKEN)