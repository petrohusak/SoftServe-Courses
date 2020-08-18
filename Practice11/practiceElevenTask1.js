const http = require("http");

const os = require('os');
const path = require('path');

http.createServer(function(request,response){

    response.writeHead(200, {'Content-Type': 'text/html'});

    response.write(`<h2>System information</h2>`);
    response.write(`<p>Current user name: ${os.userInfo().username}</p>`);
    response.write(`<p>OS type: ${os.platform()}</p>`);
    response.write(`<p>System work time: ${os.uptime()/60} minutes</p>`);
    response.write(`<p>Current work directory: ${path.dirname(require.main.filename)}</p>`);
    response.write(`<p>Server file name: ${path.basename(__filename)}</p>`);

    response.end("");
     
}).listen(5000);