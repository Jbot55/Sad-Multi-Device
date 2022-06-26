let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : JunnBot
*✉️ Nama RL* : Junaedi Indra Saputra
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 04 Juni 2004
*🎨 Umur* : 18
*🧮 Kelas* : 14
*🧩 Hobby* : goco
*💬 Sifat* : biasayyaji
*🗺️ Tinggal* : Mars
*❤️ Suka* : -
*💔 Benci* : -

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @Junaediiindra
*🇫  Facebook* : Gapunya FB gw
*🏮 Chanel Youtube* : Junaedi Indra Saputra
*🐈 Github:* Jbot55

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
