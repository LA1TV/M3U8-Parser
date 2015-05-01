var m3u8 = require('m3u8');
var http = require('http');
var https = require('https');

if (process.argv.length < 3) {
	console.error("You need to specify the url to the playlist file as a parameter.");
	process.exit(1);
}
var url = process.argv[2];
var httpsUrl = url.toLowerCase().indexOf("https://") === 0;
// if it is a https url, then the https library must be used, not the http library
var requestLibrary = httpsUrl ? https : http;

requestLibrary.get(url, function(res) {
	if (res.statusCode !== 200) {
		console.error("Got http response status code "+res.statusCode+".");
		process.exit(1);
	}
	res.pipe(parser);
});

var parser = m3u8.createStream();

parser.on('m3u', function(m3u) {
	// output json on stdout
	process.stdout.write(JSON.stringify(m3u));
	process.exit(0);
});