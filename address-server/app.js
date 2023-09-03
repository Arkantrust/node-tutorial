var http = require('http');
var util = require('util');

//create a server object:
http.createServer(function (req, res) {
    const address = req.socket.remoteAddress + ":" + req.socket.remotePort; // IPv6 address of the client
    const msg = util.format("<p1> %s </p1>", address); // Port of the client

    res.writeHead(200, { 'Content-Type': 'text/html' }); //http header
    res.write('<h1> Connected! </h1>'); //write a response to the client
    res.end(msg); //end the response

    console.log("Connection: " + address);
}).listen(8080); //the server object listens on port 8080