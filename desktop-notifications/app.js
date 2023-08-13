const http = require('http');
const notifier = require('node-notifier');

var hacked = {

    title: 'Antivirus detected malware',
    message: 'Your computer has been hijacked',
    icon: 'C:\\Users\\admin\\Documents\\Hadron_Wallpaper.png',
}

notifier.notify(hacked);


var connection = {
    title: 'I\'m a notification',
    message: 'I\'m a notification message',
};

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'alert' }); //http header
    notifier.notify(alert);
    res.end();
}).listen(8080); //the server object listens on port 8080