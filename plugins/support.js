/*
Project Name :  PRINCESS-V4
Creator      :  MACODER ( MACODER_TECH )
Repo         : https://github.com/macoder67/PRINCESS-V4
Support      : wa.me/27656136438
*/

const config = require('../settings');
const { macoder, commands } = require('../macoder');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

macoder({
    pattern: "support",
    alias: "follow",
    desc: "base",
    category: "support",
    react: "📡",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        // Get the current time for dynamic greeting
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        let dec = `
╭────────────≫
┋ 🌟 *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : *ᴍᴀᴄᴏᴅᴇʀ (🇿🇦)* 🌍
┋ 🚀 *ᴍᴏᴅᴇ* : *${config.MODE}*
┋ ⚡ *ᴘʀᴇғɪx* : *${config.PREFIX}*
┋ 🧩 *ᴠᴇʀsɪᴏɴ* : ${config.version}
┋ ⏳ *ᴜᴘᴛɪᴍᴇ* : _${runtime(process.uptime())}_
┋ 🕰️ *ᴄᴜʀʀᴇɴᴛ ᴛɪᴍᴇ* : _${currentTime}_
╰────────────≫

   💬 *ᴍᴀᴄᴏᴅᴇʀ_ᴛᴇᴄʜ sᴜᴘᴘᴏʀᴛ ʟɪɴᴋs* ↷

${readMore}
\`🔔 ᴄʜᴀɴɴᴇʟ🩵\`
🔗 https://whatsapp.com/channel/0029Vb5kA7k4IBhNW3Hhxy0s
\`👥 ɢʀᴏᴜᴘ💙\`
🔗 https://chat.whatsapp.com/I4tFmdmLSgLB0ZUwsJ0VGc

\`🎥 ʏᴛ ᴄʜᴀɴɴᴇʟ🚀\`
🔗 https://youtube.com/@OntiretseManyaka

\`💻 ᴍᴀᴄᴏᴅᴇʀ\` *Developer🧑‍💻*
🔗 wa.me/27656136438?text=Support!

> 🚀 *ᴊᴏɪɴ ᴍᴀᴄᴏᴅᴇʀ ᴛᴇᴄʜ ᴡᴀᴄʜᴀɴɴᴇʟ* 🚀
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/73mlk5.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398430045533@newsletter',
                        newsletterName: '🪀『 𝐏𝐑𝐈𝐍𝐂𝐄𝐒𝐒-𝐕4 』🪀',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio message with a fun personalized touch
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/XdKing2/MALVIN-DATA/raw/refs/heads/main/autovoice/menu2.mp3' },
            mimetype: 'audio/mp3',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`*⚠️ Oops! Something went wrong:* ${e.message}`);
    }
});

//  MACODER_TECH
