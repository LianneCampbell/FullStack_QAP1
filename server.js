// Import the http module for creating web servers
const http = require('http');
// Import the fs module for interacting with the file system
const fs = require('fs');
// Import the path module for handling and transforming file paths
const path = require('path');
// Import the events module for creating and handling custom events
const EventEmitter = require('events');

// Global variable for enabling/disabling debug logs
global.DEBUG = true;

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Function to fetch and serve a file
function fetchFile(fileName, response) {
    // Read the file asynchronously
    fs.readFile(fileName, (error, content) => {
        if (error) {
            // If there's an error reading the file, send a 500 Internal Server Error response
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('500 Internal Server Error');
        } else {
            // If the file is read successfully, send a 200 OK response with the file content
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
        }
    });
};

// Create an HTTP server
const server = http.createServer((request, response) => {
    if (DEBUG) console.log('Request Url:', request.url); // Log the request URL if debugging is enabled
    let filePath = './views/'; // Base directory for HTML files
    switch (request.url) {
        case '/':
            filePath += 'index.html'; // Serve the index.html file for the root URL
            eventEmitter.emit('pageAccessed', 'index'); // Emit a custom event
            if (DEBUG) console.log(filePath);
            fetchFile(filePath, response);
            break;
        case '/about':
            filePath += 'about.html'; // Serve the about.html file for the /about URL
            eventEmitter.emit('pageAccessed', 'about'); // Emit a custom event
            if (DEBUG) console.log(filePath);
            fetchFile(filePath, response);
            break;
        case '/filesystem':
            filePath += 'filesystem.html'; // Serve the filesystem.html file for the /filesystem URL
            eventEmitter.emit('pageAccessed', 'filesystem'); // Emit a custom event
            if (DEBUG) console.log(filePath);
            fetchFile(filePath, response);
            break;
        case '/path':
            filePath += 'path.html'; // Serve the path.html file for the /path URL
            eventEmitter.emit('pageAccessed', 'path'); // Emit a custom event
            if (DEBUG) console.log(filePath);
            fetchFile(filePath, response);
            break;
        case '/http':
            filePath += 'http.html'; // Serve the http.html file for the /http URL
            eventEmitter.emit('pageAccessed', 'http'); // Emit a custom event
            if (DEBUG) console.log(filePath);
            fetchFile(filePath, response);
            break;
        case '/events':
            filePath += 'events.html'; // Serve the events.html file for the /events URL
            if (DEBUG) console.log(filePath);
            fetchFile(filePath, response);
            break;
        default:
            // For any other URL, send a 404 Not Found response
            if (DEBUG) console.log('404 Not Found');
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404 Not Found');
            break;
    }
});

// Add an event listener for the custom 'pageAccessed' event
eventEmitter.on('pageAccessed', (page) => {
    console.log(`The ${page} page was accessed.`);
});

// Make the server listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000...'); // Log a message when the server starts
});