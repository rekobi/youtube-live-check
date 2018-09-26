let cheerio = require("cheerio");
let request = require("request");
let Agent = require('socks5-https-client/lib/Agent');
let setting = require('./settings')
// let fs = require("fs");


	request({
		url: setting.channel.tsukinoMito,
		strictSSL: true,
		// agentClass: Agent,
		timeout: 30000,
		// agentOptions: {
		// 	socksHost: 'localhost', 
		// 	socksPort: 1080,
		// }
	}, function(err, res) {
		let $ = cheerio.load(res.body);
		let link = $('div .yt-uix-slider-body').find('a')
	
		if ( link.hasOwnProperty('0') && link['0'].hasOwnProperty('attribs') ) {
			console.log("https://www.youtube.com"+link['0'].attribs.href)
		} else {
			console.log("no")
		}
		
	});


