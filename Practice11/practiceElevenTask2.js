const http = require("http");

const pm = require('./personalmodule');
const os = require('os');

http.createServer(function(request,response){

    response.writeHead(200, {'Content-Type': 'text/html'});

    response.write(pm.helloFunction(os.userInfo().username));

    response.end("");
     
}).listen(5000);