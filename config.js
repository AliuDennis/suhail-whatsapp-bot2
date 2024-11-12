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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_21_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDU1LFxuICAgICAgICA3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgOTksXG4gICAgICAgIDU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICA3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICA5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI4LFxuICAgICAgICA1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEwLFxuICAgICAgICA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWmdRcU5paUVvTlEvZm83NmkyTXdDazFCem9LRXFMeGpreU5FSkZXckd2az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibm4wcDZqYnBSOWF5ODhDUTZZcVp4Z1wiLFxuICBcInBob25lSWRcIjogXCJjZDI0YjA1Ni0wNGI1LTRjNDktODgxMy0xN2Y3YWIxZTk3NjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMjUsXG4gICAgICAxNSxcbiAgICAgIDIyNixcbiAgICAgIDI0MixcbiAgICAgIDU1LFxuICAgICAgMTQ3LFxuICAgICAgMjAyLFxuICAgICAgMjA0LFxuICAgICAgNTcsXG4gICAgICAxMDUsXG4gICAgICA1NyxcbiAgICAgIDkzLFxuICAgICAgMjUxLFxuICAgICAgMTM1LFxuICAgICAgNTMsXG4gICAgICAyMjAsXG4gICAgICAxNzMsXG4gICAgICAxMTMsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAyMzIsXG4gICAgICAxMzYsXG4gICAgICAxMzQsXG4gICAgICAyNixcbiAgICAgIDM0LFxuICAgICAgMTYwLFxuICAgICAgMjEsXG4gICAgICAxNTMsXG4gICAgICAxMTUsXG4gICAgICAyMDIsXG4gICAgICAyNCxcbiAgICAgIDExMyxcbiAgICAgIDM3LFxuICAgICAgNzcsXG4gICAgICAxNDUsXG4gICAgICAxOTcsXG4gICAgICA5MSxcbiAgICAgIDE2OSxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFUUEU0TTZFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDMzOTk1OTQ6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMDU0NDk5MTg0NjU4Mzo3NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKK0UrYkVDRUxuMHpMa0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjA4ZnFxTlFYQXRyWkw1c2dySkNERUlyZm9UcVVnQWVFbENXLzFBVnlRU0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQWNib3JaTkhuQWZ3VHhQRVlqaG82WlhLOHdzeTJ3UjlHdFNuYUNLV05uYTF4Tko4aWVzMnBUbStxOHBIQkxHUDN6dWhld00rdXZRdnE3ZlVIMlhCQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL2pOYVUrNmN0ZFRTYS9PV3lUNDAxaGNNMzhuZFFhenRudWhFYktTNjJ5QnpkeXZIaTNhZXg3ZVlTditwcXNHeVV5YnU2NHpMVVozdTFhY1FuckFNZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQzMzk5NTk0Ojc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTQxMDQ5M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="


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
