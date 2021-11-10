let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK\nSaya Bot Wea\nPilih Virus Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned+Gw Santet\nTelp = Blok+Gw Bacok\n\n\nJoin Group WhatsApp\n『https://bit.ly/3mrW9gJ』\n\nSubscribe Me\n『https://bit.ly/3boZIOn』",
                        "description": "*©create by DinarXT*",
                        "buttonText": "Click Here To List",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Virtex1`,
                                        "description": "\nI Want To Use Virtex1",
                                        "rowId": ".virtex1"
                                    },{
                                        "title": "Virtex2",
                                        "description": "\nI Want To Use Virtex2",
                                        "rowId": ".virtex2"                
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['virusmenu']
handler.register = true
module.exports = handler