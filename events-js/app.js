var events = require('events');

var eventEmitter = new events.EventEmitter();

//Create an event handler:
var eventHandler = function () {
    console.log('An event fired!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', eventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');