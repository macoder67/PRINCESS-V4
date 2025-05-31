const axios = require('axios');
const config = require('../settings');
const { macoder, commands } = require('../macoder');
const util = require("util");
const { getAnti, setAnti, initializeAntiDeleteSettings } = require('../data/antidel');

initializeAntiDeleteSettings();

malvin({
    pattern: "antidelete",
    alias: ['antidel', 'ad'],
    desc: "Configure AntiDelete settings",
    category: "misc",
    filename: __filename
},
async (conn, mek, m, { reply, q, isCreator }) => {
    if (!isCreator) return reply('⚠️ This command is only for the *bot owner*!');

    const option = q?.trim();

    try {
        switch (option) {
            case '1':
                await setAnti('gc', true);
                await setAnti('dm', true);
                return reply('✅ _AntiDelete is now enabled globally for Group Chats and Direct Messages._');

            case '2':
                await setAnti('gc', false);
                await setAnti('dm', true);
                return reply('✅ _AntiDelete is enabled for Direct Messages only._');

            case '3':
                await setAnti('gc', true);
                await setAnti('dm', false);
                return reply('✅ _AntiDelete is enabled for Group Chats only._');

            case '4':
                await setAnti('gc', false);
                await setAnti('dm', false);
                return reply('❌ _AntiDelete is now completely disabled._');

            default:
                return reply(
                    `🛡️ *AntiDelete Setup*\n\n` +
                    `Usage: eg .ad 1\n\n` +
                    `*1.* To Enable For All\n` +
                    `*2.* To Enable for Chats Only\n` +
                    `*3.* To Enable for Chats & Groups\n` +
                    `*4.* To Disable Antidelete`
                );
        }
    } catch (err) {
        console.error('AntiDelete Error:', err);
        return reply('❌ An unexpected error occurred. Please try again later.');
    }
});


malvin({
    pattern: "vv3",
    alias: ['retrive', '🔥'],
    desc: "Fetch and resend a ViewOnce message content (image/video).",
    category: "misc",
    use: '<query>',
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const quotedMessage = m.msg.contextInfo.quotedMessage; // Get quoted message

        if (quotedMessage && quotedMessage.viewOnceMessageV2) {
            const quot = quotedMessage.viewOnceMessageV2;
            if (quot.message.imageMessage) {
                let cap = quot.message.imageMessage.caption;
                let anu = await conn.downloadAndSaveMediaMessage(quot.message.imageMessage);
                return conn.sendMessage(from, { image: { url: anu }, caption: cap }, { quoted: mek });
            }
            if (quot.message.videoMessage) {
                let cap = quot.message.videoMessage.caption;
                let anu = await conn.downloadAndSaveMediaMessage(quot.message.videoMessage);
                return conn.sendMessage(from, { video: { url: anu }, caption: cap }, { quoted: mek });
            }
            if (quot.message.audioMessage) {
                let anu = await conn.downloadAndSaveMediaMessage(quot.message.audioMessage);
                return conn.sendMessage(from, { audio: { url: anu } }, { quoted: mek });
            }
        }

        // If there is no quoted message or it's not a ViewOnce message
        if (!m.quoted) return reply("Please reply to a ViewOnce message.");
        if (m.quoted.mtype === "viewOnceMessage") {
            if (m.quoted.message.imageMessage) {
                let cap = m.quoted.message.imageMessage.caption;
                let anu = await conn.downloadAndSaveMediaMessage(m.quoted.message.imageMessage);
                return conn.sendMessage(from, { image: { url: anu }, caption: cap }, { quoted: mek });
            }
            else if (m.quoted.message.videoMessage) {
                let cap = m.quoted.message.videoMessage.caption;
                let anu = await conn.downloadAndSaveMediaMessage(m.quoted.message.videoMessage);
                return conn.sendMessage(from, { video: { url: anu }, caption: cap }, { quoted: mek });
            }
        } else if (m.quoted.message.audioMessage) {
            let anu = await conn.downloadAndSaveMediaMessage(m.quoted.message.audioMessage);
            return conn.sendMessage(from, { audio: { url: anu } }, { quoted: mek });
        } else {
            return reply("This is not a ViewOnce message.");
        }
    } catch (e) {
        console.log("Error:", e);
        reply("An error occurred while fetching the ViewOnce message.");
    }
});

// if you want use the codes give me credit on your channel and repo in this file and my all files 
