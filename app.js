let cheerio = require("cheerio");
let request = require("request");
let Agent = require('socks5-https-client/lib/Agent');
let fs = require("fs");
// request({
//   uri: "https://www.youtube.com/channel/UCD-miitqNY3nyukJ4Fnf4_A",
// }, function(error, response, body) {
//     console.log(error,response)
//   console.log(body);
// });
// mtmt:https://www.youtube.com/channel/UCD-miitqNY3nyukJ4Fnf4_A
request({
	url: 'https://www.youtube.com/channel/UCD-miitqNY3nyukJ4Fnf4_A',
	strictSSL: true,
	agentClass: Agent,
	agentOptions: {
		socksHost: 'localhost', // Defaults to 'localhost'.
		socksPort: 1080, // Defaults to 1080.

		// Optional credentials

	}
}, function(err, res) {
	let $ = cheerio.load(res.body);
	let link = $('div .yt-uix-slider-body').find('a')

	if ( link.hasOwnProperty('0') && link['0'].hasOwnProperty('attribs') ) {
		console.log("https://www.youtube.com",link['0'].attribs.href)
	} else {
		console.log("未开播")
	}
	
	// DIV_content_children0.each((index,e)=>{
	// 	console.log(index)
	// })
    // $('a[class=yt-lockup-content]').each(()=>{
    //     let link = $(this)
    //     console.log(link)
    // })

    // console.log(res.body)
    // fs.writeFileSync('mt.html',res.body)

});