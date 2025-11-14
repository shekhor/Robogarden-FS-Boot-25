const eventEmitter = require('events');

const myEmitter = new eventEmitter();


myEmitter.on('greet', () => {
    console.log('Hello the event is triggered');
});


myEmitter.emit('greet');


myEmitter.on('welcome', (name) => {
    console.log(`Welcome to the Node.js event module example, ${name}!`);
});


myEmitter.emit('welcome', 'Alice');