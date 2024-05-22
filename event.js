// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define an event handler for the 'greet' event
const greetHandler = () => {
  console.log('Hello, EventEmitter!');
};

// Assign the event handler to the 'greet' event
eventEmitter.on('greet', greetHandler);

// Emit the 'greet' event
eventEmitter.emit('greet');

// Define another event handler for the 'farewell' event
const farewellHandler = () => {
  console.log('Goodbye, EventEmitter!');
};

// Assign the event handler to the 'farewell' event
eventEmitter.on('farewell', farewellHandler);

// Emit the 'farewell' event
eventEmitter.emit('farewell');