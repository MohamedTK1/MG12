module.exports.config = {
	name: "ترسيت",
	version: "1.0.2",
	hasPermssion: 2,
  credits: "S H A D O W",
	description: " ",
  commandCategory: "الـــمــطـــور",
	cooldowns: 5000,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    const eval = require("eval");
    const permission = ["100030029174216"];                  
    if (!permission.includes(event.senderID)) return api.sendMessage("ما عندك صلاحيه تستخدم الامر 🖤🥀", event.threadID, event.messageID);
    return api.sendMessage("ساعود اليكم قريبا>_<...", event.threadID, () => eval("module.exports = process.exit(1)", true), event.messageID);

   }
