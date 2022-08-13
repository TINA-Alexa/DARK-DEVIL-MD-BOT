//════════════(00)═══════════════════════════════════════//
//
//                      ➳ᴹᴿ᭄ᴰᴬᴿᴷ ᴰᴱᵛᴵᴸ❦🇱🇰
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════(00)════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `─ ⋞ 〈🛑 *🄷🄴🅈 🅃🄷🄴🅁🄴* 🛑〉 ⋟ ─

⫺ ╤╤╧╧╤╤ ⋞ 〈 ⫹⫺ 〉 ⋟ ╤╤╧╧╤╤ ⫹
┋   ‍  ‍ 🔴 *𝐁𝐨𝐭 𝐎𝐧𝐥𝐢𝐧𝐞 𝐍𝐎𝐖* ‼️
⫺ ╧╧╧╧╧╧ ⋞ 〈 ⫹⫺ 〉 ⋟ ╧╧╧╧╧╧ ⫹
┋
┋ ‍ ❯❯ *🅱️🅾️🆃 🅸🅽🅵🅾️* ❮❮
┋
┋⛥❮𝚁𝚞𝚗𝚝𝚒𝚖𝚎❯ 10 𝘏𝘰𝘶𝘳𝘴,49 𝘔𝘪𝘯𝘶𝘵𝘦𝘴
┋⛥❮𝚃𝚘𝚝𝚊𝚕 𝚄𝚜𝚎𝚛❯ 999
┋⛥❮𝙾𝚠𝚗𝚎𝚛   𝙽𝚊𝚖𝚎❯ 𝚆𝚊_𝚋𝚘𝚝 24/7
┋
⫺ ╧╧╧╧╧╧ ⋞ 〈 ⫹⫺ 〉 ⋟ ╧╧╧╧╧╧ ⫹` //Costomize Alive Message (type your message in `` )

global.owner = ['+94758663348'] //Owner number in aive msg
global.premium = ['+94758663348'] //Owner Number info
global.ownernomer = '+94758663348' //Owner Number <<<

global.ownername = '💆‍♂️𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙_𝚋𝚘𝚝 #24/7💆‍♂️' //Owner Name
global.botname = '𝘔𝘪𝘴𝘴 𝘘𝘦𝘦𝘯 𝘞𝘈 𝘣𝘰𝘵' //Bot Name

global.button = '🖥️𝙱𝙰𝚁𝙰𝚉𝙰 𝚃𝚅 𝙻𝙸𝚅𝙴〽️' //Costomize A Button Name In Alive Message
global.btnurl = 'https://eco.streams.ovh/BarazaTV/BarazarazaTV/BarazaTV/chunklist_w1227645751.m3u8' //Change Your Button's URL

global.region = 'srilanka' //Country Region

global.packname = '𝘔𝘪𝘴𝘴 𝘘𝘦𝘦𝘯 𝘞𝘈 𝘣𝘰𝘵' //Bot Pacage Name
global.author = '#24/7💆‍' //Author Name
global.prefa = ['','❗','.','😂','👹','🎊'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor In Menu!


global.ig = '____________' //Github Account!
global.footer = '💆‍𝘔𝘪𝘴𝘴 𝘘𝘦𝘦𝘯 𝘞𝘈 𝘣𝘰𝘵' // DO NOT CHANGE!

global.mess = { // Error Mesages
    success: '*සාර්ථකව අවසන් විය!* ✓',
    admin: '*මෙය ඇඩ්මින් වරු සදහා පමණක් වේ!!*',
    botAdmin: '*පළමුව මාහට ඇඩ්මින් තනතුර ලබා දෙන්න!!*',
    owner: '*බෝට්ගේ හිමිකරු සදහා පමණක් වේ!!*',
    group: '*කණ්ඩායමක බාවිතය සදහා පමණි!!*',
    private: '*පුද්ගලික සංවාදවල බාවිතය සදහා පමණි!!*',
    bot: '*මෙම විශේෂාංගය බෝට් සඳහා පමණි!!*',
    wait: '*මදක් රැදී සිටින්න...ඔබගේ ඉල්ලීම සැකසෙමින් පවතී!!*',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
