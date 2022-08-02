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

global.alivemsg = '─ ⋞ 〈🛑 *🄷🄴🅈 🅃🄷🄴🅁🄴* 🛑〉 ⋟ ─

⫺ ╤╤╧╧╤╤ ⋞ 〈 ⫹⫺ 〉 ⋟ ╤╤╧╧╤╤ ⫹
┋   ‍  ‍ 🔴 *𝐁𝐨𝐭 𝐎𝐧𝐥𝐢𝐧𝐞 𝐍𝐎𝐖* ‼️
⫺ ╧╧╧╧╧╧ ⋞ 〈 ⫹⫺ 〉 ⋟ ╧╧╧╧╧╧ ⫹
┋
┋ ‍ ❯❯ *🅱️🅾️🆃 🅸🅽🅵🅾️* ❮❮
┋
┋⛥❮ *𝚂𝚙𝚎𝚎𝚍*❯ *0.0111 𝘔𝘪𝘭𝘪𝘴𝘦𝘤𝘰𝘯𝘥𝘴*
┋⛥❮ *𝚁𝚞𝚗𝚝𝚒𝚖𝚎*❯ *10 𝘏𝘰𝘶𝘳𝘴,49 𝘔𝘪𝘯𝘶𝘵𝘦𝘴*
┋⛥❮ *𝙱𝚘𝚝 𝙽𝚊𝚖𝚎*❯ *𝘔𝘪𝘴𝘴 𝘘𝘦𝘦𝘯 𝘞𝘈 𝘣𝘰𝘵*
┋⛥❮ *𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖*❯ *𝘓𝘪𝘯𝘶𝘹*
┋⛥❮ *𝚃𝚘𝚝𝚊𝚕 𝚄𝚜𝚎𝚛*❯ *999*
┋⛥❮ *𝙾𝚠𝚗𝚎𝚛   𝙽𝚊𝚖𝚎*❯ *𝚆𝚊_𝚋𝚘𝚝 24/7*
┋⛥❮ *𝙾𝚠𝚗𝚎𝚛 𝙽𝚞𝚖𝚋𝚎𝚛*❯ +94758663348
┋
⫺ ╧╧╧╧╧╧ ⋞ 〈 ⫹⫺ 〉 ⋟ ╧╧╧╧╧╧ ⫹` //Costomize Alive Message (type your message in `` )

global.owner = ['+94758663348'] //Owner number in aive msg
global.premium = ['+94758663348'] //Owner Number info
global.ownernomer = '+94758663348' //Owner Number <<<

global.ownername = '💆‍♂️𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙_𝚋𝚘𝚝 #24/7💆‍♂️' //Owner Name
global.botname = '*𝘔𝘪𝘴𝘴 𝘘𝘦𝘦𝘯 𝘞𝘈 𝘣𝘰𝘵*' //Bot Name

global.button = '🖥️GITHUB〽️' //Costomize A Button Name In Alive Message
global.btnurl = '' //Change Your Button's URL

global.region = 'srilanka' //Country Region

global.packname = '*𝚆𝚊_𝚋𝚘𝚝 24/7*' //Bot Pacage Name
global.author = '💆‍♂️𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙_𝚋𝚘𝚝 #24/7💆‍♂️♂' //Author Name
global.prefa = ['','❗','.','😂','👹','🎊'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor In Menu!


global.ig = '' //Github Account!
global.footer = '© 𝘔𝘪𝘴𝘴 𝘘𝘦𝘦𝘯 𝘞𝘈 𝘣𝘰𝘵' // DO NOT CHANGE!

global.mess = { // Error Mesages
    success: 'Done ✅',
    admin: 'Only Admins can use it!කමක් නෑනෙ😉...',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!කමක් නෑනෙ😉...',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: 'ටිකක් ඉන්න👉👈...',
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
