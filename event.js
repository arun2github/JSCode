const events = require('events')
const eventEmitter = events.EventEmitter()

const eventHandler = () =>{
    console.log('event created');
}

eventEmitter.on('start',eventHandler);

eventEmitter.emit('start')