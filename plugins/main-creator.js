let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;〆Anzz⍻Dskᜫ;;\nFN:〆Anzz⍻Dskᜫ\nORG:〆Anzz⍻Dskᜫ\nTITLE:\nitem1.TEL;waid=50238999796:50238999796\nitem1.X-ABLabel:〆Anzz⍻Dskᜫ⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:〆Anzz⍻Dskᜫ\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '〆Anzz⍻Dskᜫ', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
