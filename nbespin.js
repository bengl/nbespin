/*
nbespin.js
==========

Copyright (c) 2010 Bryan English

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//Dependencies
var fs = require("fs"),
	http = require("http"),
    sys = require("sys"),
	qs = require("querystring");

//Global vars
var fileName = process.argv[2],
	fileType = /\.(\w+)/.exec(fileName)[1];
	
//Helper functions	
function renderBespin(fileData){
	return '<html><head><title>' + fileName + '</title><link rel="stylesheet" href="https://bespin.mozillalabs.com/embedded/BespinEmbedded.css" /><script src="https://bespin.mozillalabs.com/embedded/BespinEmbedded.js"></script><script>window.onBespinLoad = function(){window.bespin = document.getElementById("editor").bespin;}</script></head><body><b style="font-size:2em;">' + fileName + '</b>&nbsp;<a href="javascript:document.getElementById(\'filedata\').innerHTML = document.getElementById(\'editor\').bespin.value;document.editorForm.submit();">Save</a><form id="editorForm" name="editorForm" action="/" method="post" style="height:0;"><textarea id="filedata" name="filedata" style="visibility:hidden;"></textarea></form><div style="height:80%" data-bespinoptions=\'{ "settings": { "strictlines": true }, "syntax": "' + (fileType?fileType:'txt') + '", "stealFocus": true }\' class="bespin" id="editor">' + fileData + '</div></body></html>';
}

function respond(res,data) {
	res.writeHeader(200, {
	  "Content-Length": data.length,
	  "Content-Type": "text/html"
	});
	res.write(data,encoding="utf8");
	res.close();
}

//Server
http.createServer(function(req,res){
	if (req.method=="GET") {
		var fd = fs.readFileSync(fileName,encoding="utf8");		
		respond(res,renderBespin(fd));
	}
	else if (req.method=="POST") {
		var body = ""; 
		req.addListener("data",function(chunk){
			body += chunk;
		}).addListener("end", function() { 
			var obj = qs.parse(body.replace(/\+/g,' '))["filedata"];
			fs.writeFileSync(fileName,obj,encoding="utf8");
			respond(res,renderBespin(obj));
		});
	}	
}).listen(8080);

sys.puts("Editing "+fileName+" at http://localhost:8080/ (open in a browser)");