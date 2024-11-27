//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348025294017";
global.owner = process.env.OWNER_NUMBER || "2348082971857";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURoSHdiSVBoRi8wazU5YzVyeXhJdDl2K2NiTlJ3RE1wYy9JSlJoaE5Hcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGl6VnJjTStNSFRsNGJHem1PRXlBdWhFeXZHYXIydEErMlcrNlBlTzBVVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVS3ZuZk80VnUzbm1GY2ZPazVTa0dzNGZqRFpMems2WjU5aTVYZngvdzJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuTUJlb1BRaVFDMXpWUC9XMnRMaFg4aHJYemJmaHpPZjdHS1VNV04rTVhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFGdUpCTjlESzErc1FtWFVWMzBsK3NLbTF0TWZDQW1aYTBHdmZ3b3g5MUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJtQ2NqWTBrQSswajhoNUtqLzJGSDNGNHNJK2ZBbWFIWG9VMy8rdFhRUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5PTXp2K2RVNjlnTXpOdDlSQXp1ZnhGNWJPdXNueVdBWXRyYXI0NW9FQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhxR1NhaTh1MGZRZmJpUjBmS2VFMFJ5V1hZdytSc3d5Rzg5bXgrMzV3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBLQ1ZsNnhUdjRVN2VNeCtwc2dFSWo3NndxVkZJd0gwMDM1d1M2ZFRzMEprR0ZJQThOSi81d2taTWc4bHBKcXJYajcrU1dvNVpMRk1DYWhzZXRhc2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiIzR3VQNTBGdlpDWVpIalo4WG5RL203UCtFUzMxUFNhYVlBYzRLZzFTZmNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCaUVPR2ZOZ1ROR1h6ZWdIQ3hTOXRnIiwicGhvbmVJZCI6IjM0N2FiYjUxLWFmZTYtNDZiNC1iZTk1LTRmYjY0OWUxNjgzNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXaG8xRXdJOU9ydit1elp2QytPMVRiV2xtR0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNW9zQXFJejNvdndaQWxPVlJRb3NEczRLVjZVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNMSEg1OVJXIiwibWUiOnsiaWQiOiIyMzQ4MDgyOTcxODU3OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiZ2FuaXlhdG93b25pa29rbzMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p5andhb0hFTXJabmJvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVuVFNqSHVGZ3BHY2ZNTUs4OHZDdk5GVUs0QlRyVEJOdjdnMWVjRzM3U2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImRaZVdwZDFLbFdIbVhkTnpxY1p0ZTl4RUJubVJqOEZRUkxFY0VQV1F6SG5IY2dySENxdnRBK2NFcHV2WUVOeDhUQ1VRWlZrYmVYM05SNjIrSTV4RkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1NHd2emtKMnVCS09RYjZiYmlVZ3cwWlRhTmY0YmphUTFWWmJneENVMEhkcERzVS9sVkxUbjhzVlRwQWYrVzVCTEk4Ulk3RnZLemR3WVVrVkZPUWVoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwODI5NzE4NTc6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYcDAwb3g3aFlLUm5IekRDdlBMd3J6UlZDdUFVNjB3VGIrNE5YbkJ0KzBwIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyNzM0MTY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5tOCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "Sülü Møñëy",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
