const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="solotsuma@outlook.com"
global.location="Kenya,Nairobi."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Kenya/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Tsumahhh/suhail-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://wa.me/+254743399594";
global.website=process.env.GURL || "https://wa.me/+254743399594" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Tsuma_Md" 


global.devs = "254743399594" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743399594";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_30_04_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSmFFNXVkeDVhdW51QXFvaVRaandVNisydnN6SEg3VkdjbXNpOVN5cElJYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDI2NDk2ODQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QjYxMTg2NkVEODBGNjFDMkNFQTFFMDhFQjQ1NjJEMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDQ3OTIyMDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUGVQbnpjWEdSZ0N3U0YwUmlzcUo1Z1wiLFxuICBcInBob25lSWRcIjogXCIyMzM4NDY3OS05MjRjLTQ4MjgtYjUzOS01NTgwNGVjMzJlOWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAxNjgsXG4gICAgICAzMCxcbiAgICAgIDExLFxuICAgICAgMjIxLFxuICAgICAgNDAsXG4gICAgICA1NixcbiAgICAgIDEyMCxcbiAgICAgIDc4LFxuICAgICAgNjgsXG4gICAgICAyNTUsXG4gICAgICAyMSxcbiAgICAgIDI0MSxcbiAgICAgIDEzMCxcbiAgICAgIDE3MixcbiAgICAgIDE4MixcbiAgICAgIDE1OSxcbiAgICAgIDI0MSxcbiAgICAgIDYxLFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAyNTMsXG4gICAgICAyMjEsXG4gICAgICAxNTAsXG4gICAgICA4LFxuICAgICAgMTQ3LFxuICAgICAgNyxcbiAgICAgIDEzOSxcbiAgICAgIDE1NixcbiAgICAgIDY0LFxuICAgICAgNCxcbiAgICAgIDExMixcbiAgICAgIDE5MixcbiAgICAgIDEwNSxcbiAgICAgIDE4NSxcbiAgICAgIDIyOCxcbiAgICAgIDEwMCxcbiAgICAgIDE3LFxuICAgICAgMTIzLFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhIQUFQNkJRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI2NDk2ODQ0OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjE0NTAzNTk3MjczMzo0NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOQ0htZjhERUlmVi9iOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdBVXZDU0dsaE0xUHM2NGIzdThyRUMxazZmb0V1SlkrNFF6Y1hNdzI4d0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV2xCbjVJSzZGU2s2YUc5VERsOUg0eWZFalFzNndNYTJhMERaNzFSczAxRm1UZWxtcDdHVG4vUktvaCsycC9NelhlS3RMSUJ4VmsxZGZxeVBUZ2JSQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVkNOZEdydUF0YnQrNDZtNnVxbmk4NG4zRWxVWHQ3eWFjblN0OTNadnZNelFRcWh5M2ZBWDRDWTVUREp5NzU3R0NLODJXRitTeEo4WFZlMGFJWGE2aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNjQ5Njg0NDo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0NzkyMjAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFJVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIUlUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuWXc5N2dQbVkrRTZWTUxFMU1LWEUrUTl2cFF3aWN0dldiSG1aOFdXSGhFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzIwNTUyNDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDc5MjIwNzE5OVwifSIKfQ=="


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ TSUMA²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇TSUMA]彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "TSUMA_MD",
  ownername:process.env.OWNER_NAME|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇TSUMA]彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "TSUMA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
