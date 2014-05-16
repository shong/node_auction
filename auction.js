var http = require("http");
var query_string;
function onRequest(request, response) {
	  //console.log(query_string);
	  //response.writeHead(200, {"Content-Type": "text/plain"});
	  query_string = request.url	  
	  
	  http.get("http://ib.client-testing.adnxs.net/ttj?id=1480678&size=300x250&debug_member=4450&dongle=infect", function(res) {
		  console.log(res.statusCode);
		  res.setEncoding('utf8');
		  res.on('data', function(chunk) {
			  response.write(chunk);
			  response.end();
			  console.log(chunk);
		  })
	  })
	  //response.write('12345');
	  //response.end();
	}

var web_server = http.createServer(onRequest)

web_server.listen(8888);

console.log(query_string);