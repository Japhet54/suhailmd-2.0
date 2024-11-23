const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349155748325;




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_50_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM5LFxuICAgICAgICA2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICA4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDY2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA2NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICA3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIloxVDllanJ6alhnVkRiNXJPNEdES1IzOHV2M0ZoSTFvQTZkUUpPRktmSzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE1NTc0ODMyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjRENDhBMkU2N0I5RjYyM0M5QkZFQjA3RDkwNTczNTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMzg3ODQyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkU5N0lXcnNwVDd1TnhmeWRuZTlkcEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2VhN2U0NWEtNDk5NS00NmYzLWIwNWUtNWQ4OWZjMmUzYjU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDIzNyxcbiAgICAgIDE1MCxcbiAgICAgIDEwMyxcbiAgICAgIDE5OSxcbiAgICAgIDcxLFxuICAgICAgMTEsXG4gICAgICAyMjIsXG4gICAgICAyMDAsXG4gICAgICAxMDQsXG4gICAgICAyMTUsXG4gICAgICAxNzYsXG4gICAgICAxMyxcbiAgICAgIDE5MSxcbiAgICAgIDgsXG4gICAgICAyOSxcbiAgICAgIDI0OCxcbiAgICAgIDUwLFxuICAgICAgMTM3LFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDE1NCxcbiAgICAgIDE4OSxcbiAgICAgIDExOCxcbiAgICAgIDE2NSxcbiAgICAgIDE1MSxcbiAgICAgIDIzOCxcbiAgICAgIDk4LFxuICAgICAgMjEzLFxuICAgICAgNTYsXG4gICAgICAyMzYsXG4gICAgICAyMDksXG4gICAgICA4MyxcbiAgICAgIDE4NixcbiAgICAgIDg0LFxuICAgICAgMjMxLFxuICAgICAgODAsXG4gICAgICAyNTIsXG4gICAgICAxODksXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEY2M0tTWlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTU3NDgzMjU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODM3NjQ5NjUzMTQ1OTc6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKU2lpckVFRVBmSGlMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpLUU1pTTZObXI5Z1plaVFkZVYvOHZmZ2Y5Z3g1SjAxUjc5NlBwdVpVMlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWG9lcGRIbWIyQkNqRDh3dHJmMTgzT2x4SmNoR3dMVkdoVSt3dHZrR3EwaG5QZzZmY2tNdktIdW9rN1REM0FITXV6MGpPeExxeUo3cEZkK3AxZEVOQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNkw5QUp4NGRROS9LY3U4Ymc2cEM2RWVENVJPTlM2dTVnbXRKSi9JWkIvZ1BJTC9FOXgrRTA2aEE4NjAwb0xSSzlUekYxanZzNzdqcStxRGRSeVpwaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1NTc0ODMyNTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM4NzgzNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
