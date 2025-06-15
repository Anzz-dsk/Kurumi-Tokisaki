let handler  = async (m, { conn }) => {

let img = `https://qu.ax/hyNzi.jpg`

let txt = `𝑮𝒓𝒖𝒑𝒐𝒔 𝑵𝒐 𝑫𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆𝒔 𝒑𝒐𝒓 𝑨𝒉𝒐𝒓𝒂`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i

export default handler 
