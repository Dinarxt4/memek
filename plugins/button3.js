let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK\nSaya Bot Wea\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned+Gw Santet\nTelp = Blok+Gw Bacok\n\n\nJoin Group WhatsApp\n『https://bit.ly/3mrW9gJ』\n\nSubscribe Me\n『https://bit.ly/3boZIOn』",
                        "description": "*©create by DinarXT*",
                        "buttonText": "Click Here To List",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\nI Want To Use Download Menu",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\nI Want To Use Database Menu",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Katalog Menu",
                                        "description": "\nI Want To Use Katalog Menu",
                                        "rowId": ".katalogmenu"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nI Want To Use All Menu",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nI Want To Use Jadibot Menu",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nI Want To Use Owner Menu",
                                        "rowId": ".ownermenu"                 
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "\nI Want To Use Hentai Menu",
                                        "rowId": ".hentaimenu"                 
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\nI Want To Use Absen Menu",
                                        "rowId": ".absencok"                 
                                    }, {
                                        "title": " Group Setting",
                                        "description": "\nI Want To User Group Setting",
                                        "rowId": ".groupset"
                                    }, { 
                                        "title": " Virus Menu",
                                        "description": "\nI Want To User Virus Menu",
                                        "rowId": ".virusmenu"
                                    }, { 
                                        "title": " Sewa Menu",
                                        "description": "\nI Want To User Sewa Menu",
                                        "rowId": ".nyewa"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['selectmenuu']
handler.register = true
module.exports = handler
