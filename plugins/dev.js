const { macoder, commands } = require('../macoder');

macoder({
    pattern: "owner",
    alias: ["developer", "dev"],
    desc: "Displays the developer info",
    category: "owner",
    react: "👨‍💻",
    filename: __filename
}, async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const name = pushname || "there";

        const text = `
╭─⌈ *𝗣𝗥𝗜𝗡𝗖𝗘𝗦𝗦-𝗩4 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥* ⌋──
│
│ 👋 Hello *${name}*,
│
│ 🤖 I’m *𝗣𝗥𝗜𝗡𝗖𝗘𝗦𝗦-𝗩4*, a multi-functional
│     Java dlSCriptWhatsApp Bot built to assist you!
│
│ 👨‍💻 *OWNER DETAILS:*
│ ───────────────
│ 🧠 *Name* : Macoder
│ 🕯️ *Age* : 16
│ ☎️ *Contact* : wa.me/27656136438
│ ▶️ *YouTube* : Macoder_Tech (OntiretseManyaka)
│    https://youtube.com/@Ontiretse
│
│ ⚡ Powered by *Macoder*
│
╰───────────────
        `.trim();

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/73mlk5.jpg' },
                caption: text,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398430045533@newsletter',
                        newsletterName: '🪀『 PRINCESS-V4 』🪀',
                        serverMessageId: 143
                    },
                    externalAdReply: {
                        title: "PRINCESS-V4 Bot",
                        body: "Created with love by Malvin King",
                        thumbnailUrl: 'https://files.catbox.moe/73mlk5.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        mediaUrl: "https://youtube.com/@OntiretseManyaka",
                        sourceUrl: "https://youtube.com/@OnutiretsManyaka"
                    }
                }
            },
            { quoted: mek }
        );
    } catch (e) {
        console.error("Error in .dev command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
