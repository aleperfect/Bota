let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `
_Ventas tumbado_
_Venta de bots, plataformas de streaming, cuentas ff, teams, clanes, diamantes._ ${pesan}`
let teks = `*BOT TUMBADO*
 ${oi}\n\n https://chat.whatsapp.com/BoaKj0UJXEI7xkR2F9E6Bl\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n`}
teks += `ㅤㅤㅤㅤ𝑻𝒖𝒎𝒃𝒂𝒅𝒐𝑽𝒆𝒏𝒕𝒂𝒔 🥷🏼`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler